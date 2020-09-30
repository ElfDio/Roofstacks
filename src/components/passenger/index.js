import React from "react";
import "./index.scss";
import { Save, Search, CalendarToday, InsertDriveFile } from "@material-ui/icons";
import { Select } from "../select";
import { CardHeader } from "../card_header";
import { LabelInput } from "../labelInput";
import { CheckButton } from "../checkbutton";
import Checkbox from '@material-ui/core/Checkbox';


const data= [{ id:0, name: "+90" },{ id: 1, name:"+80" },{ id:2, name:"+70"}];
const country= [{ id:0, name: "Türkiye" },{ id: 1, name:"ABD" },{ id:2, name:"İsveç"}];


class Component extends React.Component{

    state={
        show:false,
        bring: false
    }

    render(){
        return(
            <>
                <div  className="card passenger-card">
                    <CardHeader title="Yolcu Bilgileri"/>
                    <div className="card-body">
                    <form>
                        <div className="form-row d-flex align-items-end">
                            <div className="form-group col-xl-1">
                                <label className="title">Yetişkin</label>
                                <CheckButton check_label="Bay"/>
                                <CheckButton check_label="Bayan"/>
                            </div>
                            <div className="form-group col-xl-4">
                                <LabelInput holder="Yolcu Adı" type="text" id="name"/>
                            </div>
                            <div className="form-group col-xl-4">
                                <LabelInput holder="Yolcu Soyadı" type="text" id="surname"/>
                            </div>
                            <div className="form-group col-xl-3 d-flex flex-row">
                                <LabelInput holder="Doğum Tarihi" type="date" id="bt"/>
                            </div>
                        </div>
                        
                        <div className="form-row d-flex align-items-end">
                            <div className="form-group col-xl-4 d-flex flex-row ">
                                <Checkbox
                                    color="default"
                                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                                />
                                <LabelInput holder="Tc Kimlik Numarası" type="number" id="number"/>
                            </div>
                            <div className="form-group col-xl-4 d-flex flex-row align-items-center">
                                <Select data={data} style={{width: "25%"}}/>
                                <LabelInput holder="Telefon Numarası" type="number" id="phone"/>
                            </div>
                            <div className="form-group col-xl-4">
                                <LabelInput holder="E-Posta Adresi" type="email" id="inputEmail4"/>
                            </div>
                        </div>
                        
                        <div className="form-row d-flex align-items-end">
                            <div className="form-group col-xl-4">
                                <LabelInput holder="Pasaport Numarası" type="number" id="inputZip"/>
                            </div>
                            <div className="form-group col-xl-4">
                                <Select data={country}/>
                            </div>
                             <div className="form-group col-xl-4 d-flex flex-row">
                                <LabelInput holder="Pasaport Bitiş Tarihi" type="date" id="ps"/>
                            </div>
                        </div>
                        
                        <div className="form-row d-flex align-items-end">
                            <div className="form-group col-xl-4">
                                <LabelInput holder="Mil Kodu" type="text" id="inputZip" />
                            </div>
                            <div className="form-group col-xl-4">
                                <LabelInput holder="HES Kodu" type="text" id="inputZip"/>
                            </div>
                        </div>

                        <div className="btn-passenger">
                            <div className="btn btn-save mr-2" onClick={this.onSave}>
                               <Save/> Müşteri Bankasına Kaydet
                            </div>
                            <div className="btn btn-search" onClick={this.onBring}>
                                <Search/> Müşteri Bankasına Getir</div>
                        </div>
                        </form>
                    </div>
                </div>

                {
                    this.state.show === true ?
                    <div className="alert alert-success" role="alert">
                        Müşteri Bankası Kaydedildi
                    </div>:null
                }
                 {
                    this.state.bring === true ?
                    <div className="alert alert-primary" role="alert">
                        Müşteri Bankası Getirildi
                    </div>:null
                }
            </>
        )
    }

    onSave = () => {
        const { show } = this.state;
        if (show === false)
            this.setState({ show: true });
        if (show === true)
            this.setState({ show: false });
    }

    onBring = () => {
        const { bring } = this.state;
        if (bring === false)
            this.setState({ bring: true });
        if (bring === true)
            this.setState({ bring: false });
    }
}

export { Component as Passenger };