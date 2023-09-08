import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShimmerComponent from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();

  //Custom Hook
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null) {
    return <ShimmerComponent />;
  }
  const { name, cuisines } = resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      .card;
  // console.log(itemCards);

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <h2>Menu</h2>
      <h3 className="font-bold text-lg">{cuisines.join(", ")}</h3>
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price}
          </li>
        ))}
      </ul> */}
      {/* Categories accordions */}

      {categories.map((category, index) => {
        return (
          // Controlled Component
          <RestaurantCategory
            id={index}
            key={category?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex && true}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
