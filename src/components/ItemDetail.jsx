import ItemCount from "./ItemCount";
import {useState, useContext} from"react";
import {Link} from  'react-router-dom';
import { CartContext } from "./CartContext";

const ItemDetail = ({item, setAmountItems}) => {
	const {setCartItems} = useContext(CartContext); 
	const [amount, setAmount] = useState(0); 
	const {name, precio, stock, img, id, discount} = item;
	
	const onAdd = (amount) =>{
		setAmount(amount);
		setCartItems((prevState) => [...prevState, item]);
	};
	return (
	<div className="card-group p-2" style={{ width:"50rem" }}>
		<div className="card">
			<img className="card-img-top" src={`${img}`} alt="Card image cap"/>
			<div className="card-body d-flex flex-column justify-content-center">
			<h5 className="card-title">{`${name}`}</h5>
			<p className="card-text">{`${stock} units avaiable`}</p>
			<p className="card-text">{`$${
				precio
			} | with a ${discount}%discount!`}</p>	
			</div>
			{amount == 0 ? (<ItemCount stock={stock} initial={0} onAdd={onAdd} />) 
			 : (
			 	<>
			 	<h1>{amount} Items agregados al carrito</h1>
				<Link to={"/cart"}>
					<button>Go to checkout</button>
				</Link>
				</>
			)}
		</div>
	</div>
)};
/*
const ItemDetail = ({ item }) => {
	return (
		<>
		<div className="bg-danger">
			<h1>{item.name}</h1>
			{item.discount <50 ?
				<h1 className ="bg-warning">{item.discount}% OFF</h1> :
				<h1 className ="bg-info">{item.discount}% OFF</h1>}
		</div>
		</>
	);
};
*/
export	default ItemDetail;