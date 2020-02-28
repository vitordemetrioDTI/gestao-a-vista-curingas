import axios from "axios";
import tratarMembros from "./membrosManager";

class MembrosRepo {
  async listarMembros() {
    try {
      const tsvMembros = await axios.get(
        `https://docs.google.com/spreadsheets/d/e/2PACX-1vT-B4xEWT8OUz-Vuk53ofBxpglD0Qh_Rik3uZId3Uz-7Z_qjJfGgdNOmWp69-u0sDHAoFDcFe_48K3k/pub?gid=1653355093&single=true&output=tsv`
      );

      return tratarMembros(tsvMembros);
    } catch (erro) {
      console.log(`Erro no repositório de membros: ${erro}`);
    }
  }
}
export default new MembrosRepo();
