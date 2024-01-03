import React from "react";

export default function index() {
  var min = 1;
  var max = 24;

  function rollCube() {
    var cube = document.getElementById("cube");
    var xRand = getRandom(max, min);
    var yRand = getRandom(max, min);

    cube.style.webkitTransform =
      "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
    cube.style.transform =
      "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";

    const results = document.getElementById("results");
    results.innerHTML = "";
    setTimeout(() => {
      results.innerHTML = `You rolled: ${getResult(xRand, yRand)}`;
    }, 3100);
  }

  function getRandom(max, min) {
    return (Math.floor(Math.random() * (max - min)) + min) * 90;
  }
  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  function getResult(rotX, rotY) {
    let countX = mod(rotX / 90, 4);
    if (countX === 1) {
      // Bottom face
      return 6;
    }
    if (countX === 3) {
      // Top face
      return 5;
    }
    // We add countX here to correctly offset in case it is a 180 degrees rotation
    // It can be 0 (no rotation) or 2 (180 degrees)
    let countY = mod(rotY / 90 + countX, 4);
    // Faces order
    return [1, 4, 2, 3][countY];
  }

  return (
    <div className="a-page">
      <div className="a-ctnr">
        <div className="a-title-ctnr">
          <span className="a-page-title">Dice</span>
        </div>
        <section className="dice-ctnr">
          <div id="cube" onClick={rollCube}>
            <div className="front">
              <span className="dot dot1"></span>
            </div>
            <div className="back">
              <span className="dot dot1"></span>
              <span className="dot dot2"></span>
            </div>
            <div className="right">
              <span className="dot dot1"></span>
              <span className="dot dot2"></span>
              <span className="dot dot3"></span>
            </div>
            <div className="left">
              <span className="dot dot1"></span>
              <span className="dot dot2"></span>
              <span className="dot dot3"></span>
              <span className="dot dot4"></span>
            </div>
            <div className="top">
              <span className="dot dot1"></span>
              <span className="dot dot2"></span>
              <span className="dot dot3"></span>
              <span className="dot dot4"></span>
              <span className="dot dot5"></span>
            </div>
            <div className="bottom">
              <span className="dot dot1"></span>
              <span className="dot dot2"></span>
              <span className="dot dot3"></span>
              <span className="dot dot4"></span>
              <span className="dot dot5"></span>
              <span className="dot dot6"></span>
            </div>
          </div>
        </section>
        <div className="results" id="results">
          {" "}
        </div>
      </div>
    </div>
  );
}
