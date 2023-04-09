import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Tooltip,
  LinearScale,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import BarChart from '../Charts/BarChart';

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const Dashboard = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:5500/api/data?page=1&limit=50`)
            .then(res => {
                console.log(res.data);
                setData(res.data)
            })
            .catch(err=>console.log(err))    
    }, [])

          var chartData = {
            labels: data?.data?.map((x) => x.sector),
            datasets: [
              {
                label: "",
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
      <div style={{ width: "70%" }}>
        <h1>Bar Chart</h1>
              <Bar data={chartData} options={options} height={80} />
              {/* <BarChart data={data} /> */}
      </div>
    </>
  );
}

export default Dashboard