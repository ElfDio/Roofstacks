import React from 'react';
import './App.scss';
import { CardHeader, Contact, Flight, Passenger, Reservation } from "./components";

class App extends React.Component{
  render(){
    return(
        <div className="card main-card">
          <CardHeader/>
          <div className="card-body">
            <div className="row">
              <div className="col-xl-7 col-md-12 col-12">
                <Passenger/>
                <div className="row mt-3">
                  <div className="col-lg-6 col-12">
                    <Reservation/>
                  </div>
                  <div className="col-lg-6 col-12 mt-2 ">
                    <Contact/>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-md-12 col-12">
                <Flight/>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default App;
