import React, { Component } from "react";
import "../components/style/input_feild.scss";

export default class Input_feild extends Component {
  // data;
  constructor(props) {
    super(props);
    this.state = {
      input_value: "",
      status: false,
      copy_status: "copy",
      fetchingStatus: "Shorten!",
      resultData: [],

      errorMsg: "",
      n: "",
    };
  }
  getUserURL = (e) => {
    this.setState({
      input_value: e.target.value,
      fetchingStatus: "Shorten!",
      n: "",
    });

    console.log(this.state.input_value);
  };
  

  getShortURL = async (e) => {
    this.setState({ fetchingStatus: "Fetching.." });
    e.preventDefault();
    if (this.state.input_value.length == 0) {
      this.setState({ n: "empty" });
    } else {
      try {
        await fetch(
          `https://api.shrtco.de/v2/shorten?url=${this.state.input_value}`
        )
          .then((res) => res.json())
          .then((response_data) => {
            if (!response_data.ok) {
              throw (
                (Error(response_data.error),
                this.setState({
                  errorMsg: response_data.error,
                  fetchingStatus: "Shorten",
                  n: "error",
                }))
              );
            } else {
              this.setState({
                status: true,
                fetchingStatus: "Fetched",
                resultData: [
                  ...this.state.resultData,
                  {
                    main_url: response_data.result.original_link,
                    short_url: response_data.result.full_short_link,
                    id: new Date().getTime(),
                    copied: false,
                  },
                ],
                errorMsg: "",
                n: "",
              });
            }
          });
        
      } catch (e) {
        console.log(e);
        this.setState({
          resultData: "",
          status: false,
        });
      }
    }
  };
   componentDidMount() {
     console.log("will mount");
    const values = JSON.parse(localStorage.getItem("key")) || [];
    if (values.length > 0) {
      this.setState({ resultData: values });
    }
  }
  componentDidUpdate(){
    localStorage.setItem("key", JSON.stringify(this.state.resultData));
  }
  
  copy = (i, id) => {
    const newid = this.state.resultData.map((data) =>
      data.id === id ? { ...data, copied: true } : data
    );
    if (id === this.state.resultData[i].id) {
      console.log(id);

      navigator.clipboard.writeText(this.state.resultData[i].short_url);
    } else {
      console.log("hi");
    }

    this.setState({
      resultData: newid,
    });
    // console.log(newid);
  };
  
  delete= (id) => {
    // console.log(id);
    const updated = this.state.resultData.filter((val) => {
      if (val.id !== id) {
        return val;
      }
    });
    var result = window.confirm("Do you really want to delete ?");
    if(result){
    this.setState({resultData: updated})
    }
  }
 

  render() {
    console.log(this.state.resultData,"render");                        
    return (
      <div className="input_field">
        <div className="input_field_inner">
          <form onSubmit={this.getShortURL}>
            <div className="input_url">
              <label>
                <input
                  type="text"
                  placeholder="Shorten a link here..."
                  onChange={this.getUserURL}
                  className={
                    this.state.n.length !== 0 ? "input input-b" : "input"
                  }
                />
              </label>
              {this.state.n.length !== 0 ? (
                <>
                  {this.state.n == "error" ? (
                    <span className="errorMsg">Pleas enter valid link</span>
                  ) : (
                    <span className="errorMsg">pleas add a link</span>
                  )}
                </>
              ) : (
                <></>
              )}
            </div>

            <div className="input_submit">
            
              <label For="input_submit">
                <input type="submit" value={this.state.fetchingStatus} />
              </label>
            </div>
          </form>
        </div>
        <div className="short_urls">
          <ul>
            
              
                {this.state.resultData
                  .map((e, i) => {
                    return (
                      <li key={i}>
                        <div className="main_url">
                          <span className="main_url-inner">{e.main_url}</span>
                          
                          </div>
                        <div className="shrt_url">
                          <span className="url_link">
                            <a href={e.short_url} target="_blank">
                              {e.short_url}
                            </a>
                          </span>
                          <span className="copy">
                            <input
                              className={
                                e.copied ? "button button-btn" : "button"
                              }
                              type="button"
                              onClick={() => this.copy(i, e.id)}
                              value={!e.copied ? "copy" : "copied"}
                            />
                          </span>
                          <span className="delete"><img src="images/cancel-close-svgrepo-com.svg"onClick={() => this.delete(e.id)}/></span>
                        </div>
                      </li>
                    );
                  })
                  .reverse()}
           
          </ul>
        </div>
      </div>
    );
  }
}
