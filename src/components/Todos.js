import { Component } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import ReactDOM from 'react-dom';
import '../App.css';

function Todos()  { 
    const [itemList,setItemlist]=useState([
    ]);
    
    console.log(itemList);


const handleAddItem = (item) => {
    var node = document.getElementById("item");
    var a = ReactDOM.findDOMNode(node).value;
    setItemlist([...itemList,{item:a}]);
    
}
const handleDeleteItem = (index) => {
    const list=[...itemList];
   list.splice(index,1);
   setItemlist(list);
    
}
    
  return(
  <>
                 
        <input type="text" id="item"  name="item" ></input><button onClick={handleAddItem}>Add</button>
                                                                            
        <table>
        {itemList.map((item,index)=> (
        
            <tr key={index}>
                                
                    <td width="200"><h3>{item.item}</h3></td><td><button className="btn btn-primary btn-sm" onClick={() =>handleDeleteItem(index)} >remove</button></td>
                

            </tr>
            
        ))}    
        </table>           
        

  </>   
      
  )


}
export default Todos;
    
