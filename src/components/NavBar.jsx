//CLASE LANDING
import {Link} from  'react-router-dom';
import WidgetCart from "./WidgetCart";

const EstiloTexto = ({ text }) =>{
	return <a href="index.html" className="nav__item">{ text }</a>
};

const NavBar = ({ amountItems, name }) => {
	const navItems = ["Productos","Contacto","Nosotros","Mas"];
	const toUpperNavElements = (text) =>{
		return text.toUpperCase();
	};
	const navItemsStyled = navItems.map(item => (toUpperNavElements(item)) )
	console.log(navItemsStyled);
	const displayName = name.toUpperCase();
	return (
		<>
		<nav className="nav">
			<div class="nav__menu">
				<a href="/" class="nav__logo">{displayName}</a>
				{navItemsStyled.map( (item) => {
					return 	<EstiloTexto text={item}/>
				})}
				<WidgetCart amountItems={amountItems}/>
				
			</div>
			
		</nav>
		</>
 );
};

export default NavBar;