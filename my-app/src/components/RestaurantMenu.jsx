// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

	const resInfo = useRestaurantMenu(resId)
	// console.log('resId', resInfo);
	const dummy = "Dummy data"
	const [showIndex, setShowIndex] = useState(0)

	// const resCards = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || {};
	// console.log('resCards', resCards);
	const {name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card.card?.info || {};
	const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
		(c) => 
			c.card?.["card"]?.["@type"] ===
			"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
	)
	// console.log(categories, 'ccc')

  return resInfo === null ? (<Shimmer />) : (
    <div className="text-center">
			<h1 className="font-bold my-6 text-2xl">{name}</h1>
			<p className="font-bold">{cuisines.join(", ")} - {costForTwoMessage}</p>

			{categories?.map((category, index) => (
				// Controlled Component
				<RestaurantCategory
					key={category?.card?.card?.title ?? index}
					data={category?.card?.card}
					showItems={index === showIndex ? true : false}
					setShowIndex={() => setShowIndex(index)}
					dummy={dummy}
				/>
			))}
    </div>
  );
}

export default RestaurantMenu;
