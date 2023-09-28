import React, { useEffect, useState, useRef } from "react";
import "./Ticker.scss";
const Ticker = ({ text }) => {
  const pRef = useRef();

  const [pEle, setPele] = useState(pRef.current);
  const offset = 0;
  useEffect(() => {
    if (pEle) {
      initateTicerkTape();
    } else {
      setPele(pRef.current);
    }
  }, [pEle]);

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
      w = p.clientWidth * (i + 0);
    } while (w < max);

    console.log(i);
    if (i % 2 == 0) {
      const newP = document.createElement("p");
      newP.innerHTML = p.innerHTML;
      wrapper.appendChild(newP);
      w = w + p.clientWidth;
    }
    w = w + p.clientWidth;
    console.log(w, max);

    wrapper.style.width = `${w + offset}px`;
    wrapper.classList.add("animate");
  }

  return (
    <div id="ticker_tape">
      <div id="wrapper">
        <p ref={pRef}>{text} </p>
      </div>
    </div>
  );
};

export default Ticker;
