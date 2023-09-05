import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShimmerComponent from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();

  //Custom Hook
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <ShimmerComponent />;
  }
  const { name } = resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      .card;
  // console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>Menu</h2>
      <h3>Menu items</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
