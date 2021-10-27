import React from "react";
import '../App.css';

function FunctionalComponent (){
    return(
      <div className="functionalComponent">
        <h2>This is created using Functional Component</h2>
        <p className="classBasedExternalCss">This is done using external css</p>
        <p style={{color:"green"}}>This is done using inline css</p>
      </div>
    );
}

export default FunctionalComponent;

