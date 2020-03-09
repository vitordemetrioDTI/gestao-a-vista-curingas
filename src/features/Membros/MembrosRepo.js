const util = require("util");
const request = require("request");
const requestPromise = util.promisify(request);

class MembrosRepo {
  async listarMembros() {
    try {
      const options = {
        method: "GET",
        url:
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vSP3HALgBaaH-50-v0hj92MDNKSV4Rl5bPhCD41fg-nPsZH7nu02TGe23CQBJ6DJY7esBSYpaYZlcDx/pub?gid=1877599560&single=true&output=tsv",
        headers: {}
      };
      const resultado = await requestPromise(options);
      return resultado;
    } catch (err) {
      console.log("Erro no repositório de membros", err);
    }
  }
}
export default new MembrosRepo();
