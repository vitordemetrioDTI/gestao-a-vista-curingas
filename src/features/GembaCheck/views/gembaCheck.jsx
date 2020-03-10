import React from "react";
import ReactApexCharts from "react-apexcharts";
import { obterDados, organizarCategorias, filtrarScoreGemba } from "../gembaCheckUtils";

export const gembaCheck = props => {
  const scores = filtrarScoreGemba(props);
  const categories = organizarCategorias(scores);
  const data = obterDados(scores);
  return (
    <ReactApexCharts
      options={{
        chart: {
          type: "radar",
          background: "rgba(41, 40, 61, 0)"
        },
        plotOptions: {
          radar: {
            polygons: {
              strokeColor: "#ffffff",
              fill: {
                colors: ["#ffffff20"]
              }
            }
          }
        },
        colors: ["#1c68b1"],
        fill: {
          colors: ["#1c68b1"],
          opacity: 0.9
        },
        markers: { size: 0 },
        stroke: {
          show: false
        },
        theme: {
          mode: "dark",
          palette: "palette8"
        },
        yaxis: {
          show: false
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

export default gembaCheck;
