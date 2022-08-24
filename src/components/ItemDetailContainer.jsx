import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import data from "./utils/data";
import Spinner from "./Spinner";

const ItemDetailContainer = (setAmountItems) =>{
	const [item, setItem] = useState({});
	const [loading, setLoading] = useState(false);
	const params = useParams();
	const promise = new Promise((resolve) =>{
		setTimeout(() => resolve(data), 2000);
	});

	useEffect( () => {
		promise.then( (response) => {
			const foundItem = response.filter(item => item.id == params.id)
			setItem(foundItem[0]);
			setLoading(false);
		});
	}, []);

	return loading ? <Spinner /> : <ItemDetail setAmountItems = {setAmountItems} item={item}/>;
};

export default ItemDetailContainer;