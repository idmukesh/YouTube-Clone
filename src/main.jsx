// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import CreateChannel from "./component/CreateChannel.jsx";
import ShortsPage from "./Pages/ShortsPage.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import WatchPage from "./Pages/WatchPage.jsx";
import ChannelPage from "./Pages/ChannelPage.jsx";
import SearchPage from "./Pages/SearchPage.jsx";
import SubscriptionPage from "./Pages/SubscriptionPage.jsx";
import HistoryPage from "./Pages/HistoryPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shorts",
        element: <ShortsPage />,
      },
      {
        path:"/channelpage",
        element:<ChannelPage/>
      },
      {
        path:"/createchannel",
        element:<CreateChannel/>
      },
      {
        path:"/watch/:id",
        element:<WatchPage/>
      },
      {
        path:"/search",
        element:<SearchPage/>
      },
      {
        path:"/login",
        element:<LoginPage/>
      },
      {
        path:"/signup",
        element:<RegisterPage/>
      },
      {
        path:"/subscription",
        element:<SubscriptionPage/>
      },
      {
        path:"/historypage",
        element:<HistoryPage/>
      }
    ],
    errorElement:<ErrorPage/>
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}></RouterProvider>
);
