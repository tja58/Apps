import React, { useEffect } from "react";

export default function Spinner() {
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  async function results(randInt) {
    const elements = document.getElementsByClassName("slice");
    const numberOfSlices = elements.length;

    let res = randInt;
    while (res > 0) {
      res -= numberOfSlices;
    }
    res = Math.abs(res) + 1;
    await timer(5100);
    console.log(res);
    document.getElementById("wheel-res").innerHTML = res;
  }

  let count = 0;
  let res = 0;
  function spinWheel() {
    const dial = document.querySelector(".dial");
    dial.classList.add("spinning");

    const elements = document.getElementsByClassName("slice");
    const randInt = Math.ceil(Math.random() * (60 - 30) + 30);
    const deg = 360 / elements.length;
    const spin = randInt * deg;

    dial.style.transform = "rotate(" + (spin + count) + "deg)";

    const ctnr = document.querySelector(".wheel-content");
    ctnr.classList.add("activated");
    count += spin;
    res += randInt;
    results(res);
  }

  useEffect(() => {
    const elements = document.getElementsByClassName("slice");
    const numberOfSlices = elements.length;

    const deg = 360 / elements.length;
    let count = 0;
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];

      // Set Rotation
      const degrees = deg * count;
      element.style.transform = "rotate(" + degrees + "deg)";
      element.style.height = ((700 / 2) * 6.283185307) / elements.length;

      // Set css Properties
      const diameter = 700;
      const rad = diameter / 2;
      const cir = Math.PI * 2 * rad;

      const sliceHeight = cir / numberOfSlices;
      const sliceOffset = sliceHeight / 2;
      const borderWidth = cir / (numberOfSlices * 2);

      document.documentElement.style.setProperty("--numSlices", numberOfSlices);
      document.documentElement.style.setProperty(
        "--sliceHeight",
        sliceHeight + "px"
      );
      document.documentElement.style.setProperty(
        "--sliceOffset",
        sliceOffset + "px"
      );
      document.documentElement.style.setProperty(
        "--border-width",
        borderWidth + 4 + "px"
      );

      count += 1;
    }
  });
  return (
    <div className="a-page">
      <div className="a-ctnr">
        <div className="a-title-ctnr">
          <span className="a-page-title">Wheel Spinner</span>
        </div>
        <div className="wheel-ctnr">
          <div className="board">
            <div className="spinner-table" id="spinner">
              <div className="dial">
                <div className="slice">
                  <div className="label">1</div>
                </div>
                <div className="slice">
                  <div className="label">2</div>
                </div>
                <div className="slice">
                  <div className="label">3</div>
                </div>
                <div className="slice">
                  <div className="label">4</div>
                </div>
                <div className="slice">
                  <div className="label">5</div>
                </div>
                <div className="slice">
                  <div className="label">6</div>
                </div>
                <div className="slice">
                  <div className="label">7</div>
                </div>
                <div className="slice">
                  <div className="label">8</div>
                </div>
                <div className="slice">
                  <div className="label">9</div>
                </div>
                <div className="slice">
                  <div className="label">10</div>
                </div>
                <div className="slice">
                  <div className="label">11</div>
                </div>
                <div className="slice">
                  <div className="label">12</div>
                </div>
                <div className="slice">
                  <div className="label">13</div>
                </div>
                <div className="slice">
                  <div className="label">14</div>
                </div>
                <div className="slice">
                  <div className="label">15</div>
                </div>
                <div className="slice">
                  <div className="label">16</div>
                </div>
              </div>
            </div>
            <div className="arrow">
              <span className="pointer"></span>
            </div>
          </div>

          <div className="wheel-content">
            <div className="wheel-res-title">Result</div>
            <div className="wheel-res" id="wheel-res">
              -
            </div>

            <div className="pre">
              <button id="spin" onClick={spinWheel}>
                Spin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
