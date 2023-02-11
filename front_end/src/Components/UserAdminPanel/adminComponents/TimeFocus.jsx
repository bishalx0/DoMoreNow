import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TaskCard from '../adminComponents/TaskCard';

const TimeFocus = () => {
  return (
    <div className="timefocus">
    <TaskCard cardData={{title:"Focused Hour", total:'10', icon:"PsychologySharpIcon"}} />
        {/*<div className="">
            <h2 className="text-white"> Time Focus </h2>
            <p>Stay away from distraction</p>
            <KeyboardArrowUpIcon  className="flex justify-end"/>
            
  </div>*/}
    </div>
  )
}

export default TimeFocus
