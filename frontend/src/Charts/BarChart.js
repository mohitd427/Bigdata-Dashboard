import React, { useEffect, useState } from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";


ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale

);

// base url = https://api.coinranking.com/v2/coins

const BarChart = () => {
    const [chart, setChart] = useState([])
    
    var baseUrl = "https://api.coinranking.com/v2/coins?lomit=10"
    var proxyUrl = "https://cors-anywhere.herokuapp.com/"
    var apiKey = "coinrankingd653db2ad23e49a8da51cbd250835ccbca0306a8768362ff";

    useEffect(() => {
        const fetchCoins = async () => {
            await axios.get(`${proxyUrl}${baseUrl}`,{
                
            })
                .then(res => console.log(res.data))
            .catch(err =>console.log(err))
      }      
    }, [])
    
  var data = {
    labels: ["January", "February", "march", "April", "may", "June"],
    datasets: [
      {
        label: "attendence",
        data: [98, 48, 100, 87, 65, 75],
        backgroundColor: [
          createColor(255),
          createColor(255),
          createColor(255),
          createColor(255),
        ],
      },
      {
        label: "performance",
        data: [86, 34, 90, 78, 54, 70],
          backgroundColor: [
            createColor(255),
            createColor(255),
          createColor(255),
          createColor(255),
          createColor(255)],
      },
    ],
    borderWidth: 1,
  };

  var options = {
    maintainAspectRation: false,
    scales: {
      y: {
        beginAtZero: true,
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
    return `rgba(${random(255)},${random(255)},${random(255)},1.8)`;
  }

  return (
    <div>
      <Bar data={data} options={options} height={80} />
    </div>
  );
};

export default BarChart;
