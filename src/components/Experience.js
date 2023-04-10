import React, { Component } from "react";
import Field from "./Field";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


class Experience extends Component{
    constructor(props){
        super(props)

        this.state = {
            experience: [
                {
                    position: 'Position',
                    company: 'Company',
                    periodStart: 'Start',
                    periodEnd: 'End',
                    description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. `,
                    responsibilities: [
                        'doing stuff',
                        'doing more stuff'
                    ]
                },
            ]
        }
    }

    displayIcon = (editMode, icon, buttonFunc) =>{
        if(editMode){
            return <FontAwesomeIcon icon={icon} onClick={buttonFunc}/>
        }
    }

    addExperience = ()=>{
        const experienceObj = {
            position: 'Position',
            company: 'Company',
            periodStart: 'Start',
            periodEnd: 'End',
            description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. `,
            responsibilities: [
                'doing stuff',
                'doing more stuff'
            ]
        }
        this.setState({
            experienceObj: [...this.state.experience, experienceObj]
        })
    }

    render(){
        const { editMode } = this.props
        return (
            <div className="experience">
                <div className="experience-header">
                    <h2>Experience</h2>
                    {this.displayIcon(editMode, faPlus, (e)=> console.log(e.target))}
                </div>   
                <div className="experience-body">

                </div> 
            </div>
        );
    }
}

class ExperienceComponent extends Component{
    render(){
        
        return (
            <div className="experience-component">
                <Field displayTag="h2"
                       inputTag="input"
                />
            </div>
        )
    }
}

export default Experience