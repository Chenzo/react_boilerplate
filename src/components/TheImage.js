import React, {Component} from "react";
import {hot} from "react-hot-loader";
import logo from 'Images/logo-lrg.png';


class TheImage extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
    <div>
        <img src={logo} alt="Logo" />
    </div>
    );
  }
}


export default hot(module)(TheImage);