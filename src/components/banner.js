import React, { Component } from 'react'
import "../components/style/banner.scss";
export default class Banner extends Component {
    render() {
        return (
            <div className='banner'>
                <div className="banner_text">
                    <h1>More than just shorter links</h1>
                    <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <button class="get-started">Get Started</button>
                </div>
                <div className="banner_img"><img src="images/illustration-working.svg" alt="" /></div>
                
            </div>
        )
    }
}

