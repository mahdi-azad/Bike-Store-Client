import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/main.scss";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import LogIn from "./pages/LogIn.jsx";
// import App from "./App.jsx";
import { BrowserRouter, Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/auth/Register.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import { Toaster } from "react-hot-toast";
import CreateProduct from "./components/admin/CreateProduct.jsx";
import DisplayProduct from "./components/admin/DisplayProduct.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import DisplayService from "./components/admin/DisplayService.jsx";
import Dashboard from "./components/admin/Dashboard.jsx";
import UpdateProduct from "./components/admin/UpdateProduct.jsx";
import SingleService from "./pages/SingleService.jsx";
import CreateService from "./components/admin/CreateService.jsx";
import UpdateService from "./components/admin/UpdateService.jsx";
import CartPage from "./pages/CartPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/createproduct",
        element: <CreateProduct />, //
      },
      {
        path: "/displayproduct",
        element: <DisplayProduct />, //
      },
      {
        path: "/displayproduct/:id",
        element: <SingleProduct />, //
      },
      {
        path: "/display-service",
        element: <DisplayService />, //
      },
      {
        path: "/create-service",
        element: <CreateService />, //
      },
      {
        path: "/display-service/:id",
        element: <SingleService />, //
      },
      {
        path: "/dashboard",
        element: <Dashboard />, //
      },
      {
        path: "/dashboard/update-product/:id",
        element: <UpdateProduct />,
      },
      {
        path: "/dashboard/update-service/:id",
        element: <UpdateService />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
    // Render HomePage only for "/"
  },
  {
    path: "/signin",
    element: <LogIn />,
  },
  {
    path: "/register",
    element: <Register />, // Render LogIn only for "/signin"
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <div>
      <Toaster />
    </div>
  </StrictMode>
);
