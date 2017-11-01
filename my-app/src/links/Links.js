import React, {Component} from 'react';
import './Links.css';


class Links extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }
  render(){
    return(
      <div className = "Links">
        <br/>
        (406)404-4242
•	Katie.pederson406@gmail.com<br />
•	https://www.linkedin.com/in/katie-pederson-333b7793/<br />
•	https://github.com/katie406 <hr />
    </div>
    )
  }
}
export default Links;

