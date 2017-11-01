import React, {Component} from 'react';
import './Education.css';


class Education extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }
  render(){
    return(
      <div className = "Education">
        Education:<br/>
        Montana State University
Business Marketing Degree <br />
    </div>
    )
  }
}
export default Education;
