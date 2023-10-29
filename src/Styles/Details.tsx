import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-top: 100px;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  width: 50%;
  padding-top: 20px;
  height: fit-content;
`;

export const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const DetailsContainer = styled.div`
  padding-top: 20px;
  gap: 15px;
  width: 50%;
  padding-left: 5%;
  display: flex;
  flex-direction: column;
`;

export const BrandName = styled.div`
  font-weight: 700;
  font-size: 22px;
`;

export const Title = styled.div`
  font-weight: 500;
  color: #235382;
  font-size: 20px;
  padding-bottom: 10px;
`;

export const Rating = styled.div`
  border: 1px solid #b0b8c0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  font-weight: 700;
  padding: 0 15px;
  height: 30px;
  border-radius: 3px;
  cursor: pointer;
  img {
    padding-left: 5px;
    padding-right: 5px;
    height: 18px;
    width: 18px;
  }
  span {
    font-weight: 400;
    border-left: 1px solid #979ea5;
    padding-left: 5px;
    color: #979ea5;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  text-transform: uppercase;
  padding-top: 15px;
  gap: 20px;
`;

export const AddToCart = styled.div`
  display: flex;
  width: 300px;
  max-width: 250px;
  align-items: center;
  justify-content: center;
  background-color: #eb356c;
  font-weight: 700;
  color: white;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  span {
    padding-left: 5px;
  }
`;

export const AddToWishlist = styled.div`
  display: flex;
  display: flex;
  width: 300px;
  max-width: 250px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-weight: 700;
  border-radius: 5px;
  border: 1px solid #dcd5d5;
  padding: 10px;
  cursor: pointer;

  &:hover {
    border: 1px solid black;
  }

  span {
    padding-left: 5px;
  }
`;

export const SepratorLine = styled.div`
  width: 90%;
  margin-top: 10px;
  border: 1px solid #bcc2c8;
`;

export const PriceWrapper = styled.div`
  font-weight: 700;
  font-size: 22px;

  span {
    font-weight: 400;
    color: gray;
    font-size: 20px;
    padding-left: 10px;
  }
`;

export const Discount = styled.span`
  color: #ed720c !important;
  font-weight: 600 !important;
`;

export const Texes = styled.div`
  color: #039c03;
  font-size: 15px;
  font-weight: 700;
`;

export const SizeWrapper = styled.div``;

export const Size = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  span {
    padding-left: 10px;
    color: red;
    cursor: pointer;
  }
`;

export const SizeButton = styled.div`
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const SizeLiszt = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 20px;
  .selected {
    background-color: black;
    color: white;
  }
`;

export const Delevery = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  span {
    padding-right: 15px;
  }
`;

export const DeleveryOptions = styled.div`
  div {
    padding: 5px 5px 5px 0;
  }
`;

export const TabContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  .ant-tabs-card {
    width: 450px !important;
  }
`;
export const ProductDetails = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  span {
    padding-right: 15px;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  div {
    padding: 5px 5px 5px 0;
  }
`;

export const DetailTitle = styled.div`
  display: flex;
  align-items: center;
`;
