import moment from "moment";
const util = require("util");
const request = require("request");
const requestPromise = util.promisify(request);

class SquadRepo {
  async listarSquads() {
    const options = {
      method: "GET",
      url:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSP3HALgBaaH-50-v0hj92MDNKSV4Rl5bPhCD41fg-nPsZH7nu02TGe23CQBJ6DJY7esBSYpaYZlcDx/pub?gid=766563780&single=true&output=tsv",
      headers: {}
    };
    try {
      const response = await requestPromise(options);
      var lines = response.body.split("\r\n");
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
    } catch (err) {
      console.log("Erro no SquadRepo ", err);
    }
  }
}
export default new SquadRepo();
