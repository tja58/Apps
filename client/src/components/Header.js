import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="a-header">
      <div className="a-title">Apps Galore</div>
      <div className="a-links">
        <Link to="/apps">Home</Link>
        <div className="a-head-drop">
          Probability
          <div className="a-head-drop-links">
            <Link to="/apps/coin-flip">Coin Flip</Link>
            <Link to="/apps/dice">Dice</Link>
            <Link to="/apps/higher-lower">Higher or Lower</Link>
            <Link to="/apps/wheel">Wheel Spinner</Link>
          </div>
        </div>
        <Link to="/apps/currency">Currency</Link>
        <Link to="/apps/bmi">BMI</Link>
        <div className="a-head-drop">
          Coding
          <div className="a-head-drop-links">
            <Link to="/apps/animation">Animations</Link>
            <Link to="/apps/binary">Binary Converter</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
