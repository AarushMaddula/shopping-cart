import App from "./components/App";
import ProductPage from "./components/ProductPage";
import ErrorPage from "./components/ErrorPage";
import Checkout from "./components/Checkout"

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ]
  }
];

export default routes
