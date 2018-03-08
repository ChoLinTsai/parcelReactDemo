import React, { Component } from "react";
import ReactDom from "react-dom";

import './components/0_App/app.scss';

import Header from './components/1_Header/header';
import Navbar from './components/2_Navbar/navbar';
import SecDaredevil from './components/3_Sec_Daredevil/sec_daredevil';


class App extends React.Component {

	render() {
		return (
			<div id="app">
				<Navbar />
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
