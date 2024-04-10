import React from 'react'
import './hero.css' 
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

export const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt=""/>
                </div>
                <p>collection</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                Latest Collection
                <img src={arrow_icon} alt=""/>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt=""/>
        </div>
    </div>
  )
}

export default Hero
