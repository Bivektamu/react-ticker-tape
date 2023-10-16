import React, { useEffect, useState, useRef } from "react";
import "./Ticker.scss";
const Ticker = ({ text, animationSpeed, bg, color, fix, id }) => {
  const [wD, setWd] = useState(null);
  const time = animationSpeed || 10;
  const bgC = bg || "blueviolet";
  const colorC = color || "white";
  const wRef = useRef(null);
  
  useEffect(()=> {
    if(wRef)   {
      const p = wRef.current.querySelector('p')
      setWd(p.getBoundingClientRect().width);
    }
  },[wRef])

  useEffect(() => {
    if(wRef && wD) {
      initateTicerkTape()
    }
  }, [wRef, wD]);

  function initateTicerkTape() {
    const wrapper = wRef.current;
    let w = 0,
      max = window.innerWidth * 2;

      const p = wrapper.querySelector('p')

    let i = 0;
    do {
      const newP = document.createElement("p");
      newP.innerHTML = p.innerHTML;
      wrapper.appendChild(newP);
      i++;
      w = wD * (i + 0);
    } while (w < max);

    if (i % 2 == 0) {
      const newP = document.createElement("p");
      newP.innerHTML = p.innerHTML;
      wrapper.appendChild(newP);
      w = w + wD;
    }
    w = w + wD + 2;

    wrapper.style.width = `${w}px`;
    wrapper.style.height = `${p.clientHeight + 10}px`;
    wrapper.style.animation = `move ${time}s linear infinite`;
    wrapper.style.background = bgC;
    wrapper.style.color = colorC;

    if (fix) {
      let parent = wrapper.parentElement;
      parent.style.position = "fixed";
      switch (fix) {
        case "top":
          parent.style.left = "0px";
          parent.style.top = "0px";
          break;
        case "bottom":
          parent.style.left = "0px";
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
    if(wRef)   {
      const p = wRef.current.querySelector('p')
      setWd(p.getBoundingClientRect().width);
    }
  };

  return (
    <div className="ticker_tape">
      <div ref={wRef} className="wrapper">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Ticker;
