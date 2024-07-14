import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import HomePage from "../pages/Home";
import FeedbackPage from "../pages/Feedback";
import LoginPage from "../pages/Login";
import FoodsPage from "../pages/Foods";
import FoodDetailPage from "../pages/FoodDetail";
import FoodsRootLayout from "../pages/FoodsRootLayout";
import CheckoutPage from "../pages/Checkout";
import RegisterPage from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "foods",
        element: <FoodsRootLayout />,
        children: [
          { index: true, element: <FoodsPage /> },
          { path: ":foodId", element: <FoodDetailPage /> },
        ],
      },
      { path: "feedback", element: <FeedbackPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: 'checkout', element: <CheckoutPage />}
    ],
  },
]);
