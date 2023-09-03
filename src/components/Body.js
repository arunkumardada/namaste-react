import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerComponent from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  //Local State Variable - Super Powerful Variable
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  if (listofRestaurants.length === 0) {
    return <ShimmerComponent />;
  }
  // console.log("red");
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          {" "}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button
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

        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
