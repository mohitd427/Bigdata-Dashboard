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

// base url = https://api.coinranking.com/v2/coins

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

 //   const [chart, setChart] = useState([])

  //   var baseUrl = "https://api.coinranking.com/v2/coins?limit=10"
  //   var proxyUrl = "https://cors-anywhere.herokuapp.com/"
  //   var apiKey = "coinrankingd653db2ad23e49a8da51cbd250835ccbca0306a8768362ff";

  //   useEffect(() => {
  //       const fetchCoins = async () => {
  //         await fetch(`${baseUrl}`, {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "applicacation/json",
  //             "x-access-token": `${apiKey}`,
  //             "Access-Control-Allow-Origin": "*",
  //           },
  //         })
  //           .then((res) => res.json().then((json) => {
  //             console.log(json)
  //             setChart(json.data)
  //           }))
  //           .catch((err) => console.log(err));
  //     }
  //     fetchCoins()
  //   }, [apiKey, baseUrl])

  // console.log(chart);

//  var chartData = {
//    labels: data?.data?.map((x) => x.name),
//    datasets: [
//      {
//        label: `${chart?.cons?.length} Coins `,
//        data: chart?.coins?.map((x) => x.price),
//        backgroundColor: [
//          createColor(255),
//          createColor(255),
//          createColor(255),
//          createColor(255),
//        ],
//      },
//    ],
//    borderWidth: 2,
//  };

//  var options = {
//    maintainAspectRation: false,
//    scales: {
//      y: {
//        beginAtZero: false,
//      },
//    },
//    legend: {
//      labels: {
//        fontSize: 26,
//      },
//    },
//  };

//  function random(num) {
//    return Math.floor(Math.random() * num);
//  }

//  function createColor(num) {
//    return `rgba(${random(255)},${random(255)},${random(255)},1.8)`;
//  }
