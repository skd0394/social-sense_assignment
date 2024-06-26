"use client"
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";
import { Button } from "@/components/ui/button";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const generateRandomData = (base, variance) => {
  return Array.from({ length: 12 }, () =>
    Math.floor(base + Math.random() * variance)
  );
};

const LineChart = () => {
  const [data,setData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Last year",
        data: generateRandomData(50,50),
        borderColor: "#ca8a04",
        backgroundColor: "#ca8a04",
        fill: false,
        tension: 0.4,
      },
      {
        label: "This year",
        data: [270, 320, 250, 340, 290, 360, 260, 380, 290, 400, 310, 420],
        borderColor: "rgba(255, 205, 86, 1)",
        backgroundColor: "rgba(255, 205, 86, 1)",
        fill: false,
        tension: 0.4,
      },
    ],
  });

  const handleChange=()=>{
    setData({
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Last year",
          data: generateRandomData(50,50),
          borderColor: "#ca8a04",
          backgroundColor: "#ca8a04",
          fill: false,
          tension: 0.4,
        },
        {
          label: "This year",
          data: generateRandomData(50,50),
          borderColor: "rgba(255, 205, 86, 1)",
          backgroundColor: "rgba(255, 205, 86, 1)",
          fill: false,
          tension: 0.4,
        },
      ],
    });
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Customers",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full sm:w-11/12 h-full p-4 bg-white rounded-2xl shadow-lg grid">
      <Line data={data} options={options} />;
      <Button
  className="w-1/3 mx-auto bg-yellow-200 text-yellow-700 font-semibold py-2 px-4 rounded text-xs md:text-sm lg:text-base whitespace-nowrap overflow-hidden overflow-ellipsis"
  onClick={handleChange}
>
  Update Data
</Button>
    </div>
  ); 
};

export default LineChart;
