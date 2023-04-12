import React, { Component } from "react";
import Field from "./Field";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";

class Education extends Component{
    constructor(props){
        super(props)

        this.state = {
            education: [
                {
                    degree: {
                        value: 'Degree',
                        edit: false
                    },
                    institute: {
                        value: 'Institute',
                        edit: false
                    },
                    periodStart: {
                        value: 'Start',
                        edit: false
                    },
                    periodEnd: {
                        value: 'End',
                        edit: false
                    }
                }

            ]
        }

        this.displayIcon = this.displayIcon.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e, index) =>{
        let educationArray = this.state.education;
        let educationObj = educationArray[index];
        educationObj[e.target.id]['value'] = e.target.value;
        educationArray[index] = educationObj;
        this.setState({
            education: [...educationArray]
        });
    }

    toggleEdit = (e, index) => {
        let educationArray = this.state.education;
        let educationObj = educationArray[index];
        educationObj[e.target.id]['edit'] = !educationObj[e.target.id]['edit'];
        educationArray[index] = educationObj;
        this.setState({
            education: [...educationArray]
        });
    }

    displayIcon = (editMode, icon, buttonFunc=null) =>{
        if(editMode){
            return <FontAwesomeIcon icon={icon} onClick={buttonFunc}/>
        }
    }

    addEducation = () => {
        const educationObj = {
                degree: {
                    value: 'Degree',
                    edit: false
                },
                institute: {
                    value: 'Institute',
                    edit: false
                },
                periodStart: {
                    value: 'Start',
                    edit: false
                },
                periodEnd: {
                    value: 'End',
                    edit: false
                }
        }


        this.setState({
            education: [...this.state.education, educationObj]
        });
    }

    deleteEducation = (index)=>{
        let educationArray = this.state.education;
        educationArray.splice(index, 1);

        this.setState({
            education: [...educationArray]
        });
    }

    render(){
        const { editMode } = this.props;
        const { education } = this.state;
        return (
            <div className="education">
                <div className="education-header">
                    <h2>Education</h2>
                    {this.displayIcon(editMode, faPlus, this.addEducation)}
                </div>
                <div className="education-body">
                        {education.map((ed, i) =>{
                            return <EducationComponent
                                        editMode={editMode}
                                        index={i}
                                        education={ed}
                                        displayIcon={this.displayIcon}
                                        handleChange={this.handleChange}
                                        toggleEdit={this.toggleEdit}
                                        deleteEducation={this.deleteEducation}
                                />
                        })}
                </div>
            </div>
        );
    }
}

class EducationComponent extends Component{

    render(){
        const { editMode, index, education,displayIcon, handleChange, toggleEdit, deleteEducation} = this.props;
        const { degree, institute, periodStart, periodEnd} = education;
        const keyName = Object.keys(education);
        return (
            <div className="education-component" id={index}>
                <div className="educomp-header">
                    <Field
                        displayTag="h3"
                        inputTag="input"
                        edit={(editMode && degree.edit)}
                        id={keyName[0]}
                        value={degree.value}
                        onChange={(e) => handleChange(e, index)}
                        onClick={(e) => toggleEdit(e, index)}
                        onBlur={(e) => toggleEdit(e, index)}
                    />
                    {displayIcon(editMode, faTrash, (index) => deleteEducation(index))}
                </div>
                <div className="educomp-institute">
                    <FontAwesomeIcon icon={faLocationDot}/>
                    <Field
                        displayTag="p"
                        inputTag="input"
                        edit={(editMode && institute.edit)}
                        id={keyName[1]}
                        value={institute.value}
                        onChange={(e) => handleChange(e, index)}
                        onClick={(e) => toggleEdit(e, index)}
                        onBlur={(e) => toggleEdit(e, index)}
                    />
                </div>
                <div className="educomp-period">
                    <FontAwesomeIcon icon={faCalendar}/>
                    <span>
                        <Field
                            displayTag="p"
                            inputTag="input"
                            edit={(editMode && periodStart.edit)}
                            id={keyName[2]}
                            value={periodStart.value}
                            onChange={(e) => handleChange(e, index)}
                            onClick={(e) => toggleEdit(e, index)}
                            onBlur={(e) => toggleEdit(e, index)}
                        />
                        -
                        <Field
                            displayTag="p"
                            inputTag="input"
                            edit={(editMode && periodEnd.edit)}
                            id={keyName[3]}
                            value={periodEnd.value}
                            onChange={(e) => handleChange(e, index)}
                            onClick={(e) => toggleEdit(e, index)}
                            onBlur={(e) => toggleEdit(e, index)}
                        />
                    </span>

                </div>

            </div>
        )
    }
}

export default Education