import React, { Component } from 'react';
import "../components/style/feature_cards.scss";

export default class Feature_cards extends Component {
    render() {
        return (
            <div className="feature-section">
            <div className="feature_cards">
                <div className="feature-title">
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our advanced statistics dashboard. </p>
                </div>
                <div className="feature-card">
                    <div className="card brand">
                        <div className="card-icon">
                            <img src="images/icon-brand-recognition.svg" alt="" />
                        </div>
                    <div className="card-detail">
                        <h3>Brand Recognition</h3>
                        <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                    </div>
                    <div className="card record">
                        <div className="card-icon">
                            <img src="images/icon-detailed-records.svg" alt="" />
                        </div>
                        <div className="card-detail">
                            <h3>Detailed Records</h3>
                            <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                        </div>

                    </div>
                    <div className="card Customizable">
                    <div className="card-icon">
                            <img src="images/icon-fully-customizable.svg" alt="" />
                        </div>
                        <div className="card-detail">
                            <h3>Fully Customizable</h3>
                            <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
        )
    }
}
