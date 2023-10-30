import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  z-index: 2;
  background-color: white;
  /* position: relative; */
  justify-content: space-between;

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 1024px) {
    box-shadow: none;
  }
  .slide {
    margin-left: 250px;
    transition: all 500ms ease-in-out;
  }
`;

export const FaButton = styled.div`
  cursor: pointer;
  display: none;
  padding-left: 30px;
  padding-top: 30px;

  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const Close = styled.div`
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: flex-end;
  width: 230px;
  cursor: pointer;
  padding-top: 10px;
`;

export const ResponsiveMenu = styled.div<{ width: boolean }>`
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100vh;
  background-color: white;
  transition: 500ms ease;
  overflow: scroll;
  visibility: hidden;
  opacity: 0;
  ul {
    background-color: white;
    font-weight: 600;
    font-size: 12px;
  }

  @media (max-width: 1024px) {
    visibility: visible;
    opacity: 1;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  padding-top: 20px;
  padding-right: 150px;
  gap: 30px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const MegaMenu = styled.div`
  position: absolute;
  justify-self: center;
  height: 300px;
  max-width: 1000px;
  visibility: hidden;
  transition: 2s;
  opacity: 0;
  left: 20%;
  width: 100%;
  top: 120%;
  box-shadow: 0px 10px 2px 3px lightblue;
`;

export const Title = styled.div<{ color: string }>`
  display: flex;
  font-weight: 600;
  text-decoration: ${(props) => (props.color ? `underline` : `none`)};
  color: ${(props) => (props.color ? `green` : `black`)};
  cursor: pointer;
`;

export const LogoWrapper = styled.div`
  padding-left: 50px;
  padding-top: 10px;
  height: 60px;
  img {
    cursor: pointer;
    padding: 0;
    margin: 0;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  padding-top: 20px;
  padding-right: 50px;
  height: 60px;
  width: 200px;
  gap: 30px;
  justify-content: flex-end;
  .icon {
    cursor: pointer;
  }
`;

export const WishList = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 12px;
`;

export const CartButton = styled.button`
  sup {
    color: red;
    font-weight: bold;
    font-size: 1.2vw;
  }
`;
