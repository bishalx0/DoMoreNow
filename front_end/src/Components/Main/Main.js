import React, { useEffect, useState } from "react";
import classes from "./Main.module.css";
import NavBarItem from "../NavBarItem/NavBarItem";
import Todo from "../Todo/Todo";
import Dashboard from "../Dashboard/Dashboard";
import SiteDisabler from "../SiteDisabler/SiteDisabler";
import Pomodoro from "../Pomodoro/Pomodoro";
import RoutinePlus from "../RoutinePlus/RoutinePlus";
import AddTaskIcon from '@mui/icons-material/AddTask';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import PublicOffIcon from '@mui/icons-material/PublicOff';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import Image from "rc-image";
import Header from "../UserAdminPanel/adminComponents/Header";
import Logo from "../UserAdminPanel/adminComponents/Logo";

const Main = () => {
    const [itemClicked,updateItemClicked] = useState("pomodoro");
    let component = <div className="pomodoroCollection">
    <Pomodoro />
    {/* Task Title */}
    <h2 className={classes.taskTitle}>Task Name</h2>
    <Todo />
</div>
    switch(itemClicked){
        case 'dashboard':
            component = <Dashboard />
            break;
        case 'disabler':
            component = <SiteDisabler />
            break;
        case 'todo':
            component = <Todo />
            break;
        case 'pomodoro':
            component = <div className="pomodoroCollection">
                    <Pomodoro />
                    {/* Task Title */}
                    <h2 className={classes.taskTitle}>Task Name</h2>
                    <Todo />
                </div>
            break;
        case 'routineplus':
            component = <RoutinePlus />
            break;
    }
    useEffect(() => {
        console.log(itemClicked);
    })
    return (
      <>    
        {/** <div className="userDashboardHeader lg:container" style={{borderBottom:'1px solid #222'}}>
                <div className="flex text-center">
                <Logo  className="justify-items-start"/>
                      <Header className="justify-items-end text-center "/> 
                </div>
        </div>*/}
        
        <div className={classes.main}>
        
            {/* side navbar vertical */}
            <div className={classes.verticalNavbar}>
                <div className={classes.verticalNavbarItems}><StackedLineChartIcon className="navIcon" style={{fontSize:'2rem',marginRight:'20px'}}/><NavBarItem item="Statistics" onClick={() => {updateItemClicked('dashboard')}} /></div>
                <div className={classes.verticalNavbarItems}><PublicOffIcon className="navIcon" style={{fontSize:'2rem',marginRight:'20px'}} /><NavBarItem item="Site Disabler" onClick={() => updateItemClicked('disabler')} /></div>
                {/* <div className={classes.verticalNavbarItems}><AddTaskIcon className="navIcon" style={{fontSize:'2rem',marginRight:'20px'}} /><NavBarItem item="Todo" onClick={() => updateItemClicked('todo')} /></div> */}
                <div className={classes.verticalNavbarItems}><PendingActionsIcon className="navIcon" style={{fontSize:'2rem',marginRight:'20px'}} /><NavBarItem item="Pomodoro" onClick={() => updateItemClicked('pomodoro')}/></div>
                <div className={classes.verticalNavbarItems}><AddTaskIcon className="navIcon" style={{fontSize:'2rem',marginRight:'20px'}} /><NavBarItem item="Routine+" onClick={() => updateItemClicked('routineplus')} /></div>
            </div>
            <div className={classes.verticalComponents}>
                {component}
            </div>
      </div>

    </>
  );
};

export default Main;
