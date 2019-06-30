
import React, {Component} from "react";
import {hot} from "react-hot-loader";

import "./JsonGetter.css";

class Jgetter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        uData: [],
        gotData: false
    };
  }



  showData() {
    /* const element = (
        <div>
            <h4>DATA GOT</h4>
        </div>
      );
      ReactDOM.render(element, document.getElementById('jsonout')); */
  }

  componentDidMount() {
        
    var request = new XMLHttpRequest();
    var me = this;
    request.open('GET', '/data/users.json', true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            me.setState({
                uData: data.users,
                gotData: true
            });
            me.showData();
        } else {
            // We reached our target server, but it returned an error

        }
    };

    request.onerror = function() {
    // There was a connection error of some sort
    };

    request.send();


        console.log("SHOULD HAVE FIRED");
    }

  render() {
    if(!this.state.done) {
        const uuData = this.state.uData;
        let uusers = uuData.map((user, index) =>
            <li key={index}>{user.name}</li>
        );

        return (
            <div className="jsonGetter">Got it
                <ul className="jsonGetter">
                    {uusers}
                </ul>
            </div>
        );
    } else {
        return (
            <div className="jsonGetter">Loading...</div>
        );
    }
    
    
  }
}


export default hot(module)(Jgetter);

/*

            /* {
            this.state.uData.map(
                user => {
                return <li>{ user.name }</li>;
                })
            } */