import React, { Component } from "react";
import ChairList from "./ChairList";
import Result from './Result'

export class MovieBooking extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="text-center fw-bold my-5">Đặt vé xem phim Cyber</h2>
        <div className="row">
          <div col-8>
            <div className="bg-dark text-white mb-3 text-center fs-4">Screen
            </div>
            <ChairList/>
          </div>
          <div className="col-4">
            <Result/>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieBooking;
