import React from "react";
import Item from "./Item";
/*
function ItemList( props ) {
	console.log("Render ItemList", props.items);
	return (
		<>
		<h1>Productos</h1>
		{props.items.map((cadaItem) => {
			return(
				<div key={cadaItem.id}>
					<p> {cadaItem.name}</p>
					<p>{cadaItem.precio}</p>
					<hr/>
				</div>
				);
				})}
		</>
	);
}
*/

const ItemList = ({ items }) => {
	return (
		<div className="container">
			<div>
				{items.map((item) => (
					<div key={item.id} className="col-sm">
						<Item item={item} />
					</div>
				))}
			</div>
		</div>
	);
};

export default ItemList;