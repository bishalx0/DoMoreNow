import React from "react";
import TaskAdded from "../../adminComponents/TaskAdded";
import TimeFocus from "../../adminComponents/TimeFocus";
import DayStreak from "../../adminPages/DayStreak/DayStreak";
// import Sidebar from "../Sidebar/Sidebar";
import Header from "../../adminComponents/Header";

import TaskCompleteD from "../../adminComponents/TaskCompleted";
import WeeklyStats from "../Stats/WeeklyStats";
import DailyStats from "../Stats/DailyStats";
import Chart from "react-apexcharts";

const home = () => {
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
            <DayStreak className="text-xl" />
            <TimeFocus />
            <TaskAdded />
            <TaskCompleteD />
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

export default home;
