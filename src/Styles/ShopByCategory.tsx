import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding-top: 50px;
  min-height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
export const Title = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 46px;
  word-spacing: 10px;
`;

export const SmallTitle = styled.div`
  padding: 10px;
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  button {
    margin-bottom: 4vh;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .btn > :hover {
    color: orange;
  }
`;

export const CardContainer = styled.div`
  padding-top: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* border-radius: 20px; */
  gap: 10px;
`;
export const Card = styled.div`
  width: 100%;
  position: relative;
  max-width: 350px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 15px;
  /* padding-bottom: 10px; */
  border: 5px solid #f8f9f8;
  img {
    width: 100%;
    /* max-width: 250px;
    max-height: 250px; */
    /* border-radius: 15px; */
  }
`;

export const DiscountWrapper = styled.div`
  position: absolute;
  width: 90%;
  background-color: #fea115;
  bottom: 10px;
  padding: 10px;
  min-height: 90px;
  color: white;
`;

export const Discount = styled.div`
  font-size: 30px;
  display: flex;
  font-weight: 800;
  text-align: center;
  justify-content: center;
  font-family: serif;
`;

export const Category = styled.div`
  text-transform: capitalize;
  width: 100%;
  text-align: center;
  font-weight: 700;
`;

export const ShopButton = styled.div`
  text-transform: capitalize;
  width: 100%;
  text-align: center;
  font-weight: 700;
`;

export const ImageWrapper = styled.div`
  width: 350px;
  min-height: 300px;
  display: flex;
  align-items: center;
  cursor: pointer;
  /* margin-bottom: 20px; */
`;
export const Image = styled.img`
  transition: all ease-in-out 800ms;
  &:hover {
    transition: all ease-in-out 800ms;
    -ms-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
`;
export const ItemTitle = styled.div`
  font-size: 13px;
  font-weight: 500;
  padding-left: 10px;
  cursor: pointer;

  /* width: 90%; */
  &:hover {
    color: orange;
  }
`;
export const Rating = styled.div`
  width: 90%;
  justify-self: flex-start;
  padding-left: 10px;
  .rating {
    font-size: 12px;
  }
`;

export const CartPriceContainer = styled.div`
  display: flex;
  width: 90%;
  padding-left: 10px;
  justify-content: space-between;
`;

export const Price = styled.div`
  padding-bottom: 2px;
`;
export const PriceWrapper = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  color: #068d33;
  display: flex;
  justify-self: flex-start;
  align-items: center;
`;
export const CartWrap = styled.div`
  border: 1px solid #068d33;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
