import axios from "axios";
import * as _ from "lodash";

class OneOnOneRepo {
  async listarCuringas() {
    return axios
      .get(`https://one-on-ones-dti.herokuapp.com/api/data_tribe?tribe=Curingas`)
      .then(response => {
        return _.filter(response.data.crafters, crafter => crafter.email !== "leonardo.goncalves@dtidigital.com.br");
      })
      .catch(error => {
        console.log(`Erro na OneOnOne: ${error}`);
      });
  }
}

export default new OneOnOneRepo();
