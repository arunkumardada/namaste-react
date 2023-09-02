import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
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

//React Component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
