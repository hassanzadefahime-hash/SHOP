import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App.jsx";
import AboutUs from "./component/AboutUs";
import ArticleList from "./component/ArticleList";
import ArticlePage from "./component/ArticlePage";
import CartDesktop from "./component/CartDesktop";
import ContactUs from "./component/ContactUs";
import Home from "./component/Home";
import NotFound from "./component/NotFound";
import ProductDetails from "./component/ProductDetails";
import ProductsGroup from "./component/ProductsGroupPage";
import ShopPage from "./component/ShopPage";
import Signin from "./component/SignIn";

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

