import React from "react";

const CartItem = ({ item, quantity, removeItem }) => {
    return (
    <div className="d-flex">
    {item.name} - {item.precio} - {quantity}
    <button className="bg-red" onClick={() => removeItem(item.id)}>Eliminar</button>
    </div>
    )
};

export default CartItem;