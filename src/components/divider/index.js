import React from "react";
import "./index.scss";

class Components extends React.Component{

    render(){
        return(
            <>
                <div class="hr hr--center-ball ml-2">
                    <span className="one-time">{this.props.one_time}</span>
                    <span className="one-place">{this.props.one_place}</span>
                </div>
                <div class="hr hr--center-ball2 mr-2">
                    <span className="two-time">{this.props.two_time}</span>
                    <span className="two-place">{this.props.two_place}</span>
                </div>
            </>
        )
    }
}

export { Components as Divider}