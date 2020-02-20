import axios from "axios";

class MembrosRepo {
  async listarMembros() {
    return axios
      .get(
        `https://docs.google.com/spreadsheets/d/e/2PACX-1vT-B4xEWT8OUz-Vuk53ofBxpglD0Qh_Rik3uZId3Uz-7Z_qjJfGgdNOmWp69-u0sDHAoFDcFe_48K3k/pub?gid=1653355093&single=true&output=tsv`
      )
      .then(response => {
        console.log(`Entrou no repositorio de membros`);
        var linha = response.data.split("\r\n");
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
      })
      .catch(error => {
        console.log(`Erro no repositório de membros: ${error}`);
      });
  }
}

export default new MembrosRepo();
