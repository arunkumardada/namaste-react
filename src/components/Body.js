import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerComponent from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  //Local State Variable - Super Powerful Variable
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //Optional Chaining
    setlistofRestaurants(
      json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You are Offline. Please check your Internet Connection</h1>;
  }

  if (listofRestaurants.length === 0) {
    return <ShimmerComponent />;
  }
  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          {" "}
          <input
            type="text"
            className="border border-solid border-black"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-2xl"
            onClick={() => {
              const filteredRestaurant = listofRestaurants.filter((res) => {
                return res.info.name.includes(searchTerm.toLowerCase());
              });
              setfilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-blue-50 rounded-2xl"
            onClick={() => {
              const filteredRestaurants = listofRestaurants.filter((res) => {
                return res.info.avgRating > 4;
              });
              setlistofRestaurants(filteredRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {/* If restaurant is promoted then add Promoted Label */}
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
