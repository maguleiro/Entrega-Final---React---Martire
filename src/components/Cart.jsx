import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
import { Link} from 'react-router-dom';

const Cart = ()  => {
    
    const [totalPrice, setTotalPrice] = useState(0);
    const { cartItems, removeItem, clear, total } = useContext(CartContext);

    useEffect( () => {
        let total = 0;
        cartItems.forEach(item => {
            total+=parseInt(item.precio);
        })
        setTotalPrice(total);
    }, [cartItems])
    return(
            <>
             <div className="subTotal">
            <>
                 {cartItems.length === 0 ? (
            <>
                No hay items! Agrega algunos <Link to={"/"}><button>Volver</button></Link>
            </>
        ) : (
            <> 
                {cartItems.map((element)=> (
                 <CartItem item={element.item} clear={removeItem}/>))}
                <button className="bg-red"   onClick={()=> clear()}>Vaciar Carrito</button>
                <h1>El total de la compra es de: ${totalPrice}</h1>
        </>
        )}
    </>        
            </div>
            </>         
    );
};


/*
nuevo

const Cart = () => {
    const { cartItems, removeItem, clear, total } = useContext(CartContext);
    const tot=total();
    return (
    <>
        {cartItems.length === 0 ? (
            <>
                No hay items! Agrega algunos <Link to={"/"}><button>Volver</button></Link>
            </>
        ) : (
            <> 
                {cartItems.map((element)=> (
                 <CartItem item={element.item} clear={removeItem}/>))}
                <button className="bg-red"   onClick={()=> clear()}>Vaciar Carrito</button>
                <h1>El total de la compra es de: ${tot}</h1>
        </>
        )}
    </>
    );
};

*/

/*
BIEJO

const Cart = ()  => {
    const [totalPrice, setTotalPrice] = useState(0);
    const { cartItems } = useContext(CartContext);
    
    const { cartItems } = useContext(CartContext);
    
    useEffect( () => {
        let total = 0;
        cartItems.forEach(item => {
            total+=parseInt(item.precio);
        })
        setTotalPrice(total);
    }, [cartItems])
    return(
        
            <>
            <div className="subTotal">
                <div className="d-flex">
                    {cartItems.map((item) => (
                        <>
                            <p>{item.name}</p>
                            <p>{item.precio}</p>
                        </>
                    ))}
                </div>
                <h1>{`Precio subtotal es: $${totalPrice}`}</h1>
            </div>
            </>
            
    );
};
*/
export default Cart;