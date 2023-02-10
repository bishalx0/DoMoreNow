import React from 'react'
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
        <div className="heroWrapper">

                <div className="heroHeading">
                    <h1>Focus more in distractive Environment</h1>
                    <p> Student+ is an automated distraction eliminator that enables you to take control over your priorities once again. With Student+, you can finally be free to pursue your goals distraction-free.</p>
                </div>
                <div className="heroCharacter">
                    <img src={require('../../images/character1.png')} className="character1"/>
                    <img src={require('../../images/character2.png')} className="character2"/>
                </div>


           
        </div>
        <div className="btn">
        <button src="#">Focus Now</button>
        </div>
      
    </div>
  )
}

export default Hero
