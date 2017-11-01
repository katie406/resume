import React, {Component} from 'react';
import './Experience.css';


class Experience extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }
  render(){
    return(
      <div className = "Experience">
        Experience:<br/>
        Simms Fishing Products
 <br />
    </div>
    )
  }
}
export default Experience;
