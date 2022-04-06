import { Component } from "react";
import axios from "axios";
import "./Cats.css";
import { v4 as uuidv4 } from 'uuid';
import Tab from "./Tab";
import ReactDOM from 'react-dom';

export class Cats extends Component {
    constructor() {
    super();
    this.state = {
        list:null,
        cats:[],
        
        
    }
}

async componentDidMount () {
 var CatRes = await axios.get("https://jsonplaceholder.typicode.com/users");
 console.log(CatRes.data);
 this.setState({list:CatRes.data});
 var cats=CatRes.data;
 for (let i = 0; i < cats.length; i++) {
        var cat =cats[i];
       
        this.setState(() => ({
            cats:[...this.state.cats,{
            id:i,
            name:cat.name,
            image:"https://robohash.org/"+uuidv4()+"/?set=set4",
            email:cat.email
            }
        ]
    }))    
}

} 

handleSearch= (e) => {
   console.log(e.target.value);
   const cats= this.state.cats;
    for (let i = 0; i < cats.length; i++) {
        var cat =cats[i];
        var index=cat.name.toLowerCase().indexOf(e.target.value);
        console.log(e.target.value);
        var node = document.querySelector(".divId"+i);
        var a = ReactDOM.findDOMNode(node);
        if (index==-1)  {
            a.style.display="none";
        }
        else 
            a.style.display="block";  
        
    }
   

}


render(){
    
    
    
    return (
     <>
     <div id="dist"><h1>Cats Friends</h1>
         <input type="text" placeholder="search" onChange={this.handleSearch}></input>
     </div>
     <div id="imgCard">{this.state.cats.map((cat)=> <Tab id={cat.id} name={cat.name} email={cat.email} image={cat.image}/>)}</div>
     </>
       
    )
}


}
export default Cats;