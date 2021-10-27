// import logo from './logo.svg';
// import { Component } from "react";
import React from "react";
import './App.css';
import { Component } from 'react';
import ClassBased from "./components/classBased";
import FunctionalComponent from "./components/functional";


class App extends Component {

  state = {
    isFunctionalActive : false,
    isClassBasedActive : false
  }

  classComponentFunction = () => {
    if(this.state.isFunctionalActive === false){
      this.setState({isFunctionalActive: true})
    }
    else if(this.state.isFunctionalActive === true){
      this.setState({isFunctionalActive : false})
    }
  }

  functionalComponentFunction = () => {
    if(this.state.isClassBasedActive === false){
      this.setState({isClassBasedActive: true})
    }
    else if(this.state.isClassBasedActive === true){
      this.setState({isClassBasedActive : false})
    }
  }

  render(){
    return (
      <div className="App">
        <h1 className="header">Styling using Functional and Class Component</h1>
        <div className="firstContainer">
          <div><button onClick={this.classComponentFunction} className="functionalBtn">To see styling in Functional Component</button></div>
          <div><button onClick={this.functionalComponentFunction} className="classBasedBtn">To see styling in ClassBased Component</button></div>
        </div>
        <div className="secondContainer">
          <div style={{visibility:this.state.isFunctionalActive ? "visible" : "hidden"}}>
            <FunctionalComponent/>
          </div>
          <div style={{visibility:this.state.isClassBasedActive ? "visible" : "hidden"}}>
            <ClassBased/>
          </div>    
          
        </div>
        
      </div>
    );
  }
  
}

export default App;


/* <div className="secondContainer">
      <div style={{display:this.state.isFunctionalActive ? "block" : "none"}}>
        <FunctionalComponent/>
      </div>
      <div style={{display:this.state.isClassBasedActive ? "block" : "none"}}>
        <ClassBased/>
      </div>    
          
    </div> */





