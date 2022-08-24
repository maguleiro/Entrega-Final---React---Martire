//CLASE LANDING


import React, { Component } from "react";

class TitleLanding extends Component {
	constructor(props){
		super(props);
	}
	state = { 
		title:  "Bienvenido de nuevo!",
		subTitle:  "Nuevos ingresos"
	};

	render(){
		return (
		<>	
			<div className="bg-white">
				<h1 className = "titulo">{this.state.title}</h1>
				<h2 className = "subTitulo">{this.state.subTitle}</h2>
			</div>
		</>
			);
	}
}

export default TitleLanding;