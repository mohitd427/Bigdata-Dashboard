import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

// base url = https://api.coinranking.com/v2/coins

const LineChart = ({ data }) => {
  var LineData = {
    labels: data?.data?.map((x) => x.sector),
    datasets: [
      {
        label: "Intensity",
        data: data?.data?.map((x) => x.intensity),
        borderWidth: 1,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: [createColor(255)],
        fill: false,
        tension: .1,
      },
      {
        label: "Likelihood",
        data: data?.data?.map((x) => x.likelihood),
        borderWidth: 1,
        borderColor: "rgb(255, 99, 132)",
        fill: false,
        backgroundColor: [createColor(255)],
        tension: 1,
      },
    ],
  };

    var options = {
      responsive:true,
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
    <Box w={'auto'} border={"1px solid teal"}>
      <Line data={LineData} options={options} />
    </Box>
  );
};

export default LineChart;
