import RestaurantCard, { WithPromotedLabel } from './RestaurantCard';
import { useContext, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
// import {ALL_RESTAURANTS_API} from './utils/constant';
import useOnlineStatus from './utils/useOnlineStatus';
import useRestaurantList from './utils/useRestaurantList';
import UserContext from './utils/UserContext';

const Body = () => {
  // const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  // const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetch(`${ALL_RESTAURANTS_API}`);
  //     const json = await data.json();
  //     // console.log(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  //     setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //     setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //   };
  //   fetchData();
  // }, []);

  const {listOfRestaurant, filteredRestaurant, setFilteredRestaurant} = useRestaurantList()

  const onlineStatus = useOnlineStatus()

  const {loggedInUser, setUserName} = useContext(UserContext)

  if (onlineStatus == false)
    return (
      <h1>
        Looks like you are offline!! Pls check your internet connection.
      </h1>
    )

  // Conditional Rendering
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text" className='border border-solid border-black' placeholder="Search for restaurants..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <button className="px-3 py-1 bg-green-400 m-4 rounded-lg" onClick={() => {
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
        <div className="search m-4 p-4 flex items-center">
          <label>User Name:</label>
          <input type="text" className='border border-solid border-black' value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
        </div>
        
        <div className="search m-4 p-4 flex items-center">
          <button className="px-3 py-1 bg-gray-500 rounded-lg"
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
      </div>
      <div className="res-card-list">
        {filteredRestaurant.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
            {restaurant.info.avgRating < 4 ? (
              <RestaurantCardPromoted resData={restaurant.info} />
            ) : (
            <RestaurantCard resData={restaurant.info} />
            )}
          </Link>
        ))}
        {/* {filteredRestaurant.length > 0 ? (
        ) : (
          listOfRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
          ))
        )} */}
      </div>
    </div>
  );
}

export default Body;