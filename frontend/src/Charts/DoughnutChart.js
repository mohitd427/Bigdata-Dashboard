import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { Box } from "@chakra-ui/react";

ChartJS.register(ArcElement, Tooltip, Legend);

// base url = https://api.coinranking.com/v2/coins

const DoughnutChart = ({labels,values}) => {
 
   var chartData = {
     labels: labels,
     datasets: [
       {
         label: "Sectors",
         data: values,
         backgroundColor: [
           createColor(255),
           "#FF6384",
           "#36A2EB",
           "#FFCE56",
           "#66BB6A",
           "#9575CD",
           "#FF8A65",
           "#BA68C8",
           "#FFD54F",
           "#B2EBF2",
           "#80CBC4",
         ],
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
    <Box bg='white' borderRadius={'20px'} >     

      <Doughnut data={chartData} options={options} />
    </Box>
  );
};

export default DoughnutChart;
