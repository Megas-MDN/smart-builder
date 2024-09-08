import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { Chapisco } from "../pages/Chapisco/Chapisco";
import { Reboco } from "../pages/Reboco/Reboco";
import { PdfPage } from "../pages/Pdf/PdfPage";

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
    path: "/pdf",
    element: <PdfPage />,
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
