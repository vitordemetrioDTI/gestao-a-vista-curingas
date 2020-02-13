import moment from 'moment';


const corStatus = (meeting, classe) => {
  if (!meeting) {
    return classe.Escalado;
  }
  const dias = moment().diff(moment(meeting.lastMeeting), 'days');
  if (dias < 21) {
    return classe.EmDia;
  } else if (dias < 30) {
    return classe.Proximo;
  } else if (dias < 45) {
    return classe.Atrasado;
  } else {
    return classe.Escalado;
  }
};

const prettyName = email => {
  return email
    .split('@')[0]
    .split('.')
    .join(' ');
};


export { corStatus, prettyName }
