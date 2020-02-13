import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import moment from 'moment';


const corFarolData = dias => {
  if (dias > 14) {
    return { backgroundColor: '#e95d6a' };
  } else if (dias === 14) {
    return { backgroundColor: '#f6b26b' };
  } else {
    return { backgroundColor: '#57bb8a' };
  }
};

const dateCell = data => {
  return (
    <Grid
      item
      xs
      style={corFarolData(moment().diff(data, 'days'))}
      container
      justify="center"
      direction="column"
      align="center"
    >
      <Typography variant="h3" style={{ color: '#ffffff', fontWeight: 900 }}>
        {data.isValid() ? data.format('DD/MM') : 'NOVO'}
      </Typography>
      {data.isValid() && (
        <Typography variant="h5" style={{ color: '#ffffff', fontWeight: 400 }}>
          Próximo:{' '}
          {moment(data)
            .add(14, 'days')
            .format('DD/MM')}
        </Typography>
      )}
    </Grid>
  );
};

const andon = andon => {
  switch (andon) {
    case 1:
      return <NotificationImportantIcon style={{ fontSize: 64, color: '#f6b26b' }} />;
    case 2:
      return <NotificationImportantIcon style={{ fontSize: 64, color: '#e95d6a' }} />;
    default:
      return <div />;
  }
};

const corFarolEstoque = estoque => {
  if (estoque === 'CONCRETO') {
    return { backgroundColor: '#57bb8a' };
  } else {
    return { backgroundColor: '#e95d6a' };
  }
};


export { dateCell, andon, corFarolEstoque }
