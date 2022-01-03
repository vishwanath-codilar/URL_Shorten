import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "../components/style/_short_link.scss";
import Headers from "./header";
import Banner from "./banner";
import Input_feild from "./input_feild";
import Footer from "./footer";
import Feature_cards from "./feature_cards";
export default class Short_link extends Component {
  

  render() {
    // console.log(this.state);
    return (
      <div className="container">
        <Headers />
        <Banner />
        <Input_feild />
         <Feature_cards />
        <Footer />
       
      </div>
    );
  }
}
