import axios from "axios";

class MembrosRepo {
  async listarMembros() {
    try {
      const options = {
        HEADERS: {
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "*"
        }
      };
      const tsvMembros = await axios.get(
        `https://docs.google.com/spreadsheets/d/e/2PACX-1vSpC_x6FOQi7QOG4-gFFZzgIp_BCHZEKLHy8PoJpA9twqOAsRVMUerK9BEhglaI92K58qjW4DOFFkMC/pub?gid=1877599560&single=true&output=tsv`,
        options
      );
      return tsvMembros;
    } catch (erro) {
      console.log(`Erro no repositório de membros: ${erro}`);
    }
  }
}
export default new MembrosRepo();
