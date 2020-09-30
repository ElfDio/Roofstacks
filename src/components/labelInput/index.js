import React from "react";
import "./index.scss";


class Component extends React.Component{
    render(){
        return(
            <>
                {
                    !this.props.label ? 
                        <input type={this.props.type} id={this.props.id} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={this.props.holder}/>:
                    <>
                        <label className="label-text ">{this.props.label}</label>
                        <input type={this.props.type} id={this.props.id} className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={this.props.holder}/> 
                    </>
                }
            </>
        )
    }
}

export { Component as LabelInput };