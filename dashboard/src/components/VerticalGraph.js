// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';


// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: "Holdings",
//     },
//   },
// };




// export function VerticalGraph({data}) {
//   return <Bar options={options} data={data} />;
// }


import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Default chart options
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings",
    },
  },
};

// Updated VerticalGraph component with safety checks
export function VerticalGraph({ data }) {
  // Ensure labels and datasets are always arrays
  const safeData = {
    labels: data?.labels || [],
    datasets:
      data?.datasets?.map((ds) => ({
        ...ds,
        data: ds.data || [],
      })) || [
        {
          label: "No data",
          data: [],
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
  };

  return <Bar options={options} data={safeData} />;
}
