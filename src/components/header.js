import React, { Component } from 'react'
import "../components/style/header.scss"

export default class Headers extends Component {
    constructor(props){
        super(props)
        this.state=({
            status: false,
        })
    }
    set =()=>{
        this.setState({status:!this.state.status})
        if(this.state.status===false){
          document.body.style.overflow="hidden";
         
        }else{
          document.body.style.overflow= "scroll";
          
        }
    }
    render() {
        console.log(this.state.status)
        return (
            
            <div className="header_bar">
              
              <div className="header_bar_left">
                <a href="#logo"><img src="images/logo.svg" alt="hello" /></a>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Resources</a>
              </div>
              <div className="header_bar_right">
                <div className="div"><button>Login</button></div>
                <div className="signup"><button>Sign Up</button></div>
               
              </div>
            
              <div className="menu"><img src={!this.state.status?("images/icons8-menu.svg"):("images/cancel-close-svgrepo-com.svg")} alt="" onClick={this.set} />
              
              <div className={!this.state.status?("hide"):("hide hide-show b")}>
             <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Resources</a>
               <hr />
                <a href="#">Login</a>
                <button><a href="#">Sing-Up</a></button>
        

              </div>
              
              </div>
            </div>
        )
    }
}
