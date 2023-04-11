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
import BarChart from "../Charts/BarChart";
import LineChart from "../Charts/LineChart";
import DoughnutChart from "../Charts/DoughnutChart";
import { PieChart } from "../Charts/PieChart";
import BubbleChart from "../Charts/BubbleChart";
import CountryChart from "../Charts/CountryChart";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const Dashboard = () => {
  const [data, setData] = useState("");
  const [filters, setFilters] = useState({
    endYear: "",
    topics: [],
    sector: "",
    region: "",
    pest: "",
    source: "",
    swot: "",
    country: "",
    city: "",
  });
  
  let URL = `https://bigdata-dashboard-production.up.railway.app`;

  useEffect(() => {
    axios
      .get(`${URL}/api/data?page=1&limit=100`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilterChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));

    // Filter the chart data based on the current filters
    const filteredData = data?.data?.filter((item) => {
      // Check the end year filter
      if (filters.endYear && item.endYear !== filters.endYear) {
        return false;
      }

      // Check the topics filter
      if (filters.topics.length > 0 && !filters.topics.includes(item.topic)) {
        return false;
      }

      // Check the sector filter
      if (filters.sector && item.sector !== filters.sector) {
        return false;
      }

      // Check the region filter
      if (filters.region && item.region !== filters.region) {
        return false;
      }

      // Check the PEST filter
      if (filters.pest && item.pest !== filters.pest) {
        return false;
      }

      // Check the source filter
      if (filters.source && item.source !== filters.source) {
        return false;
      }

      // Check the SWOT filter
      if (filters.swot && item.swot !== filters.swot) {
        return false;
      }

      // Check the country filter
      if (filters.country && item.country !== filters.country) {
        return false;
      }

      // Check the city filter
      if (filters.city && item.city !== filters.city) {
        return false;
      }

      return true;
    });

    setData(filteredData);
  };

  //get data from db

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
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        gap="10px"
        w={"full"}
        h="80px"
        bg={"gray.400"}
        fontSize=''
        fontWeight={'bold'}
      >
        <label>
          End Year:
          <input
            type="text"
            name="endYear"
            value={filters.endYear}
            onChange={handleFilterChange}
          />
        </label>

        {/* Topics filter */}
        <label>
          Topics:
          <select
            name="topics"
            value={filters.topics}
            onChange={handleFilterChange}
          >
            <option value="gas">Gas</option>
            <option value="oil">Oil</option>
            <option value="renewables">Renewables</option>
            {/* Add more options as needed */}
          </select>
        </label>

        {/* Sector filter */}
        <label>
          Sector:
          <select
            name="sector"
            value={filters.sector}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="Energy">Energy</option>
            <option value="Agriculture">Agriculture</option>
            {/* Add more options as needed */}
          </select>
        </label>

        {/* Region filter */}
        <label>
          Region:
          <select
            name="region"
            value={filters.region}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="Northern America">Northern America</option>
            <option value="Europe">Europe</option>
            {/* Add more options as needed */}
          </select>
        </label>

        {/* PEST filter */}
        <label>
          PEST:
          <select
            name="pest"
            value={filters.pest}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="Political">Political</option>
            <option value="Economic">Economic</option>
            {/* Add more options as needed */}
          </select>
        </label>

        {/* Source filter */}
        <label>
          Source:
          <select
            name="source"
            value={filters.source}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="EIA">EIA</option>
            <option value="BP">BP</option>
            {/* Add more options as needed */}
          </select>
        </label>
      </Box>
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
