import axios from 'axios';
import moment from 'moment';

class SquadRepo {
  async listarSquads() {
    return axios
      .get(
        `https://docs.google.com/spreadsheets/d/e/2PACX-1vSpC_x6FOQi7QOG4-gFFZzgIp_BCHZEKLHy8PoJpA9twqOAsRVMUerK9BEhglaI92K58qjW4DOFFkMC/pub?gid=766563780&single=true&output=tsv`
      )
      .then(response => {
        var lines = response.data.split('\r\n');

        var result = [];
        var headers = lines[0].split('\t');

        for (var i = 1; i < lines.length; i++) {
          var obj = {};
          var currentline = lines[i].split('\t');

          for (var j = 0; j < headers.length; j++) {
            if (headers[j].includes('Data')) {
              obj[headers[j]] = moment(currentline[j], 'DD/MM/YYYY');
            } else if (headers[j].includes('Score')) {
              obj[headers[j]] = Number(currentline[j].replace(',', '.'));
            } else if (headers[j].includes('Membros')) {
              obj[headers[j]] = JSON.parse(currentline[j]);
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

  parseSquad(array) {
    return {
      Squad: array[0],
      Tribo: array[1],
      DeveloperLeader: array[2],
      Andon: Number(array[3]),
      Estoque: Number(array[4]),
      CheckArquitetural: moment(array[5], 'DD/MM/YYYY'),
      CheckExecucao: moment(array[6], 'DD/MM/YYYY'),
      RetroSprint: moment(array[7], 'DD/MM/YYYY'),
      GroomingEPlanning: Number(array[8]),
      TamanhoDasEstorias: Number(array[9]),
      Burndown: Number(array[10]),
      ReuniaoDiaria: Number(array[11]),
      GestaoAVista: Number(array[12]),
      WorkInProgress: Number(array[13]),
      DtiFlow: Number(array[14]),
      TestesAutomatizados: Number(array[15]),
      SonarQube: Number(array[16]),
      CulturaImplantacao: Number(array[17]),
      ProgressoConcreto: Number(array[18]),
      Score: Number(array[19])
    };
  }
}

export default new SquadRepo();
