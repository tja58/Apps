import React, { useState } from "react";
import useStateWithCallback from "use-state-with-callback";

export default function HigherLower() {
  const [lower, setLower] = useStateWithCallback(0, () => {
    guessLabel();
  });
  const [higher, setHigher] = useStateWithCallback(100, () => {
    guessLabel();
  });
  const [guess_, setGuess_] = useState(
    Math.floor((parseInt(lower) + parseInt(higher)) / 2)
  );

  const handleHigher = (e) => {
    setHigher(e.target.value);
  };
  const handleLower = (e) => {
    setLower(e.target.value);
  };

  const guessLabel = () => {
    const guess = Math.floor((parseInt(lower) + parseInt(higher)) / 2);

    setGuess_(guess);
  };

  async function guessed(guess) {
    const length = Math.floor(Math.random() * (9 - 5) + 5);
    const nums = Array.from(
      { length: length },
      () =>
        Math.floor(Math.random() * (parseInt(higher) - parseInt(lower))) +
        parseInt(lower)
    );
    console.log(nums);

    const g = document.getElementById("dis-res");
    g.classList.remove("display-random");
    g.classList.remove("display-res");

    function animate(e, flag) {
      if (flag) {
        g.innerHTML = e;
        g.classList.add("display-res");

        if (e < guess_) {
          if (guess === "lower") {
            g.classList.add("correct-guess");
            console.log("correct");
          } else {
            g.classList.add("incorrect-guess");
            console.log("incorrect");
          }
        } else {
          if (guess === "higher") {
            g.classList.add("correct-guess");
            console.log("correct");
          } else {
            console.log("incorrect");
            g.classList.add("incorrect-guess");
          }
        }
      } else {
        g.innerHTML = e;
        g.classList.add("display-random");
      }
    }

    const timer = (ms) => new Promise((res) => setTimeout(res, ms));
    for (let i = 0; i < length; i++) {
      const element = nums[i];
      g.innerHTML = " ";
      g.classList.remove("correct-guess");
      g.classList.remove("incorrect-guess");
      g.classList.remove("display-random");
      await timer(100);
      if (i === length - 1) {
        animate(element, true);
      } else {
        animate(element, false);
      }
      await timer(1600);
    }
  }

  return (
    <div className="a-page">
      <div className="a-ctnr">
        <div className="a-title-ctnr">
          <span className="a-page-title">Higher Or Lower</span>
        </div>
        <div className="a-hl-inputs">
          <div>
            <span>Lower Range</span>
            <input type="range" value={lower} onChange={handleLower} />
            <input type="number" value={lower} onChange={handleLower} />
          </div>
          <div>
            <span>Upper Range</span>
            <input type="range" value={higher} onChange={handleHigher} />
            <input type="number" value={higher} onChange={handleHigher} />
          </div>
        </div>
        <div className="a-hl-mid">Higher or Lower than {guess_}</div>
        <div className="a-hl-dis-ctnr">
          <div className="a-hl-dis" id="dis-res">
            {" "}
          </div>
        </div>
        <div className="a-hl-btns">
          <button className="a-hl-up" onClick={() => guessed("higher")}>
            Higher <i className="fa-solid fa-up-long"></i>
          </button>
          <button className="a-hl-down" onClick={() => guessed("lower")}>
            Lower <i className="fa-solid fa-down-long"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
