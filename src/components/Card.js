import { Component } from "react";
import "./Card.css";
import ReactDOM from 'react-dom';

export class Card extends Component {
    constructor(props) {
    super(props);
    this.state = {
        id: props.id,
        name:props.name,
        image:props.image
        
     
    }
    let angle = Math.random() * 90 - 45;
    let xPos = Math.random() * 40 - 20;
    let yPos = Math.random() * 40 - 20;
    this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;

   
}
render(){
    /*var rotate=`transform: rotate(${Math.random()*360}deg)` ;
    var node = document.querySelector(".image");
    var a = ReactDOM.findDOMNode(node);
    a.style.transform="rotate(100deg);"
     */
    return (
        <img  
        style={{ transform: this._transform }}

        className="image" 
        src={this.state.image} 
        alt={this.state.name} 
        title={this.state.name}/>
    )
}
}
export default Card;