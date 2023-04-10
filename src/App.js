import React, { Component } from "react";
import CV from "./components/CV";
import "./style.css";

class App extends Component{

  constructor(){
    super();

    this.state = {
      editMode: true,
      // personalDetails:{
      //   fullName: {
      //     value:'Full Name',
      //     edit: false
      //   },
      //   phoneNumber: '1-(xxx)-xxx-xxxx',
      //   email: 'example@email.com',
      //   linkedin: 'linkedin.com/example',
      //   github: 'github.com/example'
      // },
      // summary: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. `,
      // experience: [
      //   {
      //     position: 'Position',
      //     company: 'Company',
      //     periodStart: 'Start',
      //     periodEnd: 'End',
      //     description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. `,
      //     responsibilities: [
      //       'doing stuff',
      //       'doing more stuff'
      //     ]
      //   },
      // ],
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
