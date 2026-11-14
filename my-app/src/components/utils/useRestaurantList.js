import { useEffect, useState } from "react";
import { ALL_RESTAURANTS_API } from "./constant";

const useRestaurantList = () => {

	const [filteredRestaurant, setFilteredRestaurant] = useState([]);
	const [listOfRestaurant, setListOfRestaurant] = useState([]);

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
	return {listOfRestaurant, filteredRestaurant, setFilteredRestaurant}
}

export default useRestaurantList