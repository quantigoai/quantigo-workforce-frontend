import React, { useEffect, useState } from "react";
import { ArcElement, Chart as ChartJS, Legend, Title, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "./index.css";

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const PieChartForUser = () => {
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

    // Initial calculation and event listener for responsive font size
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = {
    labels: ["L0 Annotator", "L1 Annotator", "L2 Annotator", "L3 Annotator", "Reviewer"],
    datasets: [
      {
        label: "",
        data: [
          totalCountData.level_0_annotator,
          totalCountData.level_1_annotator,
          totalCountData.level_2_annotator,
          totalCountData.level_3_annotator,
          totalCountData.reviewer,
        ],
        backgroundColor: ["#266AED", "#FFAB00", "#36B37E", "#FF4757", "#9747FF"],

        borderWidth: 3,
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
          font: {
            // size:"10px"
            size: labelFontSize,
          },
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 10,
          boxHeight: 7,
        },
      },
      title: {
        display: true,
        text: "Annotators Activity",
        align: "start",
        font: {
          size: 14,
        },
        color: isLightTheme ? "#091E42" : "white",
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
          const percentage = ((value / total) * 100).toFixed(2); // Calculate percentage
          return percentage === "0.00" ? "" : `${percentage}%`;
        },
        color: "#FFFFFF",
        // backgroundColor: "#404040",
      },
    },

    radius: "80%",
  };
  return (
    <>
      <Pie options={options} data={data} />
    </>
  );
};

export default PieChartForUser;
