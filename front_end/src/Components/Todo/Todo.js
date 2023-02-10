import React,{useEffect, useState} from 'react';
import classes from './Todo.module.css';

const Todo = () => {
    const [todoTitle,updateTodoTitle] = useState('');
    const [hr,updateHr] = useState(0);
    const [min,updateMin] = useState(0);

    useEffect(() => {
        console.log(todoTitle,hr,min);
    })

    const sendData = async () => {
        try{
            const response = await fetch('http://localhost:8000/',{
            method : 'POST',
            body : JSON.stringify({
                todoTitle : todoTitle,
                hrs : hr,
                mins : min
            }),
            headers : {
                "Content-type" : "application/json , charset=UTF-8",
            },
            })
            const data = await response.json();
        }catch(error){
            console.log(error);
        }

    }

    const onSendDataClick = () => {
        if(todoTitle !== "" && hr !== 0 && min !== 0){
            sendData();
        }
    }

  return (
    <div className={classes.todoContainer}>
        {/* todo title */}
        <div className={classes.items}>
            <input type="text" placeholder="Enter the name of the task" className={classes.todoTitle} onChange={(el) => updateTodoTitle(el.target.value)} />
            {/* todo hour */}
            <input type="number" min="0" max="23" placeholder="0" className={classes.timeCount} onChange={(el) => updateHr(el.target.value)}  /><p className={classes.timeTitle}>Hrs</p>
            <input type="number" min="0" max="59" placeholder="0" className={classes.timeCount} onChange={(el) => updateMin(el.target.value)}  /><p className={classes.timeTitle}>Mins</p>
            <button onClick={onSendDataClick} className={classes.addNewTask}><img src=' plus.png' /></button>
        </div>
    </div>
  )
}

export default Todo;
