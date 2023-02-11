
import React from "react";


// import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero xl:container md:container sm:container mt-10">
      <div className="heroWrapper">
        <div className="heroHeading flex mt-10 absolute">
          <div>
            <h1 className="text-8xl font-semibold">Focus More in</h1>
            <h3 className="text-4xl tracking-wider font-light -mt-5">
              Distractive Environment
            </h3>
            <p className="mt-20">
              Eliminate your distraction with DoMoreNow and take control over
              your priorities
              <br />
              <div className="border inline bg-primary rounded text-base" >
              <button>
              <Link to="/main">Focus Now</Link>
            </button>
              </div>
            </p>
          </div>
          <div className="heroCharacter flex w-50 relative ml-10">
            <img
              src={require("../../images/character1.png")}
              className="character1"
            />
            <img
              src={require("../../images/character2.png")}
              className="character2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
