
import React, { useState } from "react";
import Chart from "react-apexcharts";

const WeeklyStats = () => {
    const [state, setState] = useState({
        options: {
          colors: ["#E91E63", "#FF9800"],
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          },
        },
        series: [
          {
            name: "Number of Task Done",
            data: [30, 40, 45, 50, 49, 60, 70],
          },
          // {
          //   name: "People Died",
          //   data: [3, 60, 35, 80, 49, 70, 20, 81],
          // },
        ],
      });
  return (
    <div className="userStats">
    <h2 className="text-center text-lg"> Weekly Report</h2>
    <div className="flex">
      <div className="md">
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          width="500"
        />
      </div>
    </div>
  </div>
);
  
}

export default WeeklyStats
