import React, {Component} from "react";
import navbar from './navbar.scss';

class Navbar extends Component {
  render() {
    return (
				<nav id={navbar.navWrap}>
	      <ul id={navbar.ulContainer}>
	        <li className={navbar.liItems} id={navbar.daredevil}>
	          DareDevil
	        </li>
	        <li className={navbar.liItems} id={navbar.jessica}>
	          Jessica Jones
	        </li>
	        <li className={navbar.liItems} id={navbar.luke}>
	          Luke Cage
	        </li>
	        <li className={navbar.liItems} id={navbar.iron}>
	          Iron Fist
	        </li>
	      </ul>
	    </nav>
		)
  }
}

export default Navbar;
