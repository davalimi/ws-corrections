import React, { Component } from "react";
import "./Counter.css";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      loading: true,
    };
  }

  render() {
    setTimeout(() => this.setState({ loading: false }), 3000);

    return (
      <>
        {this.state.loading ? (
          <span>Loading... </span>
        ) : (
          <div className="counter">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
              onClick={this.handleIncrement}
              className="btn btn-secondary btn-sm"
            >
              Increment
            </button>
          </div>
        )}
      </>
    );
  }

  // On utilise une arrow function pour éviter d'avoir à binder l'objet this
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  getBadgeClasses = () => {
    let classes = "badge m-2 fs-6 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  };
}

export default Counter;
