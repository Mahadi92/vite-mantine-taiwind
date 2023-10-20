import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "@/_app/layouts/DashboardLayout";
import { ordersRouterModule } from "@/pages/orders/orders.router";

export const rootRouter = createBrowserRouter([
  {
    path: "",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        children: ordersRouterModule,
      },
    ],
  },
]);
