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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />, // Render ProductsPage only for "/products"
      },
      {
        path: "/products",
        element: <ProductsPage />, // Render ProductsPage only for "/products"
      },
      {
        path: "/services",
        element: <ServicesPage />, // Render ServicesPage only for "/services"
      },
      {
        path: "/aboutus",
        element: <AboutUs />, // Render AboutUs only for "/aboutus"
      },
      {
        path: "/contact",
        element: <ContactUs />, // Render ContactUs only for "/contact"
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
        path: "/dashboard",
        element: <Dashboard />, //
      },
      {
        path: "/dashboard/update-product/:id",
        element: <UpdateProduct />,
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
