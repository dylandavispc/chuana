import React, { Component } from "react";
import API from "../../../utils/API";
import Carousel from "../../Carousel"
// import Navbar from "../../Navbar"
import CategoryCards from "../../CategoryCards"
import CommerceCards from "../../CommerceCards"
import Features from "../../Features"
import Prices from "../../Prices"
import LandingHeader from "../../LandingHeader"
import Navbar from "../../Navbar"

class Landing extends Component {
  constructor() {
    super()
  }



  render() {
    return (
      <div>
        <LandingHeader />
        <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Carousel />
          </div>
          <div className="col-md-12">
            <CategoryCards />
          </div>
          <div className="col-md-12">
            <Features />
          </div>
          <div className="col-md-12">
            <CommerceCards />
            <CommerceCards />
          </div>
          <div>
            <Prices />
          </div>
        </div>
        
        {/* <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">WELCOME</h1>
            <div>
              {this.state.products.length ? (
                <ul>
                  {this.state.products.map(product => {
                    return <li>{product.name}</li>;
                  })}
                </ul>
              ) : (
                <h3>No results to display</h3>
              )}
            </div>
          </div>
        </div> */}
        </div>
      </div>
    );
  }
}

export default Landing;
