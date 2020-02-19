import React from "react";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import { map, chain, groupBy } from "lodash";
import moment from "moment";

const obterValores = dataSet => {
  return map(dataSet, data => data[1]);
};

const obterAlvo = (dataSet, props) => {
  return map(dataSet, () => props.okr.Target);
};

const obterCategorias = dataSet => {
  return map(dataSet, data => data[0].format("D/M"));
};

const obterDataSet = props => {
  return chain(props.okr)
    .pickBy((value, key) => key.includes("/"))
    .map((value, key) => [moment(key, "DD/MM/YYYY"), value])
    .orderBy((value, key) => key)
    .value();
};

const renderConfianca = confianca => {
  switch (confianca) {
    case "Baixa":
      return (
        <SentimentDissatisfiedIcon
          fontSize="large"
          style={{ color: "#e95d6a" }}
        ></SentimentDissatisfiedIcon>
      );
    case "Média":
      return (
        <SentimentSatisfiedIcon
          fontSize="large"
          style={{ color: "#f6b26b" }}
        ></SentimentSatisfiedIcon>
      );
    case "Alta":
      return (
        <SentimentVerySatisfiedIcon
          fontSize="large"
          style={{ color: "#57bb8a" }}
        ></SentimentVerySatisfiedIcon>
      );
    default:
      return (
        <SentimentSatisfiedIcon
          fontSize="large"
          style={{ color: "#f6b26b" }}
        ></SentimentSatisfiedIcon>
      );
  }
};

const agruparPorObjetivos = props => {
  return groupBy(props.okrs, "Objetivo");
};

export {
  obterValores,
  obterAlvo,
  obterCategorias,
  obterDataSet,
  renderConfianca,
  agruparPorObjetivos
};
