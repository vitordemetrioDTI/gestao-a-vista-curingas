import React from "react";
import ReactApexCharts from "react-apexcharts";
import {
  retornaSegundoItem,
  substituirScoreGemba,
  filtrarScoreGemba
} from "../GembaCheckUtils";

export const GembaCheck = props => {
  const scores = filtrarScoreGemba(props);
  const categories = substituirScoreGemba(scores);
  const data = retornaSegundoItem(scores);
  return (
    <ReactApexCharts
      options={{
        chart: {
          type: "radar",
          background: "rgba(41, 40, 61, 0)"
        },
        colors: ["#57bb8a"],
        fill: {
          colors: ["#57bb8a"],
          opacity: 0.9
        },
        theme: {
          mode: "dark",
          palette: "palette8"
        },
        xaxis: {
          categories: categories
        }
      }}
      series={[
        {
          name: "",
          data: data
        }
      ]}
      type="radar"
      height={500}
    />
  );
};

export default GembaCheck;
