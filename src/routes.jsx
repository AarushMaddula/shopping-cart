import App from "./components/App";
import Products from "./components/Products";
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
        element: <Products />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ]
  }
];

export default routes
