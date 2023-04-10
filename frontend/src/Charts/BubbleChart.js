import { Box } from "@chakra-ui/react";
import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const BubbleChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: "sector",
        data: data?.data?.map((d) => ({
          x: d.sector.length,
          y: d.likelihood,
          r: d.intensity, // adjust bubble size based on sector length
        })),
        backgroundColor: "#4287f5",
        hoverBackgroundColor: "#0062cc",
      },
      {
        label: "topic",
        data: data?.data?.map((d) => ({
          x: d.intensity,
          y: d.likelihood,
          r: d.relevance, // adjust bubble size based on sector length
        })),
        backgroundColor: "red",
        hoverBackgroundColor: "#0062cc",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Box w={"auto"} border={"1px solid teal"} bg={"white"} borderRadius="20px">
      <Bubble data={chartData} options={options} />
    </Box>
  );
};

export default BubbleChart;
