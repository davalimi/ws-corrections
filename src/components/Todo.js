import { Component } from "react";

export class Todo extends Component {
    constructor(props) {
    super(props);
    this.state = {
      item:this.props.todo
    }
    
}

handleDelete = () => {}
render () {
  return(
  <>
       <div><span>{this.state.item.value}</span></div>


  </>   
      
  )
}

}
export default Todo;
    
