import { Component } from "react";
import Counter from "./Counter";

export class Counters extends Component {
    constructor() {
    super();
    this.state = [
    { id:1,value:3},
    { id:2,value:0},
    { id:3,value:1},
    { id:4,value:0},
    { id:5,value:2},
    ]
    
}

render () {
  return(
      this.state.map((count)=> (
      <Counter key={count.id} value={count.value}></Counter>

      ))
  )
}
}
export default Counters;