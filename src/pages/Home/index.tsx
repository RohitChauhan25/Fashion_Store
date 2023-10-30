import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import { Conatiner } from "Styles/Home";
import ShopByCategort from "Components/ShopByCategory";

const Home = () => {
  return (
    <Conatiner>
      <Header />
      <Banner />
      <ShopByCategort />
    </Conatiner>
  );
};

export default Home;
