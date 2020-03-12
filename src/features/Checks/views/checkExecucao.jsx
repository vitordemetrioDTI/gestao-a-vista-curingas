import React from "react";
import ReactApexCharts from "react-apexcharts";
import { filtrarScores, verificaScores, organizarCategorias, obterDados } from "../checksUtil";

export const checkExecucao = props => {
  const scores = filtrarScores(props, "ScoreCE");
  const scoresVerificados = verificaScores(scores);
  const categories = organizarCategorias(scoresVerificados, "ScoreCE");
  const data = obterDados(scoresVerificados);
  return (
    <ReactApexCharts
      series={[
        {
          data: data
        }
      ]}
      options={{
        chart: {
          height: 650,
          width: "100%",
          type: "radar",
          background: "rgba(41, 40, 61, 0)"
        },
        dataLabels: {
          enabled: true
        },
        plotOptions: {
          radar: {
            size: 165,
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
        },
        responsive: [
          {
            breakpoint: 1800,
            options: {
              plotOptions: {
                radar: {
                  size: 108,
                  polygons: {
                    strokeColor: "#e9e9e9",
                    fill: {
                      colors: ["#b0b0b020"]
                    }
                  }
                }
              }
            }
          }
        ]
      }}
      type="radar"
    />
  );
};

export default checkExecucao;
