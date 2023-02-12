import React from 'react';
import {BrowserRouters, Routes, Route} from 'react-router-dom';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
            <p className="title">Services</p>
            <li>
            <FactCheckOutlinedIcon className="icon" />
                <span>Todo List</span>
            </li>

            <li>
            <LocalFireDepartmentIcon className="icon" />
                <span>Streak</span>
            </li>

            <li>
            <HourglassEmptyIcon className="icon" />
                <span>Pomodoro</span>
            </li>

            <li>
            <AssessmentIcon className="icon" />
                <span>Reports</span>
            </li>
            <p className="title">Profiles</p>
            <li>
            <AccountCircleIcon className="icon" />
                <span>Profile</span>
            </li>

            <p className="title">Utilities</p>
            <li>
            <SettingsIcon className="icon" />
                <span>settings</span>
            </li>

            <li>
            <ExitToAppIcon className="icon" />
                <span>Logout
                </span>
            </li>


        </ul>
    </div>
  )
}

export default Sidebar
