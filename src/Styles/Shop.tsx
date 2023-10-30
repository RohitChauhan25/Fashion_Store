import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const FilterWrapper = styled.div`
  width: 270px;
  margin-top: 200px;
  border: 1px solid #b7babc;
  padding-top: 5px;
  height: 100%;
  /* padding-left: 20px; */
`;

export const BrandName = styled.div`
  font-weight: 600;
  padding-top: 20px;
  padding-bottom: 5px;
  padding-left: 20px;
`;

export const BrandWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 20px;
  border-bottom: 1px solid #b7babc;
  padding-bottom: 20px;
`;

export const More = styled.div`
  color: red;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const PriceRange = styled.div`
  font-weight: 600;
  padding: 5px 5px 5px 20px;
`;
export const DiscountRange = styled.div`
  font-weight: 600;
  padding: 5px 5px 5px 20px;
`;

export const ItemContainer = styled.div`
  margin-top: 200px;
  /* padding: 25px 0; */
  padding-top: 25px;
  padding-left: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
  justify-content: space-evenly;
  border-top: 1px solid #b7babc;
  width: 100%;
`;

export const ItemWrapper = styled.div`
  width: 230px;
  height: 400px;
  position: relative;
  cursor: pointer;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
    .child {
      transition: all 300ms ease-in-out;
      padding-top: 15px;
      /* height: 75px; */
      visibility: visible;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 230px;
  cursor: pointer;
  position: relative;
`;

export const Image = styled.img`
  width: 230px;
  height: 300px;
`;

export const Brand = styled.div`
  padding-left: 5px;
  padding-top: 5px;
  font-size: 13px;
  font-weight: 700;
`;

export const Title = styled.div`
  padding-left: 5px;
  font-size: 13px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Price = styled.div`
  padding-left: 5px;
  margin-top: 5px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const Discount = styled.div`
  font-size: 12px;
  font-weight: 400;
  padding-left: 10px;
`;

export const Off = styled.span`
  padding-left: 10px;
  color: red;
  font-weight: 500;
`;

export const Rating = styled.div`
  position: absolute;
  background-color: #ece7df;
  align-items: center;
  justify-content: center;
  padding: 4px;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  left: 10px;
  top: 270px;
  img {
    padding-left: 5px;
    padding-right: 5px;
    height: 13px;
    width: 13px;
  }
`;

export const WishList = styled.p`
  position: absolute;
  visibility: hidden;
  height: 60px;
  width: 100%;
  background-color: white;
  bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    border: 1px solid #dad9d9;
    padding: 10px 10px;
    background-color: transparent;
    width: 90%;
    display: flex;
    justify-content: center;
    gap: 10px;
    border-radius: 5px;
    text-transform: uppercase;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1); */
    font-weight: 600;
    cursor: pointer;
  }
`;
