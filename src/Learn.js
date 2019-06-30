import React, { Component} from "react";
import {hot} from "react-hot-loader";



class Learn extends React.Component {


  componentDidMount() {
    
  }

  render() {
    return <h1>Greetings from inside Learn, {this.props.name}</h1>;
  }
}

export default hot(module)(Learn);