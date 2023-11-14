import {ArcElement, Chart as ChartJS, Legend, Tooltip} from "chart.js";
import "chartjs-plugin-datalabels";
import React, {useEffect, useState} from "react";
import {Doughnut} from "react-chartjs-2";
import {useSelector} from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);
const PirChartForProjectDrawer = () => {
  const { activeJobs, takenJobs, totalCountData } = useSelector((state) => state.dashboard);
  const { isLightTheme } = useSelector((state) => state.theme);
  const [labelFontSize, setLabelFontSize] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setLabelFontSize(8);
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
        setLabelFontSize(8);
      } else if (window.innerWidth > 1024 && window.innerWidth <= 1440) {
        setLabelFontSize(10);
      } else if (window.innerWidth >= 1440 && window.innerWidth < 1920) {
        setLabelFontSize(12);
      } else {
        setLabelFontSize(14);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const data = {
    labels: ["Total Project", "Ongoing Project"],
    datasets: [
      {
        label: "",
        data: [totalCountData.totalProjectDrawers, totalCountData.totalOngoingProjectDrawers],
        // data: [],
        // data: [10, 10],

        // data: [0, 0],
        // backgroundColor: [isLightTheme ? "#2E58FF" : "#2E58FF", isLightTheme ? "#B6C9F0" : "##B6C9F0"],
        backgroundColor: ["#2E58FF", "#B6C9F0"],
        // borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 2,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    responsive: true,

    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 10,
          boxHeight: 7,
          font: {
            size: labelFontSize,
          },
        },
      },
      title: {
        display: true,
        text: "Projects",
        align: "start",
        font: {
          size: 14,
        },
        color: isLightTheme ? "#091E42" : "white",
        // padding: 20,
        padding: {
          top: 25,
          left: 30,
          // bottom: 30,
        },
      },
      datalabels: {
        display: true,
        formatter: (value, ctx) => {
          const dataset = ctx.chart.data.datasets[0];
          const total = dataset.data.reduce((prev, curr) => prev + curr);
          const percentage = ((value / total) * 100).toFixed(2);
          return `${percentage}%`;
        },
        color: (context) => {
          const dataset = context.dataset.backgroundColor;
          const value = dataset[context.dataIndex];
          // const value = 10;
          return value === "#2E58FF" ? "#FFFFFF" : "#3C4D6B"; // Dynamic color based on value
        },
      },
    },
    radius: "80%",
  };

  return (
    <>
      <Doughnut options={options} data={data} />
      {/* <Pie data={data} sx={{ height: "200px", width: "200px" }} /> */}
    </>
  );
};

export default PirChartForProjectDrawer;
