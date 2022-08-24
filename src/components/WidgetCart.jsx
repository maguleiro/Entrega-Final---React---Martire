import { useState } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const WidgetCart = ({amountItems}) => {
	const{cartItems} = useContext(CartContext);
	return (
		<div className="nav__itemCart">
			<FontAwesomeIcon icon={faShoppingCart} />
			<span className="ps-2">{cartItems.length}</span>
		</div>
	);
};

export default WidgetCart;