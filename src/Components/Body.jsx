import Home from "./Home";
import NavBar from "../HomePage/header/Navbar";
import Events from "../Events/Events";
import Gallery from "../Gallery/Gallery";
import Team from "../Team/Team";
import About from "../About/About";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

const Body = () => {
  const AppLayout = () => {
    return (
      <div>
        <NavBar />
        <Outlet />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/", // Root path for Home
          element: <Home />,
        },
        {
          path: "/aboutUs",
          element: <About />,
        },
        {
          path: "/events",
          element: <Events />,
        },
        {
          path: "/Gallery",
          element: <Gallery />,
        },
        {
          path: "/team",
          element: <Team />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Body;
