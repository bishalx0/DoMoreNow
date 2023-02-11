import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Header = () => {
  return (
    <div className="header flex justify-between px-5 text-lg">
        <div className="logo bg-red-700 text-xl py-5 justify-start">
            <h1 className="logoTitle">Admin Dashboard</h1>
        </div>
        {/*<div className="justify-end">
            <ul>
                <li>
                    <AccountCircleOutlinedIcon />
                </li>
            </ul>
  </div>*/}
    </div>
  )
}

export default Header
