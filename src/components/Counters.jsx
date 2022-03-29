import React, { Component } from "react";
import "./Counters.css";
import { v4 as uuidv4 } from 'uuid';
import Counter from './Counter.jsx'

export class Counters extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      loading: true,
      counters:[{id:uuidv4() ,value:0 },
        {id:uuidv4() ,value:1},
        {id:uuidv4() ,value: 2},
        {id:uuidv4(),value: 3}]
      
    
  }
      
    };
  

  render() {
    
    setTimeout(() => this.setState({ loading: false }), 3000);

    return (
     <>
     <div className="counters">

       {this.state.counters.map((counter)=>(
        <Counter key={counter.id} value={counter.value}/>
       ))}

       </div>
       </>
    )};
  }

  // On utilise une arrow function pour éviter d'avoir à binder l'objet this
  

export default Counters;
