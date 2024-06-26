"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";
import { Button } from "@/components/ui/button";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const generateRandomData = (base, variance) => {
  return Array.from({ length: 12 }, () =>
    Math.floor(base + Math.random() * variance)
  );
};

const Overview = () => {
  const [data, setData] = useState({
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
        label: "Projections",
        data: [35, 40, 45, 30, 35, 40, 45, 40, 35, 40, 45, 30],
        backgroundColor: "#eab308",
        borderColor: "#eab308",
        borderWidth: 1,
      },
      {
        label: "Actuals",
        data: [30, 35, 40, 25, 30, 35, 40, 35, 30, 35, 40, 25],
        backgroundColor: "#e2e8f0",
        borderColor: "#e2e8f0",
        borderWidth: 1,
      },
    ],
  });

  const handleChange = () => {
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
          label: "Projections",
          data: generateRandomData(50, 50),
          backgroundColor: "#eab308",
          borderColor: "#eab308",
          borderWidth: 1,
        },
        {
          label: "Actuals",
          data: generateRandomData(50, 50),
          backgroundColor: "#e2e8f0",
          borderColor: "#e2e8f0",
          borderWidth: 1,
        },
      ],
    });
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Projections vs Actuals",
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div className="w-full sm:w-[90%] h-full shadow-lg bg-white rounded-2xl p-3 grid">
      <Bar data={data} options={options} />
      <Button
        className="w-1/3 mx-auto bg-yellow-200 text-yellow-700 font-semibold py-2 px-4 rounded text-xs md:text-sm lg:text-base whitespace-nowrap overflow-hidden overflow-ellipsis"
        onClick={handleChange}
      >
        Update Data
      </Button>{" "}
    </div>
  );
};

export default Overview;
