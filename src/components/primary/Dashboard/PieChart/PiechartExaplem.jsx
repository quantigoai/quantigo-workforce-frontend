import React from "react";
import { Pie } from "react-chartjs-2";

const PiechartExaplem = () => {
  const data = {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        data: [30, 40, 50],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    datalabels: {
        display: true,
        color: "white",
      },
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    //   datalabels: {
    //     color: "blue",
    //     font: {
    //       weight: "bold",
    //     },
    //     formatter: (value, ctx) => {
    //       const dataset = data.datasets[ctx.datasetIndex];
    //       const total = dataset.data.reduce(
    //         (previousValue, currentValue) => previousValue + currentValue
    //       );
    //       const percentage = ((value / total) * 100).toFixed(2);
    //       return `${percentage}%`;
    //     },
    //   },
    },
  };
  return (
    <div>
      <Pie data={data} options={options} />;
    </div>
  );
};

export default PiechartExaplem;
