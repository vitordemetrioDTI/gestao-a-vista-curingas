const util = require("util");
const request = require("request");
const requestPromise = util.promisify(request);

class MembrosRepo {
  async listarMembros() {
    try {
      const options = {
        method: "GET",
        url:
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vTGBkE3MJHkuVH8tulx_Qtl2MRu1Ozu6qvVSRc5OmpBjYSSp96XckCNd4_PjnsaPitIrTTH-A730O3F/pub?gid=1877599560&single=true&output=tsv",
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
