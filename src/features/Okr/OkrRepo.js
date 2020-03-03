import axios from "axios";

class OkrRepo {
  async listarOkrs() {
    const options = {
      HEADERS: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*"
      }
    };
    return axios
      .get(
        `https://docs.google.com/spreadsheets/d/e/2PACX-1vTWT4a0f2LiImueR6bJ4kadEb7YRalPFkJnY5UNmPQlRmKTWUFzvqm_0NPmFe5fM9-X-yNbviXX79QX/pub?gid=1278116042&single=true&output=tsv`,
        options
      )
      .then(response => {
        var lines = response.data.split("\r\n");

        var result = [];
        var headers = lines[0].split("\t");

        for (var i = 1; i < lines.length; i++) {
          var obj = {};
          var currentline = lines[i].split("\t");

          for (var j = 0; j < headers.length; j++) {
            if (headers[j].includes("Target") || headers[j].includes("/")) {
              if (currentline[j] === "") {
                obj[headers[j]] = null;
              } else {
                obj[headers[j]] = Number(currentline[j].replace(",", "."));
              }
            } else {
              obj[headers[j]] = currentline[j];
            }
          }

          result.push(obj);
        }

        return result;
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default new OkrRepo();
