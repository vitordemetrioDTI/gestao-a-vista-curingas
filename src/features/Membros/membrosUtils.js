import moment from "moment";

const corStatus = crafter => {
  if (!crafter.data) {
    return "#1c68b1";
  }
  const dias = moment().diff(moment(crafter.data), "days");
  if (dias < 21) {
    return "#57bb8a";
  } else if (dias < 30) {
    return "#f6b26b";
  } else if (dias < 45) {
    return "#e95d6a";
  } else {
    return "#505050";
  }
};

const corPlano = () => {
  var hexadecimais = "0123456789ABCDEF";
  var cor = "#";
  for (var i = 0; i < 6; i++) {
    cor += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return cor;
};

export { corStatus, corPlano };
