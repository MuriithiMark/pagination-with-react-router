import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import IndexPage from "./pages/IndexPage";
import HomePage from "./pages/HomePage";
import Products, { loader as productsLoader } from "./pages/Products";
import Product, { loader as productLoader } from "./pages/Product";
import ErrorPage from "./pages/ErrorPage";

import "./index.css";
import ThemeContextProvider from "./services/context/ThemeContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <span>Navigate to Products</span>
      },
      {
        path: "/products",
        element: <Products />,
        loader: productsLoader,
        index: true,
      },
      {
        path: "/products/:productId",
        element: <Product />,
        loader: productLoader,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>
);
