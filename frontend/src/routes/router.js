import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import AddItemPage from "../pages/AddItemPage";
import HistoriesPage from "../pages/HistoriesPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "add",
        element: <AddItemPage />,
      },
      {
        path: "histories",
        element: <HistoriesPage />,
      },
    ],
  },
]);

export default router;
