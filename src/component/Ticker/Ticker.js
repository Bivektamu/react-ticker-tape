import React, { useEffect, useState } from 'react'
import './Ticker.scss'
const Ticker = ({text}) => {


  useEffect(()=> {
    initateTicerkTape()
  }, [text])


  function initateTicerkTape() {

    const words = text.split(' ')
    console.log(words)
    
    const wrapper = document.getElementById('wrapper')
    let w = 0, max = window.innerWidth*2
    // wrapper.style.width = `${max}px`

    do {
      const p = document.querySelector('#wrapper > p')
      const newP = document.createElement('p')
      newP.innerHTML = p.innerHTML + ' '
      // newP.style.width = `${p.clientWidth}px`
      wrapper.appendChild(newP)
      console.log(p.clientWidth)
//       
//       // console.log(wrapper.clientWidth)
       w = w + p.clientWidth
// 
//        console.log(w)
    } while (w < max);

  console.log('max', max)


  }

  return (
    <div id="ticker_tape">
      <div id="wrapper">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Ticker