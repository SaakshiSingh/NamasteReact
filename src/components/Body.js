import { Link } from "react-router";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Body = () => {
  //creating state variables always at the top of the component
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
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
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFiltered(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
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
              (res) => res.info.avgRatingString >= 4.3
            );

            // setListOfRestaurants(filteredList);
            setFiltered(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filtered.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
