import React from 'react'
import TaskCard from '../adminComponents/TaskCard';

const TaskAdded = () => {
  return (
    <div className="taskAdded">
    
    <TaskCard cardData={{title:"Task Added", total:'5', icon:"PostAddSharpIcon"}}/>
    </div>
  )
}

export default TaskAdded
