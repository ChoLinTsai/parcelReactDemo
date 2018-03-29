import React, {Component} from "react";
import ReactDom from "react-dom";

import './app.scss';

import Header from '../1_Header/header';
import Navbar from '../2_Navbar/navbar';
import BannerDaredevil from '../3_Banner_Daredevil/Banner_daredevil';
import Daredevil from '../4_Daredevil/daredevil';

class App extends Component {

  render() {
    return (
      <div id="app">
        <Header/>
        <BannerDaredevil/>
        <Daredevil/>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'))

console.log("Hello world and checking everything is working");
