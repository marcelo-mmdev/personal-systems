"use client";

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
// import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Gastos do Ano 2023",
    },
  },
};

const labels = [
  // "Janeiro",
  // "Fevereiro",
  // "Março",
  // "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  // "Outubro",
  // "Novembro",
  // "Dezembro",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Entrada",
      data: [
        4100, 4220, 4290, 4200, 4199, 4220, 4210, 4100, 4200, 4250, 4280, 4190,
      ],
      // data: labels.map(
      //   () => faker.datatype.number({ min: 0, max: 5000 }),
      //   [10, 500, 900, 7000, 80, 400, 10, 500, 900, 7000, 80, 400]
      // ),
      backgroundColor: "#4169E1",
      // backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Saida",
      data: [
        3000, 3500, 3900, 3590, 4080, 4000, 2210, 3500, 2900, 3700, 1980, 3400,
      ],
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 5000 })),
      backgroundColor: "#FF0000",
      // backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Economia",
      data: [
        1000, 1500, 1900, 1500, 1280, 1400, 1210, 1500, 1900, 1700, 2180, 1400,
      ],
      // data: labels.map(
      //   () => faker.datatype.number({ min: 0, max: 5000 }),
      //   [10, 500, 900, 7000, 80, 400, 10, 500, 900, 7000, 80, 400]
      // ),
      backgroundColor: "#00FF00",
      // backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function Graphics() {
  return <Bar options={options} data={data} />;
}

// **************************************************************************

// import React from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Pie } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 3,
//     },
//   ],
// };

// export function Graphics() {
//   return <Pie data={data} />;
// }
