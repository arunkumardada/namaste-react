import React from "react";
import ReactDOM from "react-dom/client";

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

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://penji.co/wp-content/uploads/2022/08/11.Foodigy-logo.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://img.freepik.com/premium-vector/illustration-logo-chicken-biryani-rice-served-clay-plate-with-assorted-side-dishes-spices_499212-942.jpg"
      />
      <h3>MEGHANA FOODS</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h5>4.4</h5>
      <h5>38 mins</h5>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search bar</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

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
