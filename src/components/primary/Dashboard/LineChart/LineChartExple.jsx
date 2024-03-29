import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { capitalizeAllwordAndSlic } from '../../../../helper/capitalizeAllwordAndSlic';
import { weeklyConver } from '../../../../helper/weeklyConver';

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
);

const LineChartExple = ({ loading }) => {
  const { hourlyData } = useSelector((state) => state.dashboard);
  const [customData, setCustomData] = useState({});
  const [isDataUpdate, setIsDataUpdate] = React.useState(true);
  const [labelFontSize, setLabelFontSize] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setLabelFontSize(8);
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
        setLabelFontSize(9);
      } else if (window.innerWidth > 1024 && window.innerWidth <= 1440) {
        setLabelFontSize(10);
      } else if (window.innerWidth >= 1440 && window.innerWidth < 1920) {
        setLabelFontSize(13);
      } else {
        setLabelFontSize(14);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
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
            borderColor: '#266AED',
            pointRadius: 0,
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 300);
              gradient.addColorStop(0, 'rgba(51, 153, 255,0.1)');
              gradient.addColorStop(0.5, 'rgba(51, 153, 255,0.1)');
              gradient.addColorStop(1, 'rgba(250,174,50,0)');
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
    labels: [
      'Jan',
      'Feb',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        // label: "",
        data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 9, 58],
        fill: true,
        // backgroundColor: "rgba(51, 153, 255,0.1)",
        // backgroundColor: "linear-gradient(to right, #ff0000, #00ff00)",
        tension: 0.6,
        borderColor: '#266AED',
        pointRadius: 0,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(51, 153, 255,0.1)');
          gradient.addColorStop(0.5, 'rgba(51, 153, 255,0.1)');
          gradient.addColorStop(1, 'rgba(250,174,50,0)');
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
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#7D89A3', // Change label text color here
          font: {
            size: labelFontSize,
          },
        },
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: '#7D89A3', // Change label text color here
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
        <>
          <Line options={options} data={customData} height={158} />
        </>
      )}
    </>
  );
};

export default LineChartExple;
