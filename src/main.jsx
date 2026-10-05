import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./component/NotFound";
import ContactUs from "./component/ContactUs";
import AboutUs from "./component/AboutUs";
import ProductDetails from "./component/ProductDetails";
import ProductsGroup from "./component/ProductsGroupPage";
import ArticlePage from "./component/ArticlePage";
import Signin from "./component/SignIn";
import ArticleList from "./component/ArticleList";
import CartDesktop from "./component/CartDesktop";
import Home from "./component/Home";
import ShopPage from "./component/ShopPage";


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
        path: "/group/:groupId",
        element: <ProductsGroup />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "/products/:productID",
        element: <ProductDetails />,
      },
      {
        path: "/article",
        element: <ArticleList />,
      },
      {
        path: "/article/:articleId",
        element: <ArticlePage />,
      },
      {
        path: "/signin",
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
