import React, { Component } from "react";

class CoinFlip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      flipped: "flipped",
    };
    this.coinToss = this.coinToss.bind(this);
  }

  coinToss() {
    const res = document.getElementById("result");
    const btn = document.getElementById("flip-btn");
    btn.disabled = true;
    res.innerHTML = " ";

    if (Math.random() < 0.5) {
      this.setState({ result: "heads" });
      setTimeout(() => {
        res.innerHTML = "Heads";
        btn.disabled = false;
      }, 3100);
    } else {
      this.setState({ result: "tails" });
      setTimeout(() => {
        res.innerHTML = "Tails";
        btn.disabled = false;
      }, 3100);
    }
  }
  render() {
    return (
      <div className="a-page">
        <div className="a-ctnr">
          <div className="a-title-ctnr">
            <span className="a-page-title">Coin Flip</span>
          </div>
          <div className="a-cf-coin">
            <div id="coin" className={this.state.result} key={+new Date()}>
              <div className="side-a">
                <h2>
                  <i className="fa-solid fa-bug"></i>
                </h2>
              </div>
              <div className="side-b">
                <h2>
                  <i className="fa-solid fa-code"></i>
                </h2>
              </div>
            </div>
          </div>
          <div id="result" className="a-cf-result">
            {" "}
          </div>
          <div className="a-cf-flip">
            <button id="flip-btn" onClick={this.coinToss}>
              Flip Coin
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CoinFlip;
