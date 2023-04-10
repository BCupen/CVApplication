import React, { Component } from "react";

class Field extends Component{
    render(){
        const { displayTag, inputTag, edit, id, value, onChange, onBlur, onClick} = this.props;

        const DisplayTag = `${displayTag}`;
        const InputTag = `${inputTag}`;
        return (
            (edit) ? (
                <label htmlFor={id}>
                    <InputTag type="text"
                            id={id}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            autoFocus
                    />
                </label>
            ): (
                <DisplayTag id={id}
                    onClick={onClick}>{value}</DisplayTag>
            )
        )      
    }
}

export default Field;