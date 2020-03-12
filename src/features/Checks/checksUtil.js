const obterDados = scores => {
  return scores.map(entry => {
    if (isNaN(entry[1])) return null;
    return entry[1];
  });
};

const organizarCategorias = (scores, tipo) => {
  return scores.map(entry => {
    return entry[0].replace(tipo, "");
  });
};

const filtrarScores = (props, tipo) => {
  return Object.entries(props.squad).filter(entry => {
    return entry[0].includes(tipo);
  });
};

export { obterDados, organizarCategorias, filtrarScores };
