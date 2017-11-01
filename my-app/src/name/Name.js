import React, {Component} from 'react';
import './Name.css';

class Name extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }
  render(){
    return(
      <div className = "Name">
        <br/>
        <h1> Katie Pederson </h1>    
        </div>
    )
  }
}
export default Name;