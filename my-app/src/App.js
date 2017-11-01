import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Resume from './resume/Resume';
import Name from './name/Name';
import Links from './links/Links';
import Education from './education/Education'
import Experience from './experience/Experience'



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // hobbies: ["Riding horses", "Hiking", "Fly-Fishing", "Dancing","Leather working","Fooseball","Reading","Travelling"]
      
    }
  }
  render() {
    return (
      <div className="App">
        <Name />
        <Links />
        <Resume />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;


