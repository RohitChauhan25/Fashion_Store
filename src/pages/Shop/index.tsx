import { useEffect, useState } from "react";
import {
  Container,
  ItemContainer,
  ItemWrapper,
  Image,
  FilterWrapper,
  Brand,
  Title,
  Price,
  Discount,
  Off,
  Rating,
  ImageWrapper,
  WishList,
  BrandName,
  BrandWrapper,
  More,
  DiscountRange,
  PriceRange,
} from "Styles/Shop";
import useGet from "hooks/useGet";
import star from "Assets/images/start.png";
import { AiOutlineHeart } from "react-icons/ai";
import { Checkbox, Radio, RadioChangeEvent, Space } from "antd";
import { Prices, discountRange } from "Constant/priceData";
import Header from "Components/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleLoader } from "Store/slice/loader";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [brands, setBrands] = useState([]);
  const [radioValue, setRadioValue] = useState();
  const navigate = useNavigate();

  const {
    refetch: refetchBrand,
    data: BrandData,
    isLoading,
  } = useGet({
    key: "brand",
    url: "/brands",
  });

  const { refetch, data } = useGet({
    key: "products",
    url: "/products",
  });

  if (isLoading) {
    dispatch(toggleLoader(true));
  }

  useEffect(() => {
    refetch();
    refetchBrand();
  }, []);

  useEffect(() => {
    if (data?.data) dispatch(toggleLoader(false));
    setProducts(data?.data);
    if (BrandData?.data?.length)
      setBrands(
        BrandData?.data?.map((item: any) => {
          return {
            label: item?.label,
            value: item?.value,
          };
        })
      );
  }, [data, BrandData]);

  const onChange = (e: RadioChangeEvent) => {
    setRadioValue(e.target.value);
  };

  return (
    <>
      <Header />
      <Container>
        <FilterWrapper>
          <BrandName>BRAND</BrandName>
          <BrandWrapper>
            {brands?.length > 0 &&
              brands?.map(
                (item: any, index) =>
                  index < 8 && (
                    <Checkbox
                      value={item?.value}
                      onChange={onChange}
                      key={index}
                    >
                      {item.value}
                    </Checkbox>
                  )
              )}
            <More>+{brands?.length - 8} more</More>
          </BrandWrapper>

          <PriceRange>PRICE</PriceRange>
          <BrandWrapper>
            {Prices?.map((item: any, index: number) => (
              <Checkbox value={item?.value} key={index}>
                Rs.{item.value}
              </Checkbox>
            ))}
          </BrandWrapper>

          <DiscountRange>DISCOUNTRANGE</DiscountRange>
          <BrandWrapper>
            {discountRange?.map((item: any, index: number) => (
              <Radio.Group value={radioValue} onChange={onChange} key={index}>
                <Space direction="vertical" key={index}>
                  <Radio value={item?.value} key={index}>
                    {item?.value}% and above
                  </Radio>
                </Space>
              </Radio.Group>
            ))}
          </BrandWrapper>
        </FilterWrapper>

        <ItemContainer>
          {products?.map((item: any, index: number) => {
            const price = Math.floor(
              item?.price - (item?.price * item?.discountPercentage) / 100
            );
            return (
              <ItemWrapper
                key={index}
                // href={`detail/${item.category}/${item.subCategory}/${item.for}/${item.id}`}
                // target="blank"
                onClick={() =>
                  navigate(
                    `/detail/${item.category}/${item.subCategory}/${item.for}/${item.id}`,
                    { replace: true }
                  )
                }
              >
                <ImageWrapper>
                  <Image src={item?.thumbnail} />
                  <Rating>
                    {item.rating}
                    <img src={star} alt="rating" /> | 26
                  </Rating>
                </ImageWrapper>
                <WishList className="child">
                  <button>
                    <AiOutlineHeart height={50} width={50} />
                    wishlist
                  </button>
                </WishList>
                <Brand>{item?.brand}</Brand>
                <Title>{item?.title}</Title>
                <Price>
                  Rs. {price}
                  <Discount>
                    <del>Rs. {item?.price}</del>
                    <Off>({item?.discountPercentage}%OFF)</Off>
                  </Discount>
                </Price>
              </ItemWrapper>
            );
          })}
        </ItemContainer>
      </Container>
    </>
  );
};

export default Shop;
