import React from "react";
import './heros.css';

// import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero xl:container md:container sm:container mt-10 pb-10">
      <div className="heroWrapper">
        <div className="heroHeading flex">
          <div className="heroHead">
            <h1 className="text-8xl font-semibold">Focus More in</h1>
            <h3 className="text-4xl tracking-wider font-light mt-1">
              Distractive Environment
            </h3>
            <p className="mt-20 text-xl">
              Eliminate your distraction with DoMoreNow and take control over
              your priorities
            </p>
          </div>
          <div className="heroCharacter flex ml-10" style={{marginTop:'10px'}} >
            <img
              src={require("../../images/character1.png")}
              className="character1" style={{marginTop:"50px"}}
            />
            <img
              src={require("../../images/character2.png")}
              className="character2" style={{marginBottom:"50px"}}
            />
          </div>
        </div>
        
        <div className="-mt-44 hBtn" style={{position:'absolute'}}>
          <Link to="/main" className="bg-slate-900 outline relative text-white inline p-4 rounded-2xl text-xl font-semibold -mt-10" style={{top:'-40px'}}>Focus Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
