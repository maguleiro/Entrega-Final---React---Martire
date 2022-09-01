import React, {createContext, useState, useEffect} from "react";
export const CartContext = createContext();



const CartProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item, quantity) => {
        const newItem = isInCart(item);
        if(newItem){
            quantity = quantity + newItem.quantity;
            setCartItems(cartItems.splice(cartItems.findIndex((element) => element.item.id === item.id),1))
        }
        setCartItems([...cartItems, {item,quantity}]);
    };

    const isInCart = (item) => {
        cartItems.find((element) => element.item === item)
    };
    const clear = () => {
        setCartItems([]);
    };
    const removeItem = (itemId) => {
        setCartItems(cartItems.filter(element=>element.item.id !=itemId ));
    };
    const total = ()=>{
        return cartItems.reduce((valorAnterior, valorActual) => valorAnterior + valorActual.item.precio * valorActual.quantity,0);
    };

    return (
        <CartContext.Provider 
            value={{ cartItems, addItem, removeItem, clear, total, setCartItems }}
            >
            {children}
        </CartContext.Provider>
    );
}


export default CartProvider;







/*
const CartContext = ({ children }) => {
    const [itemsCarrito, setItemsCarrito] = useState([]);

    const addItem = (item, quantity) => {
        const newItem = isInCart(item);
        if(newItem){
            quantity = quantity + newItem.quantity;
            setItemsCarrito(itemsCarrito.splice(itemsCarrito.findIndex((element) => element.item.id === item.id),1))
        }
        setItemsCarrito([...itemsCarrito, {item,quantity}]);
    };

    const isInCart = (item) => {
        itemsCarrito.find((element) => element.item === item)
    };
    const clear = () => {
        setItemsCarrito([]);
    };
    const removeItem = (itemId) => {
        setItemsCarrito(itemsCarrito.filter(element=>element.item.id !=itemId ));
    };

    return <GContext.Provider value ={{itemsCarrito, addItem}}>{children}</GContext.Provider>
};*/