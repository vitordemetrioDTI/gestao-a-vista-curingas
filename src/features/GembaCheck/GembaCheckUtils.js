const retornaSegundoItem = scores => {
  return scores.map(entry => {
    return entry[1];
  });
};

const substituirScoreGemba = scores => {
  return scores.map(entry => {
    return entry[0].replace("ScoreGemba", "");
  });
};

const filtrarScoreGemba = props => {
  return Object.entries(props.squad).filter(entry => {
    return entry[0].includes("ScoreGemba");
  });
};

export { retornaSegundoItem, substituirScoreGemba, filtrarScoreGemba };
