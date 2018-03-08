import React, { Component } from "react";
import navbar from './navbar.scss';

class Navbar extends Component {
	constructor(props) {
    super(props);

		this.state = {
			daredevil: {
				color: "#fff",
			}
		}
  }
	// assuming this.state = { value: 0 };
	// this.setState((state) => ({ value: state.value + 1}));
	// this.setState((state) => ({ value: state.value + 1}));
	// this.setState((state) => ({ value: state.value + 1}));


	mouseOver() {
		console.log("hello from click event!");

		this.setState( () => ({
				daredevil: {
					color: "darkred"
				}
			})
		)
	}

	mouseLeave() {
		console.log(123123123);

		this.setState( () => ({
				daredevil: {
					color: "#fdfdfd",
				}
			})
		)
	}

  render() {

		const testItems = {
			testStyle: {
				color: "purple",
				fontSize: "1.5rem"
			},
		};


    return (
			<nav id={navbar.navWrap}>
	      <ul id={navbar.ulContainer}>
	        <li
						style={this.state.daredevil}
						className={navbar.liItems}
						id={navbar.daredevil}
						onMouseOver={ () => this.mouseOver() }
						onMouseLeave={ () => this.mouseLeave() }>
	          DareDevil
	        </li>

	        <li style={testItems.testStyle} className={`${navbar.liItems}`} id={navbar.jessica}>
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
