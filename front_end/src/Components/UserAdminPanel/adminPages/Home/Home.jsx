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
      <Header />
      <hr />
      <div className="userInfo"></div>
      <div className="homeContainer px-5"> 
      <h2 className="text-xl">Activities</h2>
        <div className="contentContainer flex justify-between gap-20 pt-10">
            <DayStreak className="text-xl" />
            <TimeFocus />
            <TaskAdded />
            <TaskCompleteD />
        </div>
        <div className="report bg-primary pt-10 px-5 mt-10">
        <h1>Usage Statistics</h1>
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
