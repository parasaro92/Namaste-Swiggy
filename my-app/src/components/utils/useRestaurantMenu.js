import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
	const [resInfo, setResInfo] = useState(null);

	useEffect(() => {
		const fetchRestaurantData = async () => {
			const data = await fetch(
				`${MENU_API}${resId}`
			);
			const json = await data.json();
			// console.log('ddd', json.data);
			setResInfo(json.data);
			// console.log('resInfo', resInfo);
		};
		fetchRestaurantData();
	}, []);
	return resInfo
}

export default useRestaurantMenu