import React from 'react'

const Logo = () => {
  return (
    <div className="justify-start">
    <img src={require('../../../images/logo-transparent.png')} alt="WeDoMore" className="logo" style={{height:'90px',width:'90px',borderBottom:'1px solid #d0caca',paddingBottom:'10px'}}/>
    </div>
  )
}

export default Logo
