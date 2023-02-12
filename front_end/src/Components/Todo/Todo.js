import React,{useEffect, useState} from 'react';
import classes from './Todo.module.css';

const Todo = () => {
    const [todoTitle,updateTodoTitle] = useState('');
    const [hr,updateHr] = useState(0);
    const [min,updateMin] = useState(0);

    const [todoCollection,updateTodoCollection] = useState([]);

    const [focusTime,updateFocusTime] = useState(0);
    const [breakTime,updateBreakTime] = useState(0);
    const [buttonOnTodo,updateButtonOnTodo] = useState("play");

    const getAllDataInitially = async () => {
        try{
            const response = await fetch('http://127.0.0.1:8000/todoapi/todos/',{
            method : 'GET',
            })
            const data = await response.json();
            updateTodoCollection(data);
        }catch(error){
            console.log(error);
        }
    }

    const sendDataOnPlayClicked = async (id) => {
        try{
            const response = await fetch(`http://127.0.0.1:8000/todoapi/todos/${id}`,{
            method : 'PUT',
            body : JSON.stringify({
                work_time : focusTime,
                break_time : breakTime
            }),
            headers : {
                "Content-type" : "application/json",
            },
            })
            const data = await response.json();
            console.log("data for work time and break time is:",data);
        }catch(error){
            console.log(error);
        }
    }


    useEffect(() => {
        // console.log(todoTitle,hr,min);
        getAllDataInitially();
        console.log("Focus Time is : ",focusTime);
        console.log("Break Time is : ",breakTime);
    },[todoCollection])

    const sendData = async () => {
        try{
            const response = await fetch('http://127.0.0.1:8000/todoapi/todos/',{
            method : 'POST',
            body : JSON.stringify({
                todoTitle : todoTitle,
                hrs : hr,
                mins : min
            }),
            headers : {
                "Content-type" : "application/json",
            },
            })
            // const data = await response.json();
            // let currentTodoCollection = todoCollection;
            // currentTodoCollection.push(data);
            // updateTodoCollection(currentTodoCollection);
        }catch(error){
            console.log(error);
        }

    }

    const onSendDataClick = () => {
        if(todoTitle !== "" && hr !== 0 && min !== 0){
            sendData();
        }
    }

    // const getData = async () => {
    //     try{
    //         const response = await fetch('http://127.0.0.1:8000/todoapi/todos/',{
    //         method : 'GET',
    //         })
    //         const data = await response.json();
    //         let currentTodoCollection = todoCollection;
    //         currentTodoCollection.push(data);
    //         updateTodoCollection(currentTodoCollection);
    //     }catch(error){
    //         console.log(error);
    //     }
    // }

    // const onGetDataClick = () => {
    //     getData();
    // }

  return (
    <div className={classes.todoContainer}>
        {/* todo title */}
        <div className={classes.items}>
            <input type="text" placeholder="Enter the name of the task" className={classes.todoTitle} onChange={(el) => updateTodoTitle(el.target.value)} />
            {/* todo hour */}
            <input type="number" min="0" max="23" placeholder="0" className={classes.timeCount} onChange={(el) => updateHr(el.target.value)}  /><p className={classes.timeTitle}>Hrs</p>
            <input type="number" min="0" max="59" placeholder="0" className={classes.timeCount} onChange={(el) => updateMin(el.target.value)}  /><p className={classes.timeTitle}>Mins</p>
            <button onClick={onSendDataClick} className={classes.addNewTask}><img src={require('./plus.png')} className={classes.plusImage}/></button>
        </div>
        <div className={classes.todoItems}>
        {
            todoCollection.map((todo) => {
                return(
                        <div className={classes.todoItem} key={todo.id}>
                            {/* mark as done input */}
                            <input type="checkbox" className={classes.markDone} />
                            {/* todo title name */}
                            <h3 className={classes.todoItemTitle}>{todo.todoTitle}</h3>
                            {/* focus timer set */}
                            <div className={classes.focusTimeBox}>
                                <p style={{marginRight:'5px'}}>Focus:</p>
                                <input type="number" className={classes.focusTimeSet} min="20" max="45" />
                                <p>Mins</p>
                            </div>
                            {/* break timer set */}
                            <div className={classes.breakTimeBox}>
                                <p style={{marginRight:'5px'}}>Break:</p>
                                <input type="number" className={classes.breakTimeSet} min="5" max="15" />
                                <p>Mins</p>
                            </div>
                            {/* start pomodoro */}
                            <img src={require('../../images/play-buttton.png')} className={classes.todoStart} />
                            {/*<img onClick={() => updateButtonOnTodo("play")} src={require('../../images/pause.png')} className={classes.todoStart} /> *}
                            {/* edit todo */}
                            <p className={classes.editLink}>Edit</p>
                            {/* delete todo item */}
                            <p className={classes.deleteLink}>Delete</p>
                        </div>
                );
            })
        }
        </div>
    </div>
  )
}

export default Todo;
