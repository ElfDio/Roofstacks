import React from "react";
import "./index.scss";


class Component extends React.Component{
    render(){
        return(
            <div className="card-header">
                <h5>{this.props.title}</h5>
            </div>
                
        )
    }
}

export { Component as CardHeader };