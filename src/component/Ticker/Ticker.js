import React, { useEffect, useState, useRef } from 'react'
import './Ticker.scss'
const Ticker = ({text}) => {

  const pRef = useRef()

  const [pEle, setPele] = useState(pRef.current)

  
  let p = pRef.current
  // wrapper.style.width = `${max}px`

  useEffect(()=>{
    if(pEle) {
    initateTicerkTape()
    }
    else {
      setPele(pRef.current)
    }
  }, [pEle])


  function initateTicerkTape() {
    
    const wrapper = document.getElementById('wrapper')
    let w = 0, max = window.innerWidth*2


    const p = pEle
    console.log(p.clientWidth)
    // wrapper.style.width = `${max}px`

    
    // do {
      for(let i = 0; i <3; i++) {
      const newP = document.createElement('p')
      newP.innerHTML = p.innerHTML
      // newP.style.width = `${p.clientWidth}px`
      wrapper.appendChild(newP)
//       
//       // console.log(wrapper.clientWidth)
       w = p.clientWidth * (i+1)
  }
w= w + p.clientWidth
wrapper.style.width = `${w}px`
console.log(w)

wrapper.classList.add('animate')

wrapper.style.animation = `
@keyframes move {
  0% {
      transform: translateX(0);
  }

  100% {
      transform: translateX(calc(-50%  + 524px));
  }
}
`


// 
//        console.log(w)
    // } while (w < max + p.clientWidth);


  }

  
  return (
    <div id="ticker_tape">
      <div id="wrapper">
        <p ref={pRef}>{text}</p>
      </div>
    </div>
  )
}

export default Ticker