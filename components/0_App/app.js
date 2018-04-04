import React, {Component} from "react";
import ReactDom from "react-dom";

import './app.scss';

import Header from '../1_Header/header';
import Navbar from '../2_Navbar/navbar';
import BannerDaredevil from '../3_Banner_Daredevil/Banner_daredevil';
import Daredevil from '../4_Daredevil/daredevil';
import BannerJessica from '../5_Banner_Jessica/Banner_jessica';
import Jessica from '../6_Jessica/jessica';
import BannerLuke from '../7_Banner_Luke/Banner_luke';
import Luke from '../8_Luke/luke';
import BannerIron from '../9_Banner_Iron/Banner_iron';
import Iron from '../10_Iron/iron';
import BannerDefenders from '../11_Banner_Defenders/Banner_defenders';
import Defenders from '../12_Defenders/defenders';

class App extends Component {

  render() {
    return (
      <div id="app">
        <Header/>
        <BannerDaredevil/>
        <Daredevil/>
        <BannerJessica />
        <Jessica />
        <BannerLuke />
        <Luke />
        <BannerIron />
        <Iron />
        <BannerDefenders />
        <Defenders />
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'))

console.log("Hello world and checking everything is working");
