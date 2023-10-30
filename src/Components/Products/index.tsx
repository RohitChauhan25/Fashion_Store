import { Brand, Discount, Off } from "Styles/Shop";
import star from "Assets/images/start.png";
import {
  Conatiner,
  Image,
  ImageWrapper,
  ItemWrapper,
  Price,
  ProdRating,
  ProdTitle,
  SimilarProdContainer,
} from "Styles/product";
import { useNavigate } from "react-router-dom";

const ProductList = ({ Products }: any) => {
  const navigate = useNavigate();

  return (
    <Conatiner>
      <SimilarProdContainer>
        {Products.length > 0 &&
          Products?.map((Prod: any, index: number) => {
            return (
              <ItemWrapper
                key={index}
                onClick={() => {
                  navigate(
                    `/detail/${Prod.category}/${Prod.subCategory}/${Prod.for}/${Prod.id}`
                  );
                }}
              >
                <ImageWrapper>
                  <Image src={Prod?.thumbnail} />
                  <ProdRating>
                    {Prod.rating}
                    <img src={star} alt="rating" /> | 26
                  </ProdRating>
                </ImageWrapper>
                <Brand>{Prod?.brand}</Brand>
                <ProdTitle>{Prod?.title}</ProdTitle>
                <Price>
                  Rs. {Prod.price}
                  <Discount>
                    <del>Rs. {Prod?.price}</del>
                    <Off>({Prod?.discountPercentage}%OFF)</Off>
                  </Discount>
                </Price>
              </ItemWrapper>
            );
          })}
      </SimilarProdContainer>
    </Conatiner>
  );
};

export default ProductList;
