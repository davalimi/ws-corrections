import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state={
            value:this.props.value
        }
    }
  




    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 });
      };
    
    getBadgeClasses = () => {
        let classes = "badge m-2 fs-6 bg-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
      };
    
    formatCount = () => {
        const { value } = this.state;
        return value === 0 ? "Zero" : value;
      };
    








    render() { 
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
}
 
export default Counter;