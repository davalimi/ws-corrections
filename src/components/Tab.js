import { Component } from "react";
import "./Cats.css";
import { v4 as uuidv4 } from 'uuid';

export class Tab extends Component {
    constructor(props) {
    super(props);
    this.state = {
        id: "divImg divId"+props.id,
        name:props.name,
        image:props.image,
        email:props.email
        
     
    }
   
}
render(){
    
    return (
        <>
        <div className={this.state.id}>
            <img src={this.state.image}  alt={this.state.name} />
            <div className="divName">{this.state.name}</div>
            <div className="emailDiv">{this.state.email}</div>
        </div> 
        
        </>
    )
}
}
export default Tab;