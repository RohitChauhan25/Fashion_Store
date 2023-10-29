import Header from "Components/Header";
import { Sizes } from "Constant/priceData";
import star from "Assets/images/start.png";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import swiper from "swiper";
import {
  Container,
  ImageContainer,
  DetailsContainer,
  BrandName,
  Title,
  Rating,
  SepratorLine,
  PriceWrapper,
  Discount,
  Texes,
  SizeWrapper,
  Size,
  SizeButton,
  SizeLiszt,
  ButtonWrapper,
  AddToWishlist,
  AddToCart,
  Delevery,
  DeleveryOptions,
  TabContainer,
  ProductDetails,
  DetailsWrapper,
  DetailTitle,
  ProductWrapper,
} from "Styles/Details";
import { useEffect, useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { Tabs } from "antd";
import { BiDetail } from "react-icons/bi";
import useGet from "hooks/useGet";
import { useParams } from "react-router-dom";
import ProductList from "Components/Products";
import { useDispatch } from "react-redux";
import { toggleLoader } from "Store/slice/loader";

const arr = [
  {
    title: "RETURNS",
    content:
      "Easy 10 days return and exchange. Return Policies may vary based on products and promotions.",
  },
  {
    title: "OUR PROMISS",
    content: "We assure the authenticity and quality of our products.",
  },
];
const Details = () => {
  const [size, setSize] = useState(-1);
  const dispatch = useDispatch();
  const [similarProducts, setSimilarProducts] = useState([]);
  const { id, category, subcategory, for: gender } = useParams();
  const [details, setDetails] = useState<any>([]);
  const [Product, setProduct] = useState<any>();
  const [thumbsSwiper, setThumbsSwiper] = useState<swiper | null>(null);
  const subCatArray = [subcategory];

  console.log(subCatArray);
  const {
    refetch: refetchProduct,
    data: productData,
    isLoading,
  } = useGet({
    key: `singleProduct${id}`,
    url: `/product/${id}`,
  });

  const { refetch, data: similarData } = useGet({
    key: `similerProduct${id}`,
    url: `/products?category=${category}&subCategory=["${subCatArray}"]&for=${gender}`,
  });

  if (isLoading) {
    dispatch(toggleLoader(true));
  }

  const tabItems = arr.map((item, index) => ({
    label: item.title,
    key: String(index + 1),
    children: item.content,
  }));

  useEffect(() => {
    if (id) {
      refetchProduct();
      refetch();
    }
  }, [id]);

  useEffect(() => {
    if (productData) {
      dispatch(toggleLoader(false));
      setProduct(productData?.data);
      const details = productData?.data?.description?.split("'%'");
      setDetails(details);
    }
  }, [productData]);

  useEffect(() => {
    setSimilarProducts(similarData?.data);
  }, [similarData]);

  return (
    <>
      <Header />
      <Container>
        <ProductWrapper>
          <ImageContainer>
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {Product?.images.map((item: string) => {
                return (
                  <SwiperSlide>
                    <img src={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {Product?.images?.map((item: string) => {
                return (
                  <SwiperSlide>
                    <img src={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <TabContainer>
              <Tabs
                defaultActiveKey="1"
                type="card"
                size={"small"}
                items={tabItems}
              />
            </TabContainer>
          </ImageContainer>
          <DetailsContainer>
            <BrandName>{Product?.brand}</BrandName>
            <Title>{Product?.title}</Title>
            <Rating>
              {Product?.rating} <img src={star} alt="rating" />
              <span>186 Ratings</span>
            </Rating>
            <SepratorLine />
            <PriceWrapper>
              Rs.
              {Math.floor(
                Product?.price -
                  (Product?.price * Product?.discountPercentage) / 100
              )}
              <span>
                MRP <del> Rs. {Product?.price}</del>
              </span>
              <Discount>({Product?.discountPercentage}% OFF)</Discount>
            </PriceWrapper>
            <Texes>inclusive of all taxes</Texes>
            <SizeWrapper>
              <Size>
                Select Size <span> Size Chart {">"}</span>
              </Size>
              <SizeLiszt>
                {Sizes?.map((item: any, index) => {
                  return (
                    <SizeButton
                      onClick={() => setSize(index)}
                      className={index === size ? "selected" : ""}
                    >
                      {item.value}
                    </SizeButton>
                  );
                })}
              </SizeLiszt>
            </SizeWrapper>
            <ButtonWrapper>
              <AddToCart>
                <BsHandbag size="1.5vw" className="icon" />
                <span> Add to BAg</span>
              </AddToCart>
              <AddToWishlist>
                <AiOutlineHeart size="1.5vw" className="icon" />
                <span> Wishlist</span>
              </AddToWishlist>
            </ButtonWrapper>
            <SepratorLine />
            <Delevery>
              <span>DELIVERY OPTIONS</span>
              <CiDeliveryTruck size="1.5vw" className="icon" />
            </Delevery>
            <DeleveryOptions>
              <div>100% Original Products</div>
              <div>Pay on delivery might be available</div>
              <div>Easy 14 days returns and exchanges</div>
              <div>Try & Buy might be available</div>
            </DeleveryOptions>

            <ProductDetails>
              <DetailTitle>
                <span>PRODUCT DETAILS</span>
                <BiDetail size="1.5vw" className="icon" />
              </DetailTitle>

              <DetailsWrapper>
                {details.map((item: string, index: number) => (
                  <div key={index}>{item}</div>
                ))}
              </DetailsWrapper>
            </ProductDetails>
            <SepratorLine />
          </DetailsContainer>
        </ProductWrapper>

        {similarProducts && (
          <ProductList
            Products={similarProducts}
            refetchProduct={refetchProduct}
          />
        )}
      </Container>
    </>
  );
};

export default Details;
