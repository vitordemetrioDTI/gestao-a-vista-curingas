import axios from "axios";

class MembrosRepo {
  async listarMembros() {
    try {
      const options = {
        method: "GET",
        headers: {}
      };

      const tsvMembros = await axios.get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWT4a0f2LiImueR6bJ4kadEb7YRalPFkJnY5UNmPQlRmKTWUFzvqm_0NPmFe5fM9-X-yNbviXX79QX/pub?gid=1877599560&single=true&output=tsv",
        options
      );
      return tsvMembros;
    } catch (erro) {
      console.log(`Erro no repositório de membros: ${erro}`);
    }
  }
}
export default new MembrosRepo();
