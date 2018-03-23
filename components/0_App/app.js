import React, { Component } from "react";
import ReactDom from "react-dom";

import './app.scss';

import Header from '../1_Header/header';
import Navbar from '../2_Navbar/navbar';
import SecDaredevil from '../3_Sec_Daredevil/sec_daredevil';


class App extends React.Component {

	render() {
		return (
			<div id="app">
				<Header />
				<SecDaredevil />
			</div>
		)
	}
}


ReactDom.render(
	<App />,
	document.getElementById('root')
)




console.log("Hello world and checking everything is working");
