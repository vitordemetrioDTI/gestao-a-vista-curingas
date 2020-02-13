import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import moment from 'moment';

export const Cadencia = props => {
  return (
    <Grid container align="center">
      <Grid item xs={4}>
        <Typography style={{ fontSize: '1.6rem', fontWeight: 300, color: '#ffffff' }}>
          Check Arquitetural
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography style={{ fontSize: '1.6rem', fontWeight: 300, color: '#ffffff' }}>
          Check de Execução
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography style={{ fontSize: '1.6rem', fontWeight: 300, color: '#ffffff' }}>
          Retro do Squad
        </Typography>
      </Grid>
      <Grid item xs={4}>
        {obterDataComFarol(props.squad.DataCheckArquitetural)}
      </Grid>
      <Grid item xs={4}>
        {obterDataComFarol(props.squad.DataCheckExecucao)}
      </Grid>
      <Grid item xs={4}>
        {obterDataComFarol(props.squad.DataRetroSquad)}
      </Grid>
    </Grid>
  );
};

const obterDataComFarol = data => {
  const dias = moment().diff(data, 'days');
  let backgroundColor = '#454545';
  if (dias > 14) {
    backgroundColor = '#e95d6a';
  } else if (dias === 14) {
    backgroundColor = '#f6b26b';
  } else {
    backgroundColor = '#57bb8a';
  }
  return (
    <Typography
      style={{
        width: '64%',
        fontSize: '3rem',
        fontWeight: 900,
        backgroundColor: backgroundColor,
        color: '#ffffff'
      }}
    >
      {data.isValid() ? data.format('DD/MM') : 'NOVO'}
    </Typography>
  );
};

export default Cadencia;
