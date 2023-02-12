
import { useState } from "react";
import Chart from "react-apexcharts";

const DailyStats = () => {
    const [state, setState] = useState({
        options: {
          colors: ["#E91E63", "#FF9800", "#777777"],
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: ["Previous Day","Today"],
          },
        },
        series: [
          {
            name: "Task Paused",
            data: [30,20],
          },
          {
            name: "Task Completed",
            data: [6,15],
          },
          {
            name:"Streaks",
            data:[4,1],
          },
        ],
      });

  return (




    <div className="userStats">
    <div className="flex">
      <div className="md">
        <h2 className="text-center"> Daily Report</h2>
        <Chart
          options={state.options}
          series={state.series}
          type="area"
          width="500"
        />
      </div>
    </div>
  </div>
  )
}

export default DailyStats
