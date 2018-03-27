import React, {Component} from "react";
import ReactDom from "react-dom";

import './app.scss';

import Header from '../1_Header/header';
import Navbar from '../2_Navbar/navbar';
import Daredevil from '../3_Daredevil/daredevil';

class App extends React.Component {

  render() {
    return (
    <div id="app">
      <Header />
      <Daredevil />
    </div>)
  }
}

ReactDom.render(<App />, document.getElementById('root'))

console.log("Hello world and checking everything is working");
