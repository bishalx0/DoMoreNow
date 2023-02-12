import React,{useState,useEffect} from "react";
import TaskAdded from "../../adminComponents/TaskAdded";
import TimeFocus from "../../adminComponents/TimeFocus";
import DayStreak from "../../adminPages/DayStreak/DayStreak";
// import Sidebar from "../Sidebar/Sidebar";
import Header from "../../adminComponents/Header";

import TaskCompleteD from "../../adminComponents/TaskCompleted";
import WeeklyStats from "../Stats/WeeklyStats";
import DailyStats from "../Stats/DailyStats";
import Chart from "react-apexcharts";




const Home = () => {

    // api call to fetch data from db
    //     const getData = async () => {
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
    //     const result=getData();
    //     console.log(result);
        
    // }

    const [data,updateData] = useState({});

    useEffect(() => {
      getData();
    })

    const getData = async () => {
      try{
        const response = await fetch('http://127.0.0.1:8000/todoapi/todos/',{
        method : 'GET',
        })
        const datas = await response.json();
        updateData(datas);
        console.log(datas);
    }catch(error){
        console.log(error);
    }
    }


  return (
    <div className="home">
      <div className="flex pl-5">
      <h1 className="text-center text-2xl font-semibold justify-start">User Statistics</h1>
      </div>
      <hr />
      <div className="userInfo"></div>
      <div className="homeContainer px-5"> 
      <h2 className="text-2xl font-bold">Activities</h2>
        <div className="contentContainer flex justify-between gap-20 pt-10">
            <DayStreak className="text-xl" number={data.streak}/>
            <TimeFocus number={`${data.hours}hrs, ${data.minutes}mins`} />
            <TaskAdded number={data.added_task}/>
            <TaskCompleteD number={data.completed_task}/>
        </div>
        <div className="report bg-primary pt-10 px-5 mt-10">
        <h1 className="text-2xl font-bold">Usage Statistics</h1>
        <div className="flex">

        <DailyStats />
        <WeeklyStats />
        </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
