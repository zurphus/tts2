import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa6";
import dexImg from './dexscreener.png'
import './App.css';

function App() {
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAnimation(true)
    }, 1000)
  }, [])

  return (
    <main>
      <div className="title__wrap">
        <h1 className={`${animation ? 'title-active' : ''} title`}>TO THE SUN V2</h1>
      </div>
      <p className='welcome'>WELCOME TO TTS2.0!</p>
      <div className='icon__wrapper'>
        <a href="https://www.instagram.com/to_the_sun_v2/" target='blank'>
          <IoLogoInstagram className='icon'/>
        </a>
        <a href="https://twitter.com/ToTheSunV2" target='blank'>
          <IoLogoTwitter className='icon'/>
        </a>
        <a href="https://t.me/+ozyyK2fXv0kzOWQx" target='blank'>
          <FaTelegram className='icon'/>
        </a>
        <a href="https://dexscreener.com/solana/4QWvNnFrDPgdXbcoCkdfb1JbXWefLkCYmnJXiHS9bKhg" target='blank'>
          <img src={dexImg} alt="dexscreener icon" className='dexscreener'/>
        </a>
      </div>
      <button className='buy__button'>BUY</button>
      <Spline scene="https://prod.spline.design/oddaRVMOdOKywdEB/scene.splinecode" />
      <p className='description'>JOIN OUR RESILIENT CRYPTO PROJECT BORN<br />FROM THE ASHES OF A RUG PULL SCAM</p>
      <p className='description'>WE'RE DEDICATED TO RESTORING FAITH IN CRYPTO<br />INVESTMENTS AFTER THE BETRAYAL OF TTS 1.0</p>
      <p className='description'>GET READY FOR A NEW ERA OF TRANSPARENCY AND<br />SECURITY AS WE LAUNCH OUR OWN COIN</p>
    </main>
  )
}

export default App;
