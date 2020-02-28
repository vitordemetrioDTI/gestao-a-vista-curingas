const tratarMembros = membrosTSV => {
  var linha = membrosTSV.data.split("\r\n");
  var result = [];
  var cabecalho = linha[0].split("\t");

  for (var i = 1; i < linha.length; i++) {
    var obj = {};
    var linhaAtual = linha[i].split("\t");
    for (var j = 0; j < cabecalho.length; j++) {
      if (cabecalho[j].includes("squad")) {
        obj[cabecalho[j]] = linhaAtual[j];
      } else if (cabecalho[j].includes("login")) {
        obj[cabecalho[j]] = linhaAtual[j];
      } else if (cabecalho[j].includes("nome")) {
        obj[cabecalho[j]] = linhaAtual[j];
      } else if (cabecalho[j].includes("plano")) {
        if (Boolean(linhaAtual[j]) === true) {
          obj[cabecalho[j]] = Boolean(linhaAtual[j]);
        } else {
          obj[cabecalho[j]] = false;
        }
      }
    }
    result.push(obj);
  }
  return result;
};

export default tratarMembros;
