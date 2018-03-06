import React, { Component } from "react";
import header from './header.scss';

class Header extends Component {

	render() {
		return (
			<header>
				<ul id="overLayWrap">
					<li className="overLayItem" id="overLay1"></li>
					<li className="overLayItem" id="overLay2"></li>
					<li className="overLayItem" id="overLay3"></li>
					<li className="overLayItem" id="overLay4"></li>
				</ul>
			</header>
		)
	}
}


export default Header;
