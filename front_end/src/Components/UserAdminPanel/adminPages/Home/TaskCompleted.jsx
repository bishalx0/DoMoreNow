import React from 'react'
import TaskCard from '../../components/TaskCard'

const TaskCompleted = () => {
  return (
    <div className="taskCompleted">
        <TaskCard  cardData={{title:'Task Completed', totle:'10', icon:""}}/>
    </div>
  )
}

export default TaskCompleted
