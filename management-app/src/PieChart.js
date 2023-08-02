import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const data = [
  { title: "", value: 100, color: "#E38627" },
  { title: "", value: 200, color: "#C13C37" },
  { title: "", value: 300, color: "#6A2135" },
  { title: "", value: 400, color: "#0077FF" },
];

const Pie = () => (
  <PieChart
    data={data}
    lineWidth={50}
    radius={50}
    label={({ dataEntry }) => dataEntry.title}
    labelStyle={{
      fontSize: "35px",
      fontFamily: "sans-serif",
      fill: "#FFFFFF",
    }}
    style={{

        height: '140px'

    }}
  />
  
);

export default Pie;

