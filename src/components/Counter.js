import { Component } from "react";

export class Counter extends Component {
    constructor() {
    super();
    this.state = {
      value: 0
    }
    
}

handleIncrement = () => {
  this.setState({value:this.state.value+1})
}

render () {
  return(
  <>
       <div>       
         <button onClick={() => this.handleIncrement()}>increment[{this.state.value}]</button>
        </div>

  </>   
      
  )
}
}
export default Counter;
    
