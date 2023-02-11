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
              {" "}
              DoMoreNow is an automated distraction eliminator that enables you
              to take control over your priorities once again. With DoMoreNow,
              you can finally be free to pursue your goals distraction-free.
            </p>
          </div>
          <div className="heroCharacter flex w-50 relative -ml-10">
            <img
              src={require("../../images/character1.png")}
              className="character1"
            />
            <img
              src={require("../../images/character2.png")}
              className="character2"
            />
          </div>
          <button className="z-50">
          <div className="btn font-semibold bg-black text-white  h-10 w-32 bottom-0 justify-start">
          <div className="rounded-lg  h-16">
            <Link to="/main" className="text-base ">
              Focus Now
            </Link>
          </div>
        </div>
        </button>

        </div>
      </div>
    </div>
  );
};

export default Hero;
