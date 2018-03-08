import React, { Component } from "react";
import header from './header.scss';

class Header extends Component {

	render() {
		return (
			<header>
				<figure id={header.headerFig}></figure>
				<ul id={header.overLayWrap}>
					<li id={header.overLayDaredevil}></li>
					<li id={header.overLayJessica}></li>
					<li id={header.overLayLuke}></li>
					<li id={header.overLayIron}></li>
				</ul>
			</header>
		)
	}
}


export default Header;
