import React, { useEffect, useState, useRef } from "react";
import "./Ticker.scss";
const Ticker = ({ text, timer, bg, color, fix }) => {
  const pRef = useRef();

  const [pEle, setPele] = useState(pRef.current);
  const [wD, setWd] = useState(null);
  const time = timer || 10;
  const bgC = bg || "blueviolet";
  const colorC = color || "white";
  useEffect(() => {
    const pTags = document.querySelectorAll("#wrapper > p");
    if (pEle && wD && pTags.length == 1) {
      initateTicerkTape();
    } else {
      setPele(pRef.current);
    }
  }, [pEle, wD]);

  function initateTicerkTape() {
    const wrapper = document.getElementById("wrapper");
    let w = 0,
      max = window.innerWidth * 2;

    const p = pEle;

    let i = 0;
    do {
      const newP = document.createElement("p");
      newP.innerHTML = p.innerHTML;
      wrapper.appendChild(newP);
      i++;
      console.log(wD);
      w = wD * (i + 0);
    } while (w < max);

    if (i % 2 == 0) {
      const newP = document.createElement("p");
      newP.innerHTML = p.innerHTML;
      wrapper.appendChild(newP);
      w = w + wD;
    }
    w = w + wD;

    wrapper.style.width = `${w}px`;
    wrapper.style.height = `${p.clientHeight + 10}px`;
    wrapper.style.animation = `move ${time}s linear infinite`;
    wrapper.style.background = bgC;
    wrapper.style.color = colorC;
    console.log();
    if (fix) {
      let parent = wrapper.parentElement;
      parent.style.position = "fixed";
      switch (fix) {
        case "top":
          parent.style.top = "0px";
          break;
        case "bottom":
          parent.style.bottom = "0px";
          break;

        case "left":
          parent.style.left = "0px";
          parent.style.bottom = `-${wrapper.clientHeight}px`;
          parent.style.transform = "rotate(-90deg)";
          parent.style.transformOrigin = "left top";
          break;

        case "right":
          parent.style.bottom = `-${wrapper.clientHeight}px`;
          parent.style.left = `calc(100vw - ${wrapper.clientHeight}px)`;
          parent.style.transform = "rotate(-90deg)";
          parent.style.transformOrigin = "left top";
          break;
        default:
          break;
      }
    }
  }

  window.onload = function () {
      setWd(pEle.clientWidth);
  };

  return (
    <div id="ticker_tape">
      <div id="wrapper">
        <p ref={pRef}>{text} </p>
      </div>
    </div>
  );
};

export default Ticker;
