import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";
/**
 *
 * Header
 *  - Logo
 *  - NavItems (About, contact US , cart)
 * Body
 *  - Search
 *  - Restaurant Container
 *      - Restaurant card
 *          -Img
 *          - Name, Rating, Reviews, Cuisines
 * Footer
 *  - Links
 *  - Copyright
 *  - Address
 */

// Chunking
//Lazy Loading
//On demand Loading.
//Dynamic Bundling

const Grocery = lazy(() => import("./components/Grocery"));

//React Component
const AppLayout = () => {
  const [userName, setUserName] = useState();

  // Authentication.
  useEffect(() => {
    // Make an API Call and send username and password

    const data = {
      userName: "Arun Kumar Dada",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
