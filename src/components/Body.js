import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  //creating a state variable
  let [listOfRestaurants, setListOfRestuarants] = useState(restaurantsList);

  return (
    <div className="body">
      <div className="search">search bar here</div>
      <div className="filter">
        <button
          className="filter-btn "
          onClick={() => {
            let filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRatingString > 4.2
            );

            setListOfRestuarants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
