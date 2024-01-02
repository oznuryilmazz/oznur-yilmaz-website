import { Navigate, useRoutes } from "react-router-dom";
import WebsiteLayout from "./layout/WebsiteLayout";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import ExperienceTimeline from "./pages/experience/ExperienceTimeline";
import PortfolioDetail from "./pages/portfolio/PortfolioDetail";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <WebsiteLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "portfolio-detail",
          element: <PortfolioDetail />,
        },
        {
          path: "experience",
          element: <ExperienceTimeline />,
        },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
