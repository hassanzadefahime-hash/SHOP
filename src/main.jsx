import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App.jsx";
import AboutUs from "./components/pages/AboutUs";
import ArticleList from "./components/pages/ArticleList";
import ArticlePage from "./components/pages/ArticlePage";
import CartDesktop from "./components/pages/CartDesktop";
import ContactUs from "./components/ContactUs";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import ProductDetails from "./components/pages/ProductDetails";
import ProductsGroup from "./components/pages/ProductsGroupPage";
import ShopPage from "./components/pages/ShopPage";
import Signin from "./components/SignIn";

import { store } from "./store";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <CartDesktop />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "products",
        element: <ShopPage />,
      },
      {
        path: "group/:groupId",
        element: <ProductsGroup />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "products/:productID",
        element: <ProductDetails />,
      },
      {
        path: "article",
        element: <ArticleList />,
      },
      {
        path: "article/:articleId",
        element: <ArticlePage />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

