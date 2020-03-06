const util = require("util");
const request = require("request");
const requestPromise = util.promisify(request);

class MembrosRepo {
  async listarMembros() {
    try {
      const options = {
        method: "GET",
        url:
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vSLZ7qBajVpujI1pM_36Pd-5cS-vS24OxVcoaFuiNlr6eJrAroei1iyXwZWM95kYo0iaAD1APSZ1KST/pub?gid=1877599560&single=true&output=tsv",
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
