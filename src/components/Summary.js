import React, { Component } from "react";
import Field from "./Field";


class Summary extends Component{
    constructor(props){
        super(props);

        this.state = {
            summary:{ 
                value: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. `,
                edit: false
            },

        }
    }

    handleChange = (e) =>{
        this.setState({
            summary: {
                value: e.target.value,
                edit: this.state.summary.edit
            }
        })
    }

    toggleEdit = () =>{
        this.setState({
            summary:{
                value: this.state.summary.value,
                edit: !this.state.summary.edit
            }
        })
    }

    render(){
        const { editMode } = this.props
        const { value, edit } = this.state.summary;
        const keyName = Object.keys(this.state)
        return (
            <div className="summary">
                <h2>Summary</h2>
                <Field displayTag="p"
                       inputTag="textarea"
                       edit={(editMode && edit)}
                       id={keyName[0]}
                       value={value}
                       onChange={this.handleChange}
                       onClick={this.toggleEdit}
                       onBlur={this.toggleEdit}  
                />
            </div>
        );
    }
}

export default Summary;