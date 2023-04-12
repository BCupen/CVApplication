import React, { Component } from "react";
import CV from "./components/CV";
import "./style.css";

class App extends Component{

  constructor(){
    super();

    this.state = {
      editMode: true,
    }

  }



  render(){
    const { editMode } = this.state;
    return(
      <div className="app-container">
        <header>
          <h1>CV Builder</h1>
          <button>View Final</button>
        </header>
        <CV editMode={editMode} />
      </div>
    )
  }
}

export default App;
