//card para mostrar info de productos
import ItemAddCart from "./ItemAddCart";
import {Link} from  'react-router-dom';

/*
const Item = ({ name, precio, img }) =>{
	return(
	<div className="card-group p-2">
	<div className="card" style={{width:"18rem"}}>
	<img class="card-img-top" src={img}/> 
	  	<div className="card-body">
		    <h5 className="card-title">{name}</h5>
		    <p className="card-text">${precio}</p>
		    <Link to={"/detail"}> <button className ="btn-mod btn btn-primary"> See product details</button> </Link>

		    <ItemAddCart />
	  	</div>
	</div>
	</div>

 	);
}
*/
const Item = ({ item }) => {

	const { name, precio, img, stock } = item;
	return (
	<div className="d-flex flex-row justify-content-around mb-2">
		<div className="card " style={{ width:"15 rem" }}>
			<img src={img} alt="Card iamge cap" />
			<div className="card-body d-flex flex-column justify-content-center">
				<h5 className="card-title">{name}</h5>
				<p className="card-text">{`${stock} units avaiable!`}</p>
				<Link to={`/item/${item.id}`}>
					<button className="btn btn-primary">See product details.</button>
				</Link>
			</div>
		</div>
	</div>
	);
};


export default Item;


