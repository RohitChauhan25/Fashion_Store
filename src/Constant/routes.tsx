import { IRoute } from "Interfaces";
import AddProduct from "pages/AddProducts";
import Details from "pages/Details/Details";
import Home from "pages/Home";
import Shop from "pages/Shop";

export const HomeRoute = {
  component: Home,
  path: "/home",
  exact: true,
  restricted: false,
};

// export const AddProductRoute = {
//   component: AddProduct,
//   path: "/",
//   exact: true,
//   restricted: false,
// };

export const DetailRoute = {
  component: Details,
  path: "/detail/:category/:subcategory/:for/:id",
  exact: true,
  restricted: false,
};

export const ShopeRoute = {
  component: Shop,
  path: "/",
  exact: true,
  restricted: false,
};
export const ShoupRote2 = {
  component: Shop,
  path: "/:type/:for",
  exact: true,
  restricted: false,
};

const ROUTES: IRoute[] = [ShopeRoute, HomeRoute, DetailRoute, ShoupRote2];

export default ROUTES;
