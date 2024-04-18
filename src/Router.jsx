//Import components
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Template from "./Template";

//Import pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import Popular from "./pages/Popular";
import New from "./pages/New";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import News from "./pages/News";
import Cart from "./pages/Cart";
import ProductSingle from "./pages/ProductSingle";
import ProductSingleCatalog from "./pages/ProductSingleCatalog";
import ProductSingleNew from "./pages/ProductSingleNew";
import OrderProduct from "./pages/OrderProduct";

export default function Router() {
  const routing = createBrowserRouter([
    {
      path: "/",
      element: <Template />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/about-water/:id",
          element: <ProductSingle />,
        },

        {
          path: "/about-water-new/:id",
          element: <ProductSingleNew />,
        },

        {
          path: "/catalog",
          element: <Catalog />,
        },

        {
          path: "/cart",
          element: <Cart />,
        },

        {
          path: "/about-catalog/:id",
          element: <ProductSingleCatalog />,
        },

        {
          path: "/popular",
          element: <Popular />,
        },
        {
          path: "/new",
          element: <New />,
        },

        {
          path: "/news",
          element: <News />,
        },

        {
          path: "/order",
          element: <OrderProduct />,
        },

        {
          path: "/contacts",
          element: <Contacts />,
        },

        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routing} />;
}
