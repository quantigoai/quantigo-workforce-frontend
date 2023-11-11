import React, {useEffect, useState} from "react";
import {Line} from "react-chartjs-2";
import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import {useSelector} from "react-redux";
import {weeklyConver} from "../../../../helper/weeklyConver";
import {capitalizeAllwordAndSlic} from "../../../../helper/capitalizeAllwordAndSlic";

ChartJS.register(Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler);

const LineChartExple = ({ loading }) => {
  const { hourlyData } = useSelector((state) => state.dashboard);
  const [customData, setCustomData] = useState({});
  const [isDataUpdate, setIsDataUpdate] = React.useState(true);

  useEffect(() => {
    const takenJobsData = [];
    if (!loading) {
      const labels = Object.keys(hourlyData?.hourJobs);
      const finalLabel = [];

      labels.forEach((label) => {
        takenJobsData.push(hourlyData.hourJobs[label]);
        const { weekly } = weeklyConver(label);

        const weeklydate = capitalizeAllwordAndSlic(weekly[0]);
        return finalLabel.push(`${weeklydate} ${weekly[2]} ${weekly[3]}`);
      });

      const data = {
        labels: finalLabel.reverse(),
        // labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "Oct", "Nov", "Dec"],

        datasets: [
          {
            // label: "",
            data: [...takenJobsData.reverse()],
            // data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 9, 58, 42, 51, 82, 31, 59, 61, 73, 9, 58],
            fill: true,
            // backgroundColor: "rgba(51, 153, 255,0.1)",
            // backgroundColor: "linear-gradient(to right, #ff0000, #00ff00)",
            tension: 0.6,
            borderColor: "#266AED",
            pointRadius: 0,
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 300);
              gradient.addColorStop(0, "rgba(51, 153, 255,0.1)");
              gradient.addColorStop(0.5, "rgba(51, 153, 255,0.1)");
              gradient.addColorStop(1, "rgba(250,174,50,0)");
              return gradient;
            },
          },
          // {
          //   label: "Active job",
          //   data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58, 10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 61, 73],
          //   // data: [...takenJobsData.reverse()],
          //   // data: [0, 1, 1, 2, 3, 4, 5],
          //   borderColor: "#3399FF",
          //   // fill: true,
          //   // backgroundColor: "yellow",
          //   // tension: 0.5,
          //   fill: true,
          //   backgroundColor: "#DDE8FB",
          //   tension: 0.6,
          // },
        ],
      };

      setCustomData(data);
      setIsDataUpdate(false);
    }
  }, [loading]);

  const [data, setData] = useState({
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "Oct", "Nov", "Dec"],
    datasets: [
      {
        // label: "",
        data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 9, 58],
        fill: true,
        // backgroundColor: "rgba(51, 153, 255,0.1)",
        // backgroundColor: "linear-gradient(to right, #ff0000, #00ff00)",
        tension: 0.6,
        borderColor: "#266AED",
        pointRadius: 0,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(51, 153, 255,0.1)");
          gradient.addColorStop(0.5, "rgba(51, 153, 255,0.1)");
          gradient.addColorStop(1, "rgba(250,174,50,0)");
          return gradient;
        },
      },
    ],
  });
  const options = {
    plugins: {
      legend: false,
      datalabels: {
        display: false,

        // backgroundColor: "#404040",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#7D89A3", // Change label text color here
        },
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#7D89A3", // Change label text color here
        },
        beginAtZero: true,
        display: true,
        border: {
          display: false,
        },
      },
      // y: {
      //   min: 2,
      //   max: 10,
      //   ticks: {
      //     stepSize: 2,
      //     callback: (value) => value + "K",
      //   },
      // },
    },
  };
  return (
    <>
      {!isDataUpdate && (
        <Line options={options} data={customData} height={153}>
          Hello
        </Line>
      )}
    </>
  );
};

export default LineChartExple;
