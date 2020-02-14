import axios from "axios";

class OkrRepo {
  async listarOkrs() {
    return axios
      .get(
        `https://docs.google.com/spreadsheets/d/e/2PACX-1vSpC_x6FOQi7QOG4-gFFZzgIp_BCHZEKLHy8PoJpA9twqOAsRVMUerK9BEhglaI92K58qjW4DOFFkMC/pub?gid=1278116042&single=true&output=tsv`
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
