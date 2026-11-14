// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "./utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
	
	const resInfo = useRestaurantMenu(resId)
	// console.log('resId', resInfo);

	const resCards = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || {};
	const {name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card.card?.info || {};
	console.log('resCards', resCards);

  return resInfo === null ? (<Shimmer />) : (
    <div className="restaurant-menu">
			<h1>{name}</h1>
      <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
			<h2>Menu</h2>
			<ul>
				{resCards.map((item) => (
					<li key={item.card.info.id}>
						{item.card.info.name} - {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
					</li>
				))}
			</ul>
    </div>
  );
}

export default RestaurantMenu;