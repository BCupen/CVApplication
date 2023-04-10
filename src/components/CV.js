import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import Summary from "./Summary";
import Experience from "./Experience";

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
                </div>
            </div>
        );
    }
}

export default CV;