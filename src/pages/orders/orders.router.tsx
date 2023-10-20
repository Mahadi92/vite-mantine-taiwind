import { RouteObject } from "react-router-dom";
import OrderPage from "./orders.page";

export const ordersRouterModule: RouteObject[] = [
  {
    path: "order-list",
    element: <OrderPage />,
  },
  {
    path: "new",
    element: <OrderPage />,
  },
];
