import React from 'react';
import classes from './App.module.css';
import { Link } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';

const App = () => {
  return(
    <div class={classes.appContainer}>
      <div className={classes.navbarContainer}>
        <div className={classes.logoContainer}>
          <img src={require('./images/logo.jpg')} className={classes.logo}/>
        </div>
        <NavBar />
        
      </div>
      <Hero />
    </div>
  );
}

export default App;