import { Component } from "react";
import { useState } from "react";
import ReactDOM from 'react-dom';
import "./Todos.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


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
        <div id="header"></div>        
        <div id="body">
        
        <table className ="bodyTable">
            <tr>
                <td colSpan="2">
                    <input type="text" id="item"  name="item" ></input><button onClick={handleAddItem}>Add</button>
                </td>                                                        
            </tr>
        {itemList.map((item,index)=> (
        
            <tr key={index}>
                                
                    <td width="200"><b>{item.item}</b></td><td><i class="bi bi-trash-fill" onClick={() =>handleDeleteItem(index)}></i></td>
                

            </tr>
            
        ))}    
        </table>           
        </div>

  </>   
      
  )


}
export default Todos;
    
