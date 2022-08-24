import logo from './logo.svg';
import './App.css';
import Promises from "./components/Promises";
import TitleLanding from "./components/TitleLanding";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useState } from "react";
import CartProvider from './components/CartContext';
import Cart from './components/Cart';


function App() {
  const [amountItems, setAmountItems] = useState(0);
  return (
   <>
   <CartProvider>
   <BrowserRouter>
   <NavBar amountItems={amountItems} name={"menu"} />
   <Routes>
    <Route index path= "/" element={<>    
      <TitleLanding />  
      <ItemListContainer />
      </>
    }/>
    <Route path= "/category/:name" element={<ItemListContainer />}/>
    <Route path= "/item/:id" element={<ItemDetailContainer setAmountItems = {setAmountItems}/>}/>


    <Route path="*"
    element={
      <div className="error"> 
      <p> ERROR 404 
      <a href="/"> <button> volver </button> </a>  
      </p>
      </div> 
    }
    />
    <Route path="/cart" element={<Cart />} />     
   </Routes>
    </BrowserRouter>
    </CartProvider>
   </>
  );
}

export default App;
