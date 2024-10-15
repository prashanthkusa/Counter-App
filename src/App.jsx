import React, { Component } from 'react';
import './App.css'; 

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };
  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };
  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="counter-app">
        <h1>Counter Application</h1>
        <div className="counter-container">
          <button className="btn" onClick={this.increment}>+</button>
          <span className="count-display">{this.state.count}</span>
          <button className="btn" onClick={this.decrement}>-</button>
        </div>
        <button className="reset-btn" onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default CounterApp;