import React from  "react";
import "./index.scss";

class Component extends React.Component{
    render(){
        return(
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck2"/>
                <label className="form-check-label" >
                    {this.props.check_label}
                </label>
            </div>
        )
    }
}

export { Component as CheckButton };