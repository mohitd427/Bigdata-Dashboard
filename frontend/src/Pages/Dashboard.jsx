import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Tooltip,
  LinearScale,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import BarChart from "../Charts/BarChart";
import LineChart from "../Charts/LineChart";
import DoughnutChart from "../Charts/DoughnutChart";
import HeatMap from "../Charts/HeatMap";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const Dashboard = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5500/api/data?page=1&limit=100`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const sectors = data?.data?.map((x) => x.sector); // get an array of sector names
  // console.log(sectors,"sectors")

  const sectorCounts = {};
  sectors?.forEach((s) => {
    if (sectorCounts[s]) {
      sectorCounts[s]++;
    } else {
      sectorCounts[s] = 1;
    }
  });

  // console.log(sectorCounts)

  const labels = Object.keys(sectorCounts);
  const values = Object.values(sectorCounts);

  return (
    <>
      <Box
        display={"grid"}
        gap="20px"
        p="20px"
        gridTemplateColumns="repeat(2,1fr)"
        border={"1px solid red"}
        bg="green.500"
      >
        <Box borderRadius={"20px"}>
          <Heading>Intensity Of Different Sectors</Heading>
          <BarChart data={data} />
        </Box>

        <Box borderRadius={"20px "}>
          <Heading>Relation b/w Intensity and Likelihood </Heading>
          <LineChart data={data} />
        </Box>
        <Box>
          <Heading>Sectors</Heading>
          <DoughnutChart labels={labels} values={values} />
        </Box>
        {/* <Box>
          <Heading>Heat Map</Heading>
          <HeatMap data={data} />
        </Box> */}
      </Box>
    </>
  );
};

export default Dashboard;
