import React, { Component } from "react";
import "../components/style/footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer_main">
        <div className="footer_sub1">
          <div className="auth-reminder">
            <h1>Boost your links today</h1>
          </div>
          <div className="Get_started">
            <button>Get Started</button>
          </div>
        </div>
        <div className="footer_sub2_main">
        <div className="footer_sub2">
          <div className="logo">
              <img src="images/logo1.svg" alt="" />
          </div>
          {/* <div className="menu"> */}
              <div className="footer-section">
                  <h4>Features</h4>
                  <a href="#">Link Shortening</a>
                  <a href="#">Branded Links</a>
                  <a href="#">Analytics</a>
              </div>
              <div className="footer-section">
                  <h4>Resources</h4>
                  <a href="#">Blog</a>
                  <a href="#">Developers</a>
                  <a href="#">Support</a>
              </div>
              <div className="footer-section">
                  <h4>Company</h4>
              <a href="#">About</a>
                  <a href="#">Our Team</a>
                  <a href="#">Careers</a>
                  <a href="#">contacts</a>
              </div>
          {/* </div> */}
          <div className="social_madia_icons">
            <img src="images/icon-facebook.svg" alt="" />
            <img src="images/icon-twitter.svg" alt="" />
            <img src="images/icon-pinterest.svg" alt="" />
            <img src="images/icon-instagram.svg" alt="" />
          </div>
        </div>
        </div>
        <div className="created-by">
          <span>coded by :</span><a href="https://github.com/vishwanath-codilar/URL_Shorten" target="_blank"> vishwanath</a>
        </div>
      </div>
    );
  }
}
