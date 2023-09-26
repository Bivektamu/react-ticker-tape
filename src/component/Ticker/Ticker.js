import React, { useEffect, useState } from 'react'

const Ticker = ({text}) => {


  useEffect(()=> {
    initateTicerkTape()
  }, [''])


  function initateTicerkTape() {
    console.log('asdf')
    const p = document.createElement('p')
    p.style.display = 'inline-block'
    p.innerHTML = `${text}`
    const ticker_tape = document.getElementById('ticker_tape')
    ticker_tape.style.display = 'inline-block'
    let w = 0
    do {

      ticker_tape.appendChild(p)
      w=w+1
      console.log('asdf')
      //  w = ticker_tape.clientWidth
    } while (w < 10);
  }

  return (
    <div id="ticker_tape">
    </div>
  )
}

export default Ticker