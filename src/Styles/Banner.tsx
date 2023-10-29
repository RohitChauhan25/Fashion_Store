import styled from "styled-components";

export const SliderWrap = styled.div`
  margin: 0;
  /* width: 100%; */
  /* -webkit-overflow-scrolling: touch; */

  .splide__list {
    cursor: grab;
    display: flex !important;
    backface-visibility: visible !important;
  }

  .splide__slide {
    width: max-content;
  }

  button {
    width: 30px !important;
    margin-left: 1px;
    margin-right: 1px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-height: 500px;
    /* border: 10px solid pink; */
  }
`;
