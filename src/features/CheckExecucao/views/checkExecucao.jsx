import React from "react";
import ReactApexCharts from "react-apexcharts";
import { obterDados, organizarCategorias, filtrarScoreGemba } from "../checkExecucaoUtils";

export const checkExecucao = props => {
  const scores = filtrarScoreGemba(props);
  const categories = organizarCategorias(scores);
  const data = obterDados(scores);
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
                colors: ["#b0b0b020"]
              }
            }
          }
        },
        colors: ["#004b94"],
        fill: {
          colors: ["#1f82e0"],
          opacity: 0.7
        },
        markers: {
          size: 0,
          colors: ["#fff"]
        },
        xaxis: {
          categories: categories,
          labels: {
            show: true,
            style: {
              colors: ["#ffffff"],
              fontSize: "0.7rem",
              fontFamily: "Poppins"
            }
          }
        },
        yaxis: {
          show: false
        }
      }}
      type="radar"
    />
  );
};

export default checkExecucao;
