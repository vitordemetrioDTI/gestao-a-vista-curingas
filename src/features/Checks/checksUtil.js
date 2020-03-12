const filtrarScores = (props, tipo) => {
  return Object.entries(props.squad).filter(entry => {
    return entry[0].includes(tipo);
  });
};

const verificaScores = scores => {
  let scoresVerificados = [];
  scores.forEach(score => {
    if (!isNaN(score[1])) {
      scoresVerificados.push(score);
    }
  });
  return scoresVerificados;
};

const organizarCategorias = (scores, tipo) => {
  return scores.map(entry => {
    return entry[0].replace(tipo, "");
  });
};

const obterDados = scores => {
  return scores.map(entry => {
    return entry[1];
  });
};

export { filtrarScores, verificaScores, organizarCategorias, obterDados };
