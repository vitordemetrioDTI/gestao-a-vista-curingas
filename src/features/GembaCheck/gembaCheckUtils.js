const obterDados = scores => {
  return scores.map(entry => {
    if (isNaN(entry[1])) return null;
    return entry[1];
  });
};

const organizarCategorias = scores => {
  return scores.map(entry => {
    return entry[0].replace("ScoreGemba", "");
  });
};

const filtrarScoreGemba = props => {
  return Object.entries(props.squad).filter(entry => {
    return entry[0].includes("ScoreGemba");
  });
};

export { obterDados, organizarCategorias, filtrarScoreGemba };
