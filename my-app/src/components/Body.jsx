import RestaurantCard from './RestaurantCard';
// import listOfRestaurant from './utils/mockData';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import {ALL_RESTAURANTS_API} from './utils/constant';

const Body = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${ALL_RESTAURANTS_API}`);
      const json = await data.json();
      // console.log(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    fetchData();
  }, []);
  
  // Conditional Rendering

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" placeholder="Search for restaurants..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <button className="search-btn" onClick={() => {
            const searchInput = searchText.toLowerCase();
            const filteredRestaurants = listOfRestaurant.filter(
              (res) => {
                return res.info.name.toLowerCase().includes(searchInput);
              }
            );
            setFilteredRestaurant(filteredRestaurants);
          }}>
            Search
          </button>
        </div>

        <button className="filter-btn"
          onClick={() => {
            const filteredRestaurants = listOfRestaurant.filter(
              (res) => {
                return (res.info.avgRating > 4.1);
              }
            );
            setFilteredRestaurant(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-card-list">
        {filteredRestaurant.length > 0 ? (
          filteredRestaurant.map((restaurant) => (
            <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
              <RestaurantCard resData={restaurant.info} />
            </Link>
          ))
        ) : (
          listOfRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
          ))
        )}
      </div>
    </div>
  );
}

export default Body;