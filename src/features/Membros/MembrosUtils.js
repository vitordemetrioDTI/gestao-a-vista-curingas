import moment from 'moment';

const corStatus = (meeting, escalado) => {
  if (!meeting) {
    return escalado;
  }
  const dias = moment().diff(moment(meeting.lastMeeting), 'days');
  if (dias < 21) {
    return '#57bb8a';
  } else if (dias < 30) {
    return '#f6b26b';
  } else if (dias < 45) {
    return '#e95d6a';
  } else {
    return '#505050';
  }
};


export default corStatus
