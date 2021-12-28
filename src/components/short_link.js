import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "../components/short_link.scss";
export default class Short_link extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input_value: "",
      status: false,
      copy_status: "copy",
      fetchingStatus: "SHORTEN",
      resultData: "",
    };
  }
  getUserURL = (e) => {
    this.setState({
      input_value: e.target.value,
      fetchingStatus: "SHORTEN",
    });

    // console.log(this.input_value)
  };

  getShortURL = (e) => {
    this.setState({ fetchingStatus: "fetching.." });
    e.preventDefault();
    if (this.state.input_value.length == 0) {
      alert("Enter the url");
    } else {
      try {
        setTimeout(() => {
          fetch(
            `https://api.shrtco.de/v2/shorten?url=${this.state.input_value}`
          )
            .then((res) => res.json())
            .then((response_data) => {
              this.setState({
                status: true,
                fetchingStatus: "fetched",
                resultData: response_data.result.short_link,
              });
            });
        }, 3000);
      } catch (console) {
        this.setState({
          resultData: "",
          status: false,
        });
      }
    }
  };
  copy = () => {
    if (this.state.resultData.length !== 0) {
      this.setState({ copy_status: "copied" });
      navigator.clipboard.writeText(this.state.resultData);
    } else {
      this.setState({ copy_status: "copy" });
    }
  };
  reset = () => {
    this.setState({
      resultData: "",
      input_value: "",
      status: false,
      copy_status: "copy",
      fetchingStatus: "SHORTEN",
    });
  };

  render() {
    console.log(this.state.status);
    return (
      <div className="container">
        <div className="title">
          <div className="url">url</div>
          <div className="shortern">Shorten
          <span className="refresh_main"><button className="refresh" onClick={this.reset}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              color="red"
            >
              <path d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z" />
            </svg>
          </button></span></div>
        </div>
        <div className="main">
          <form onSubmit={this.getShortURL}>
            <span>
              <label>USER_URL:</label>
              <input
                type="text"
                onChange={this.getUserURL}
                value={this.state.input_value}
              />
            </span>

            {!this.state.status ? (
              <div className="loader">
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={80}
                  width={80}
                />
              </div>
            ) : (
              <span className="result_url">
                <label>Short_URL:</label>
                <input type="text" value={this.state.resultData} />
                <span className="copy">
                  {" "}
                  <input
                    className={
                      this.state.copy_status == "copied"
                        ? "button button-btn"
                        : "button"
                    }
                    type="button"
                    onClick={this.copy}
                    value={this.state.copy_status}
                  />
                </span>
              </span>
            )}

            <input
              type="submit"
              className={
                this.state.fetchingStatus == "fetching.."
                  ? "submit submit-sub"
                  : "submit"
              }
              value={this.state.fetchingStatus}
            />
          </form>
       
        </div>
      </div>
    );
  }
}
