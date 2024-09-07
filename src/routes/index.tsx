import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { Chapisco } from "../pages/Chapisco/Chapisco";
import { Reboco } from "../pages/Reboco/Reboco";

export const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/chapisco",
    element: <Chapisco />,
  },
  {
    path: "/reboco",
    element: <Reboco />,
  },
  {
    path: "*",
    element: <MainPage />,
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
