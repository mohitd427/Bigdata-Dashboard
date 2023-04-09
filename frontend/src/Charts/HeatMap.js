// import React, { useEffect, useRef } from "react";
// import { Chart, registerables } from "chart.js";
// // import "chartjs-adapter-date-fns";
// // import "chartjs-plugin-heatmap";

// Chart.register(...registerables);

// const HeatMap = ({ data }) => {

//     const chartContainer = useRef(null);

   

//   const sectors = Array.from(new Set(data?.data?.map((item) => item.sector)));
//   const topics = Array.from(new Set(data?.data?.map((item) => item.topic)));
//   const intensityData = sectors.map((sector) => {
//     const sectorData = topics.map((topic) => {
//       const filteredData = data?.data?.filter(
//         (item) => item.sector === sector && item.topic === topic
//       );
//       const intensity = filteredData.length > 0 ? filteredData[0].intensity : 0;
//       return intensity;
//     });
//     return sectorData;
//   });
    
//      const chartData = {
//        labels: topics,
//        datasets: [
//          {
//            data: intensityData,
//            backgroundColor: [
//              "#FFFFFF",
//              "#F9F9FF",
//              "#F2F2FF",
//              "#EBEBFF",
//              "#E4E4FF",
//              "#DDDDFF",
//              "#D6D6FF",
//              "#CFCFFF",
//              "#C8C8FF",
//              "#C1C1FF",
//              "#B9B9FF",
//              "#B2B2FF",
//              "#ABABFF",
//              "#A4A4FF",
//              "#9D9DFF",
//              "#9595FF",
//              "#8E8EFF",
//              "#8787FF",
//              "#8080FF",
//              "#7979FF",
//              "#7171FF",
//              "#6A6AFF",
//              "#6363FF",
//              "#5B5BFF",
//              "#5454FF",
//              "#4D4DFF",
//              "#4646FF",
//              "#3E3EFF",
//              "#3737FF",
//              "#3030FF",
//              "#2828FF",
//              "#2121FF",
//              "#1A1AFF",
//              "#1212FF",
//              "#0B0BFF",
//              "#0404FF",
//            ],
//          },
//        ],
//      };
    
//      useEffect(() => {
//        const ctx = chartContainer.current.getContext("2d");

//        new Chart(ctx, {
//          type: "heatmap",
//          data:chartData,
//          options: {
//            responsive: true,
//            legend: {
//              position: "bottom",
//            },
//            title: {
//              display: true,
//              text: "Heatmap of Intensity by Sector and Topic",
//            },
//            scales: {
//              xAxes: [
//                {
//                  ticks: {
//                    autoSkip: false,
//                    maxRotation: 90,
//                    minRotation: 90,
//                  },
//                  scaleLabel: {
//                    display: true,
//                    labelString: "Topic",
//                  },
//                },
//              ],
//              yAxes: [
//                {
//                  scaleLabel: {
//                    display: true,
//                    labelString: "Sector",
//                  },
//                },
//              ],
//            },
//          },
//        });
//      }, [data]);
    

 

//   const options = {
//     plugins: {
//       legend: {
//         display: false,
//       },
//       heatmap: {
//         colorScale: {
//           display: true,
//           colorStops: [
//             { color: "#FFFFFF", value: 0 },
//             { color: "#0404FF", value: 1 },
//           ],
//         },
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Sector",
//         },
//         ticks: {
//           autoSkip: false,
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: "Topic",
//         },
//         ticks: {
//           autoSkip: false,
//         },
//       },
//     },
//   };

//   return <canvas ref={chartContainer} />;
// };

// export default HeatMap;
