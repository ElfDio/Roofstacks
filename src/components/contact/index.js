import React from "react";
import { CardHeader } from "../card_header";
import { LabelInput } from "../labelInput";
import { Select } from "../select";
import "./index.scss";

const data= [{ id:0, name: "+90" },{ id: 1, name:"+80" },{ id:2, name:"+70"}];

class Component extends React.Component{
    render(){
        return(
            <div  className="card contact-card">
                <CardHeader title="İletişim Bilgileri"/>
                <div className="card-body">
                    <LabelInput holder="E-Posta Adresi Giriniz" label="E-Posta Adresi" type="email" id="email"/>
                    <label  className="label-text  mt-4">Telefon Numarası</label>
                    <div className="d-flex flex-row align-items-center">
                        <Select data={data} style={{width: "25%"}}/>
                        <LabelInput type="number" id="exampleInputPhone" placeholder="Telefon Numarası"/>
                    </div>
                </div>
            </div>
        )
    }
}

export { Component as Contact };