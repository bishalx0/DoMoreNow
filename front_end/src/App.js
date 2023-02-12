
import react from 'react';
import {Link} from 'react-router-dom';
import Hero from '../src/Components/Hero/Hero'

const App = () => {
  return (
    <>
    {/**       <div class={classes.appContainer}>
        <div className={classes.navbarContainer}>
          <div className={classes.logoContainer}>
            <img
              src={require("./images/logo-transparent.png")}
              className={classes.logo}
            />
          </div>
          <NavBar /> 
        </div>

        <Hero />
      </div>  */}



      <div className="bg-primary">
      <div className="navWrap">
      <div className="lg:container">
        <div className="logo w-32">
          <img src={require('../src/images/logo.jpg')}  style={{borderRadius:"50%"}}/>
        </div>
      </div>
    </div>
    <Hero/>
      </div>

    </>
  );
};

export default App;
