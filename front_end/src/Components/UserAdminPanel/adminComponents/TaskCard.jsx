import React from 'react'
import DayStreak from '../adminPages/DayStreak/DayStreak';
import LocalFireDepartmentSharpIcon from '@mui/icons-material/LocalFireDepartmentSharp';
import PsychologySharpIcon from '@mui/icons-material/PsychologySharp';
import PostAddSharpIcon from '@mui/icons-material/PostAddSharp';
import AddTaskIcon from '@mui/icons-material/AddTask';
const TaskCard = (props) => {
//  console.log(props.cardData.title);
//title,total and iconName
    
  return (
    <div className="">
    <div className="flex justify-center">
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <h2 className="text-gray-900 text-xl leading-tight font-medium mb-2">Day streak</h2>
      <p className="text-gray-700 text-base mb-4">
        10
      </p>
      {/*pass the icon here*/}
      <p className="taskIcon"><AddTaskIcon/></p>
    </div>
  </div>
    </div>
  )
}

export default TaskCard
