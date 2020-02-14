const retornaSegundoItem = scores => {
  return scores.map(entry => {
    return entry[1];
  });
};

const substituirScoreCE = scores => {
  return scores.map(entry => {
    return entry[0].replace("ScoreCE", "");
  });
};

const filtrarScoresCE = props => {
  return Object.entries(props.squad).filter(entry => {
    return entry[0].includes("ScoreCE");
  });
};

export { retornaSegundoItem, substituirScoreCE, filtrarScoresCE };
