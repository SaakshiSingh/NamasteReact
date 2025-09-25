import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
const Body = () => {
  //creating a state variable
  let [listOfRestaurants, setListOfRestuarants] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [filtered, setFiltered] = useState([]);

  useEffect(() => {
    //fetch the data
    fetchingData();
  }, []);
  const fetchingData = async () => {
    //introducing some wait period to look at shimmer UI
    await new Promise((resolve) => setTimeout(resolve, 1000)); // wait 2 seconds
    const data = await fetch(
      "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
    );

    const json = await data.json();

    //for re rendering the page with the fetched data , we use setter function
    setListOfRestuarants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFiltered(listOfRestaurants);
  };

  //if data is empty (still being fetched) -> screen should show loader
  //conditional rendering using ternary operator
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search here...."
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              let filteredRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFiltered(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
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
        {filtered.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
