import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/fontawesome-free-brands";
import Field from "./Field";

class PersonalDetails extends Component{

    constructor(props){
        super(props);

        this.state =  {
            personalDetails: {
                fullName: {
                    value: 'Full Name',
                    edit: false
                },
                phoneNumber: {
                    value: '1-(xxx)-xxx-xxxx',
                    edit: false
                },
                email: {
                    value: 'example@email.com',
                    edit: false
                },
                linkedin: {
                    value: 'linkedin.com/example',
                    edit: false
                },
                github: {
                    value: 'github.com/example',
                    edit: false
                }
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.toggleEdit= this.toggleEdit.bind(this);
    }

    handleChange = (e) =>{
        let personalDetails = this.state.personalDetails;
        personalDetails[e.target.id]['value'] = e.target.value;
        this.setState({
            personalDetails
        });
    }

    toggleEdit = (e) =>{
        let personalDetails =  this.state.personalDetails;
        personalDetails[e.target.id]['edit'] = !personalDetails[e.target.id]['edit'];
        this.setState({
            personalDetails
        })
    }

    render(){
        const { editMode } = this.props
        const { fullName, phoneNumber, email, linkedin, github } = this.state.personalDetails;
        const keyName = Object.keys(this.state.personalDetails);
        return (
            <div className="personal-details">
                {/* create component for each field? this whole block */}
                <Field
                    displayTag="h1"
                    inputTag="input"
                    edit={(editMode && fullName.edit)}
                    id={keyName[0]}
                    value={fullName.value}
                    onChange={this.handleChange}
                    onBlur={this.toggleEdit}
                    onClick={this.toggleEdit}
                />
                <div className="contact-info">
                    <span>
                        <FontAwesomeIcon icon={faPhone}/>
                        <Field  displayTag="p" 
                                inputTag="input"
                                edit={(editMode && phoneNumber.edit)}
                                id={keyName[1]}
                                value={phoneNumber.value}
                                onChange={this.handleChange}
                                onBlur={this.toggleEdit}
                                onClick={this.toggleEdit}
                        />
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <Field displayTag="p" 
                               inputTag = "input"
                               edit={(editMode && email.edit)}
                               id={keyName[2]}
                               value={email.value}
                               onChange={this.handleChange}
                               onBlur={this.toggleEdit}
                               onClick={this.toggleEdit}
                        />
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faGithub}/>
                        <Field displayTag="p" 
                               inputTag = "input"
                               edit={(editMode && github.edit)}
                               id={keyName[4]}
                               value={github.value}
                               onChange={this.handleChange}
                               onBlur={this.toggleEdit}
                               onClick={this.toggleEdit}
                        />
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faLinkedin}/>
                        <Field displayTag="p" 
                               inputTag = "input"
                               edit={(editMode && linkedin.edit)}
                               id={keyName[3]}
                               value={linkedin.value}
                               onChange={this.handleChange}
                               onBlur={this.toggleEdit}
                               onClick={this.toggleEdit}
                        />
                    </span>
                </div>
            </div>
        );
    }
}

export default PersonalDetails;