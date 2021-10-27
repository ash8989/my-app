import React from "react";
import {Component} from "react";
import '../App.css';

class ClassBased extends Component{
    render(){
      return(
      <div className="classBased">
      <h2>This is created using ClassBased Component</h2>
      <p className="functionalExternalCss">This is done using external css</p>
      <p style={{color:"yellow"}}>This is done using inline css</p>
      </div>
      );
    }
}
 
export default ClassBased;