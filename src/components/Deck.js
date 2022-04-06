import { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./Card.css";

export class Deck extends Component {
    constructor() {
    super();
    this.state = {
        deck:null,
        packet:[]
    }
}

async componentDidMount () {
 var deckRes = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
 this.setState({deck:deckRes.data})
}

getCard =async () => {
    var id = this.state.deck.deck_id;
    var cardRes= await axios.get("https://deckofcardsapi.com/api/deck/"+id+"/draw/?count=1");
    //console.log(cardRes);
    if (cardRes.data.success==false) alert("le paquet de carte est vide");
    var card= cardRes.data.cards[0];

    this.setState((prevState) => ({
        packet:[...prevState.packet,{
            id:card.code,
            name:`${card.value} of ${card.suit}`,
            image:card.image
            }
        ]
    }))

}
    




render(){
    
    
    
    return (
     <>
     <div id="dist"><h1>LE DISTRIBUTEUR DE CARTE</h1>
     <button onClick={this.getCard}>Recevoir une carte</button></div>
     <div id="imgCard">{this.state.packet.map((card)=> <Card key={card.id} name={card.name} image={card.image} />)}</div>
     </>
       
    )
}


}
export default Deck;