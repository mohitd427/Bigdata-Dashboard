import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Tooltip,
  LinearScale,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import axios from "axios";
import { Box } from "@chakra-ui/react";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);


const BarChart = ({ data }) => {
 
//Intensity
  var chartData = {
    labels: data?.data?.map((x) => x.sector),
    datasets: [
      {
        label: "Sector Vs Intensity",
        data: data?.data?.map((x) => x.intensity),
        backgroundColor: [createColor(255)],
      },
    ],
    borderWidth: 1,
  };

  var options = {
    maintainAspectRation: false,
    scales: {
      y: {
        beginAtZero: false,
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };

  function random(num) {
    return Math.floor(Math.random() * num);
  }

  function createColor(num) {
    return `rgb(${random(255)},${random(255)},${random(255)})`;
  }

  return (
    <>
    <Box w={"auto"} border={"1px solid teal"} bg={"white"} borderRadius='20px'>
      <Bar data={chartData} options={options} />
    </Box>
     
    </>
  );
};

export default BarChart;

 
