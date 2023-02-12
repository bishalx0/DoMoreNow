import React from 'react'
import './daystreak.css';
import TaskCard from '../../adminComponents/TaskCard';

const DayStreak = ({number}) => {
  return (
    <div className="dayStreak ">
      <TaskCard cardData={{title:"Day streak", total:{number}, icon:"LocalFireDepartmentSharpIcon"}}/>
{    /*
        <h1 className="title">Day Streak</h1>
        <p className="streakNum">4</p>
<LocalFireDepartmentSharpIcon  className="streakIcon"/> */}
    </div>
  )
}

export default DayStreak
