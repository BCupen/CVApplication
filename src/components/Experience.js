import React, { Component } from "react";
import Field from "./Field";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faBuilding, faCalendar, faCircleXmark} from "@fortawesome/free-solid-svg-icons";


class Experience extends Component{
    constructor(props){
        super(props)

        this.state = {
            experience: [
                {
                    position: {
                        value:'Position',
                        edit: false
                    },
                    company: {
                        value:'Company',
                        edit: false
                    },
                    periodStart: {
                        value:'Start',
                        edit: false
                    },
                    periodEnd: {
                        value:'End',
                        edit: false
                    },
                    description: {
                        value:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. `,
                        edit: false
                    },
                    responsibilities: [
                        {
                            value:'doing stuff',
                            edit: false
                        },
                        {
                            value: 'doing more stuff',
                            edit: false
                        }
                    ]
                },
            ]
        }

        this.handleChange = this.handleChange.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.displayIcon = this.displayIcon.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
        this.handleResponsibilityChange = this.handleResponsibilityChange.bind(this);
        this.toggleResponsibilityEdit = this.toggleResponsibilityEdit.bind(this);
        this.addResponsibility = this.addResponsibility.bind(this);
        this.deleteResponsibility = this.deleteResponsibility.bind(this);
    }

    handleChange =  (e, index) =>{
        let experienceArray = this.state.experience;
        let experienceObj = experienceArray[index];
        experienceObj[e.target.id]['value'] = e.target.value;
        experienceArray[index] = experienceObj;
        this.setState({
            experience: [...experienceArray]
        });
    }

    toggleEdit = (e, index) => {
        let experienceArray = this.state.experience;
        let experienceObj = experienceArray[index];
        experienceObj[e.target.id]['edit'] = !experienceObj[e.target.id]['edit'];
        experienceArray[index] = experienceObj;
        this.setState({
            experience: [...experienceArray]
        });
    }

    displayIcon = (editMode, icon, buttonFunc=null) =>{
        if(editMode){
            return <FontAwesomeIcon icon={icon} onClick={buttonFunc}/>
        }
    }

    addExperience = ()=>{
        const experienceObj = {
            position: {
                value:'Position',
                edit: false
            },
            company: {
                value:'Company',
                edit: false
            },
            periodStart: {
                value:'Start',
                edit: false
            },
            periodEnd: {
                value:'End',
                edit: false
            },
            description: {
                value:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. `,
                edit: false
            },
            responsibilities: [
                {
                    value:'doing stuff',
                    edit: false
                },
                {
                    value: 'doing more stuff',
                    edit: false
                }
            ]
        }
        this.setState({
            experience: [...this.state.experience, experienceObj]
        })
        console.log(this.state.experience);
    }

    deleteExperience = (index) => {
        let experienceArray = this.state.experience;
        experienceArray.splice(index,1);

        this.setState({
            experience: [...experienceArray]
        });
    }

    handleResponsibilityChange = (e, index) =>{
        let experienceArray = this.state.experience;
        let experienceObj = experienceArray[index];
        let responsibilitiesArray = experienceObj.responsibilities;
        let respObj = responsibilitiesArray[e.target.id];
        respObj.value = e.target.value;
        responsibilitiesArray[e.target.id] = respObj;
        experienceObj.responsibilities = responsibilitiesArray;
        experienceArray[index] = experienceObj;
        this.setState({
            experience: [...experienceArray]
        });
    }

    toggleResponsibilityEdit = (e, index) =>{
        let experienceArray = this.state.experience;
        let experienceObj = experienceArray[index];
        let responsibilitiesArray = experienceObj.responsibilities;
        let respObj = responsibilitiesArray[e.target.id];
        respObj.edit = !respObj.edit;
        responsibilitiesArray[e.target.id] = respObj;
        experienceObj.responsibilities = responsibilitiesArray;
        experienceArray[index] = experienceObj;
        this.setState({
            experience: [...experienceArray]
        });
    }

    addResponsibility = (e, index) =>{
        let experienceArray = this.state.experience;
        let experienceObj = experienceArray[index];
        let respObj = {
            value: 'Responsibility 1',
            edit: true
        }
        experienceObj.responsibilities = [...experienceObj.responsibilities, respObj];
        experienceArray[index] = experienceObj;
        this.setState({
            experience: [...experienceArray]
        });
    }

    deleteResponsibility = (e, index) =>{
        let experienceArray = this.state.experience;
        let experienceObj = experienceArray[index];
        let responsibilitiesArray = experienceObj.responsibilities;
        responsibilitiesArray.splice(e.target.id, 1);
        experienceObj.responsibilities = responsibilitiesArray;
        experienceArray[index] = experienceObj;
        this.setState({
            experience: [...experienceArray]
        });
    }

    render(){
        const { editMode } = this.props;
        const { experience } = this.state;
        return (
            <div className="experience">
                <div className="experience-header">
                    <h2>Experience</h2>
                    {this.displayIcon(editMode, faPlus, this.addExperience)}
                </div>   
                <div className="experience-body">
                    {experience.map((experienceObj, index) =>{
                        return <ExperienceComponent
                                    editMode={editMode}
                                    index={index}
                                    experience={experienceObj}
                                    handleChange={this.handleChange}
                                    toggleEdit={this.toggleEdit}
                                    displayIcon={this.displayIcon}
                                    deleteExperience={this.deleteExperience}
                                    handleResponsibilityChange={this.handleResponsibilityChange}
                                    toggleResponsibilityEdit={this.toggleResponsibilityEdit}
                                    addResponsibility={this.addResponsibility}
                                    deleteResponsibility={this.deleteResponsibility}
                                />
                    })}
                </div> 
            </div>
        );
    }
}

class ExperienceComponent extends Component{
    render(){
        const {editMode, index, experience, handleChange, toggleEdit, displayIcon, deleteExperience} = this.props;
        const { handleResponsibilityChange, toggleResponsibilityEdit, addResponsibility, deleteResponsibility} = this.props;
        const { position, company, periodStart, periodEnd, description, responsibilities} = experience;
        const keyName = Object.keys(experience)
        return (
            <div className="experience-component" id={index}>
                <div className="ec-header">
                    <Field displayTag="h3"
                        inputTag="input"
                        edit={(editMode && position.edit)}
                        id={keyName[0]}
                        value={position.value}   
                        onChange={(e) => handleChange(e, index)}
                        onClick={(e )=>  toggleEdit(e, index)}
                        onBlur={(e) => toggleEdit(e, index)}    
                    />
                    {displayIcon(editMode, faTrash, (index)=>{ deleteExperience(index) })}
                </div>
                <div className="ec-location-period">
                    <span className="ec-location">
                        <FontAwesomeIcon icon={faBuilding}/>
                        <Field
                            displayTag="p"
                            inputTag="input"
                            edit={(editMode && company.edit)}
                            id={keyName[1]}
                            value={company.value}
                            onChange={(e)=> handleChange(e,index)}
                            onClick={(e)=> toggleEdit(e, index)}
                            onBlur={(e) => toggleEdit(e, index)}
                        />
                    </span>
                    <span className="ec-period">
                        <FontAwesomeIcon icon={faCalendar}/>
                        <div>
                            <Field
                                displayTag="p"
                                inputTag="input"
                                edit={(editMode && periodStart.edit)}
                                id={keyName[2]}
                                value={periodStart.value}
                                onChange={(e)=> handleChange(e,index)}
                                onClick={(e)=> toggleEdit(e, index)}
                                onBlur={(e) => toggleEdit(e, index)}
                            />
                            -
                            <Field
                                displayTag="p"
                                inputTag="input"
                                edit={(editMode && periodEnd.edit)}
                                id={keyName[3]}
                                value={periodEnd.value}
                                onChange={(e)=> handleChange(e,index)}
                                onClick={(e)=> toggleEdit(e, index)}
                                onBlur={(e) => toggleEdit(e, index)}
                            />
                        </div>
                    </span>
                </div>
                <div className="ec-description">
                    <Field
                        displayTag="p"
                        inputTag="textarea"
                        edit={(editMode && description.edit)}
                        id={keyName[4]}
                        value={description.value}
                        onChange={(e)=> handleChange(e,index)}
                        onClick={(e)=> toggleEdit(e, index)}
                        onBlur={(e) => toggleEdit(e, index)}
                    />
                    <span className="responsibilities">
                        <span>
                            <h5>Responsibilities</h5>
                            {displayIcon(editMode, faPlus, (e) => addResponsibility(e, index))}
                        </span>
                        <ul>
                            {responsibilities.map((resp, i) =>{
                                return <li>
                                            <span className="resp">
                                                <Field
                                                    displayTag="p"
                                                    inputTag="input"
                                                    edit={(editMode && resp.edit)}
                                                    id={i}
                                                    value={resp.value}
                                                    onChange={(e) => handleResponsibilityChange(e, index)}
                                                    onClick={(e) => toggleResponsibilityEdit(e, index)}
                                                    onBlur={(e) => toggleResponsibilityEdit(e, index)}
                                                />
                                                {displayIcon(editMode, faCircleXmark, (e) => deleteResponsibility(e, index))}
                                            </span>                                            
                                    </li>
                            })}
                        </ul>
                    </span>
                </div>
            </div>
        )
    }
}

export default Experience