import axios from "axios";
import moment from "moment";

class SquadRepo {
  async listarSquads() {
    return axios
      .get(
        `https://docs.google.com/spreadsheets/d/e/2PACX-1vTWT4a0f2LiImueR6bJ4kadEb7YRalPFkJnY5UNmPQlRmKTWUFzvqm_0NPmFe5fM9-X-yNbviXX79QX/pub?gid=766563780&single=true&output=tsv`
      )
      .then(response => {
        var lines = response.data.split("\r\n");

        var result = [];
        var headers = lines[0].split("\t");

        for (var i = 1; i < lines.length; i++) {
          var obj = {};
          var currentline = lines[i].split("\t");

          for (var j = 0; j < headers.length; j++) {
            if (headers[j].includes("Data")) {
              obj[headers[j]] = moment(currentline[j], "DD/MM/YYYY");
            } else if (headers[j].includes("Score")) {
              obj[headers[j]] = Number(currentline[j].replace(",", "."));
            } else {
              obj[headers[j]] = currentline[j];
            }
          }

          result.push(obj);
        }
        return result;
      })
      .catch(error => {
        console.log(`Erro no repositório de ritos:`, error);
      });
  }
}

export default new SquadRepo();
