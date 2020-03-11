import React from "react";
import ReactApexCharts from "react-apexcharts";
import { retornaSegundoItem, substituirScoreCE, filtrarScoresCE } from "../checkExecucaoUtils";

export const checkExecucao = props => {
  const scores = filtrarScoresCE(props);
  const categories = substituirScoreCE(scores);
  const data = retornaSegundoItem(scores);
  return (
    <ReactApexCharts
      series={[
        {
          data: data
        }
      ]}
      options={{
        chart: {
          height: 450,
          width: "100%",
          type: "radar",
          background: "rgba(41, 40, 61, 0)"
        },
        dataLabels: {
          enabled: true
        },
        plotOptions: {
          radar: {
            size: 180,
            polygons: {
              strokeColor: "#e9e9e9",
              fill: {
                colors: ["#ffffff20"]
              }
            }
          }
        },
        colors: ["#1c68b1"],
        fill: {
          colors: ["#1c68b1"],
          opacity: 0.5
        },
        markers: {
          size: 0,
          colors: ["#fff"],
          strokeColor: "#1c68b1",
          strokeWidth: 2
        },

        xaxis: {
          categories: categories
        }
      }}
      type="radar"
    />
  );
};

export default checkExecucao;
