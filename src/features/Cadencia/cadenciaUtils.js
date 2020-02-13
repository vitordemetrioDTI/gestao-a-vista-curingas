import moment from 'moment';

const obterCorBackground = (data) => {
  const dias = moment().diff(data, 'days');
  let backgroundColor = '#454545';
  if (dias > 14) {
    backgroundColor = '#e95d6a';
  }
  else if (dias === 14) {
    backgroundColor = '#f6b26b';
  }
  else {
    backgroundColor = '#57bb8a';
  }
  return backgroundColor;
}

export default obterCorBackground;
