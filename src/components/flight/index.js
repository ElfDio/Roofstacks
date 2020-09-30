import React from "react";
import { Accordion, Button, Card, Col, Row } from "react-bootstrap";
import "./index.scss";
import logo from "../../assets/images/tr.png";
import down from "../../assets/images/down.png";
import file from "../../file.json";
import { EventSeat, ShoppingBasket, FlightTakeoff, PriorityHigh } from "@material-ui/icons";
import { Divider } from "../divider";
import { CardHeader } from "../card_header";


class Component extends React.Component{

    render(){
        const data = file.ucus[ Math.floor(Math.random() * file.ucus.length)];

        return(
            <Card className="card flight-card-container">
                <CardHeader title="Uçuş Bilgileri"/>
                <Card.Body>
                    <span className="ml-2 mt-3 mb-2"><b>Gidiş: </b>{data.go_date}</span>
                    <Accordion defaultActiveKey={data.id}>
                        <Card className="flight-card" key={data.id}>
                            <Card.Header className="flight-card-header">
                                <img src={logo}/>
                                <div className="flight-information">
                                   <div className="d-flex flex-column align-items-end" style={{flex:1}}>
                                        <span>{data.departure_time}</span>
                                        <span>{data.depature_place}</span>
                                   </div>
                                   <div className="d-flex flex-row align-items-center mr-3" style={{flex:2}}>
                                        <Divider one_time={data.one_break_time} one_place={data.one_break_place} two_time={data.two_break_time} two_place={data.two_break_place}/>
                                       <FlightTakeoff/> 
                                    </div>
                                   <div className="d-flex flex-column" style={{flex:1}}>
                                        <span>{data.departure_time}</span>
                                        <span>{data.return_place}</span>
                                   </div>
                                </div>
                            <Accordion.Toggle as={Button} className="flight-btn" variant="link" eventKey={data.id}>
                                <img src={down}/>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={data.id}>
                                <Card.Body>
                                    {
                                        data.sub.map(i=>{
                                            return(
                                                <Row className="d-flex align-items-center" key={i.id}>
                                                    <Col className="col-lg-3 col-md-12 col-12">
                                                        <img src={i.img} style={{width: "100%"}}/>
                                                        <p class="date-hour">{i.date}<br/> {i.total_hour}</p>
                                                    </Col>
                                                    <Col className="col-lg-6 col-md-12 col-12">
                                                        <div className="d-flex flex-column">
                                                            <b>{i.departure_time} {i.airline}</b>
                                                            <span>{i.plane} | {i.plane_code}</span>
                                                            <span style={{fontWeight:"600"}}>{i.return_time} {i.finish_airline}</span>
                                                        </div>
                                                    </Col>
                                                    <Col className="col-lg-3 col-md-12 col-12">
                                                       <div className="d-flex flex-column justify-content-end">
                                                            <div className="d-flex flex-row align-items-center icon-text mr-1"> <EventSeat/> <span class="other-text">{i.cabin}</span></div>
                                                            <div className="d-flex flex-row align-items-center icon-text"><ShoppingBasket/> <span class="other-text">{i.piece}</span></div>
                                                       </div>
                                                    </Col>
                                                    <div class="wait">Bekleme Süresi {i.standby_time}</div>
                                                </Row>
                                            )
                                        })
                                    }
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Card.Body>
                <span className="ml-3 mb-3" style={{color:"#14711b"}}><PriorityHigh style={{color:"#9ace6a"}} /> Promosyon ücretlerde iptal ve iade yapılamaz</span>
                <span className="ml-3 mb-3"><PriorityHigh style={{color:"orange"}}/>  İptal ve iade işlemlerinde en kısıtlı ücret kuralına sahip uçuşun kuralı geçerlidir.</span>
            </Card>
        )
    }
}

export { Component as Flight };