import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { Chapisco } from "../pages/Chapisco/Chapisco";

export const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/chapisco",
    element: <Chapisco />,
  },
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
