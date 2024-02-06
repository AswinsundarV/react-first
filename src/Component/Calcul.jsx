import React, { Component } from "react";
import "./calCul.css"

class Calcul extends Component {
  state = {
    count: 1,
  };

  handledadd = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handledmin = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handledmult= () => {
    this.setState({ count: this.state.count *2 });
  };
  handleddiv = () => {
    this.setState({ count: this.state.count /4 });
  };
  handledreset = () => {
    this.setState({ count: " " });
  };

  
  render() {
    return (
      <div className="main">
        <div className="sub">
        <h1>count {this.state.count}</h1></div>
        <div className="butt">
        <button onClick={this.handledadd }className="button1">add</button>
        <button onClick={this.handledmin}className="button2">MIN</button>
        <button onClick={this.handledmult}className="but3">Multi</button>
        <button onClick={this.handleddiv}className="but4">div</button>
        <button onClick={this.handledreset}className="but5">reset</button>
        </div>
      </div>
    );
  }
}

export default Calcul;
