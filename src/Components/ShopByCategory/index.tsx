import useGet from "hooks/useGet";
import { useEffect, useState } from "react";
import {
  Container,
  Title,
  SmallTitle,
  CardContainer,
  Card,
  ImageWrapper,
  Image,
  DiscountWrapper,
  Category,
  Discount,
  ShopButton,
} from "Styles/ShopByCategory";

const ShopByCategort = () => {
  const [products, setProduct] = useState([]);
  const { refetch, data } = useGet({
    key: "products",
    url: "/products",
  });

  useEffect(() => {
    refetch();
    if (data) {
      setProduct(data?.data.AllCategories);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Title>SHOP BY CATEGORY</Title>
      <SmallTitle>New Collection New Modern Design</SmallTitle>

      <CardContainer>
        {products?.map((item: any, index: number) => {
          return (
            <Card key={index}>
              <ImageWrapper>
                <Image src={item?.image} />
              </ImageWrapper>
              <DiscountWrapper>
                <Category>{item?.type}</Category>
                <Discount> UP TO {item?.discount}% OFF</Discount>
                <ShopButton>Shop Now</ShopButton>
              </DiscountWrapper>
            </Card>
          );
        })}
      </CardContainer>
    </Container>
  );
};

export default ShopByCategort;
