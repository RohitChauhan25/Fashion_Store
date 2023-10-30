import logo from "../../Assets/images/QuickStore (1).png";
import {
  WishList,
  Container,
  NavContainer,
  Title,
  LogoWrapper,
  CartWrapper,
  MegaMenu,
  ResponsiveMenu,
  FaButton,
  Close,
} from "../../Styles/Header";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Menu } from "antd";
import { items, items2 } from "Constant/headerData";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [collapsed, _setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const tab = useSelector((state: any) => state?.headerReducer?.tab);

  const onClick = (e: any) => {
    // setCurrent(e.key);

    // navigate(`/${}`)
    console.log(e);
  };

  return (
    <Container>
      <LogoWrapper onClick={() => navigate("/")}>
        <img src={logo} alt="" height={60} width={250} />
      </LogoWrapper>

      <NavContainer>
        <Menu
          onClick={onClick}
          onAuxClick={(e) => console.log(e)}
          className="abc"
          // selectedKeys={[current]}
          mode="horizontal"
          items={items2}
        />
      </NavContainer>

      <ResponsiveMenu width={open} className={open ? "slide" : ""}>
        <Close onClick={() => setOpen(!open)}>X</Close>
        <Menu mode="inline" inlineCollapsed={collapsed} items={items} />
      </ResponsiveMenu>

      <FaButton onClick={() => setOpen(!open)}>
        <FaBars />
      </FaButton>

      <CartWrapper>
        <WishList>
          <BiUser size="2vw" className="icon" />
          Profile
        </WishList>
        <WishList>
          <AiOutlineHeart size="2vw" className="icon" /> Wishlist
        </WishList>
        <WishList>
          <BsHandbag size="2vw" className="icon" />
          Cart
        </WishList>
      </CartWrapper>
    </Container>
  );
};

export default Header;
