import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage";

export const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  // {
  //   path: "/about",
  //   element: (
  //     <>
  //       <MainNavBar />
  //       <div>About</div>
  //     </>
  //   ),
  // },
  // {
  //   path: "/dashboard",
  //   element: (
  //     <>
  //       <MainNavBar />
  //       <div>Dashboard</div>
  //     </>
  //   ),
  // },
]);
