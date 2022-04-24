import { Component } from "react";
import axios from "axios";
import "./Card.css";
import ReactDOM from 'react-dom';

export class Card1 extends Component {
    constructor() {
    super();
    this.state = {
        cards: [],
        

    }
}
componentDidMount(){
    axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(Response => {
        console.log(Response.data)
        this.setState({ cards: Response.data})
        var cardId=this.state.cards.deck_id;
        console.log(cardId);
        var url= "https://deckofcardsapi.com/api/deck/"+cardId+"/draw/?count=1";
        console.log(url);
        axios.get(url).then(Response => {
            console.log(Response.data)
             this.setState({cards:Response.data})
              
         })
    })
}
    
HandleGetCard = () => {
    var cardId=this.state.cards.deck_id;
        console.log(cardId);
        var url= "https://deckofcardsapi.com/api/deck/"+cardId+"/draw/?count=1";
        console.log(url);
        axios.get(url).then(Response => {
            console.log(Response.data)
             this.setState({cards:Response.data})
              
         })
         var node = document.getElementById("image");
         ReactDOM.findDOMNode(node).src=this.state.cards.cards[0].image;
    console.log(this.state.cards.cards[0].image);
    //console.log(this.state.card.success)
    //var cardImg= this.state.cards.cards[0].image;
    //console.log("test:"+cardImg);   
}

render(){
    
    
    //return count;
    return (
        <>
        
        <div id="dist"><h1>LE DISTRIBUTEUR DE CARTE </h1>
         <button onClick={this.HandleGetCard}>recevoir une carte</button>
         </div>
         <div id="imgCard"><img style="transform: rotate(100deg);" src="" id="image"></img></div>
         </>
    
    )
       
        

       
    
}


}
export default Card1;