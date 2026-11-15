import ItemList from "./ItemList";
// import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
	// const [showItems, setShowItems] = useState(false)

	const handleClick = () => {
		setShowIndex()
	}
	return (
		<div>
			{/* Header */}
			<div className="w-6/12 bg-gray-50 shadow-lg p-2 mx-auto my-4">
				<div className="flex justify-between cursor-pointer font-bold" onClick={handleClick}>
					<span>{data.title} ({data.itemCards.length})</span>
					<span>{showItems ? '⬇️' : '⬆️'}</span>
				</div>

				{/* Accordion */}
				{showItems && <ItemList items={data.itemCards} dummy={dummy} />}
			</div>
		</div>
	)
}

export default RestaurantCategory;