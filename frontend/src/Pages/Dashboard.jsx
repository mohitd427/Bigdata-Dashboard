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
import { PieChart } from "../Charts/PieChart";
import BubbleChart from "../Charts/BubbleChart";
import CountryChart from "../Charts/CountryChart";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const Dashboard = () => {
  const [data, setData] = useState("");

  //get data from db
  useEffect(() => {
    axios
      .get(
        `https://bigdata-dashboard-production.up.railway.app/api/data?page=1&limit=100`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //doughnut Chart
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
  const labels = Object.keys(sectorCounts);
  const values = Object.values(sectorCounts);

  //for PieChart
  const topics = data?.data?.map((x) => x.topic); // get an array of topic names

  const topicCounts = {};
  topics?.forEach((t) => {
    if (topicCounts[t]) topicCounts[t]++;
    else topicCounts[t] = 1;
  });

  const PieLabels = Object.keys(topicCounts);
  const PieValues = Object.values(topicCounts);

  return (
    <>
      <Box></Box>
      <Box
        display={{ lg: "grid" }}
        gap="20px"
        p="20px"
        gridTemplateColumns="repeat(2,1fr)"
        // bg={"black"}
        // color="white"
      >
        <Box borderRadius={"20px"}>
          <Heading fontSize={"2xl"}>Intensity Of Different Sectors</Heading>
          <BarChart data={data} labels={sectors} />
        </Box>

        <Box borderRadius={"20px "}>
          <Heading fontSize={"2xl"}>
            Relation b/w Intensity and Likelihood{" "}
          </Heading>
          <LineChart data={data} />
        </Box>
        <Box>
          <Heading fontSize={"2xl"}>Different Sectors</Heading>
          <DoughnutChart labels={labels} values={values} />
        </Box>
        <Box>
          <Heading fontSize={"2xl"}>Different Topics</Heading>
          <PieChart labels={PieLabels} values={PieValues} />
        </Box>
        <Box>
          <Heading fontSize={"2xl"}>Intensity vs Relevance vs Sector</Heading>
          <BubbleChart data={data} />
        </Box>
        <Box borderRadius={"20px"}>
          <Heading fontSize={"2xl"}>Intensity Of Different Countries</Heading>
          <CountryChart data={data} />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
