import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";

class CV extends Component{


    render(){
        const {editMode} = this.props;
        return(
            <div className="cv-container">
                <div className="cv-header">
                    <PersonalDetails editMode={editMode}/>
                    <Summary editMode={editMode}/>
                </div>
                <div className="cv-body">
                    <Experience editMode={editMode}/>
                    <Education editMode={editMode}/>
                </div>
            </div>
        );
    }
}

export default CV;