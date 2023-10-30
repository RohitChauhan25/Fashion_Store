import ROUTES from "Constant/routes";
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import PrivateRoute from "./private";
import PublicRoute from "./public";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        {ROUTES.map((route, index) => {
          const { component: Component, path, restricted } = route;
          return (
            <Route
              key={index}
              path={path}
              element={
                restricted ? (
                  <PrivateRoute component={Component} />
                ) : (
                  <PublicRoute restricted={false} component={Component} />
                )
              }
            />
          );
        })}
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
