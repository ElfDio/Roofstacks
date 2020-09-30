import React from "react";
import "./index.scss";


class Component extends React.Component{
    render(){

        return(
            <select className="custom-select my-1 mr-sm-2 contact-phone" id="inlineFormCustomSelectPref" style={this.props.style} >
                {
                    this.props.data.map(i=>{
                        return(
                            <option key={i.id} defaultValue={i.name}>{i.name}</option>
                        )
                    })
                }
            </select>
        )
    }
}

export { Component as Select };