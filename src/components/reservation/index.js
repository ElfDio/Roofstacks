import React from "react";
import "./index.scss";
import { CardHeader } from "../card_header";

class Component extends React.Component{
    render(){
        return(
            <div  className="card reservation-card">
                <CardHeader title="Rezervasyon Notu"/>
                <div className="card-body">
                    <div className="form-group">
                        <textarea className="form-control rezervation-text" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
            </div>
        )
    }
}

export { Component as Reservation };