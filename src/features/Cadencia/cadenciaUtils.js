import moment from "moment";

const obterCorBackground = (data, verificada) => {
  const dias = moment().diff(data, "days");
  let backgroundColor;
  if (dias > 14) {
    backgroundColor = "#e95d6a";
  } else if (dias === 14) {
    backgroundColor = "#f6b26b";
  } else if (verificada === "Escalado") {
    backgroundColor = "#454545";
  } else {
    backgroundColor = "#57bb8a";
  }
  return backgroundColor;
};

const verificaData = data => {
  if (data.isValid()) {
    return data.format("DD/MM");
  } else if (data._i === "Escalado") {
    return "Escalado";
  } else {
    return "NOVO";
  }
};
export { obterCorBackground, verificaData };
