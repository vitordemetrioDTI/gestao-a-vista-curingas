import axios from "axios";
import * as _ from "lodash";
import moment from "moment";

class OneOnOneRepo {
  async listarCuringas() {
    return axios
      .get(`https://one-on-ones-dti.herokuapp.com/api/data_tribe/Curingas`)
      .then(response => {
        return _.filter(response.data.crafters, crafter => crafter.email !== "leonardo.goncalves@dtidigital.com.br");
      })
      .catch(error => {
        console.log(`Erro na OneOnOne: ${error}`);
      });
  }

  parseCuringa(array) {
    return {
      Crafter: array[0],
      Data: moment(array[1], "DD/MM/YYYY"),
      Lider: array[2]
    };
  }
}

export default new OneOnOneRepo();
