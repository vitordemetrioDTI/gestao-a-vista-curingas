import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Cadencia from './Cadencia';
import GembaCheck from './GembaCheck';
import Membros from './Membros';
import CheckExecucao from './CheckExecucao';

export const Squad = props => {
  return (
    <div style={{ padding: 16 }}>
      <Typography style={{ padding: 16, fontSize: 32, fontWeight: 900, color: '#ffffff' }}>
        {props.squad.Squad}
      </Typography>
      <Grid container spacing={4}>
        <Grid item container xs={8} spacing={8}>
          <Grid item xs={12}>
            <Cadencia squad={props.squad} />
          </Grid>
          <Grid item xs={6} align="center">
            <Typography style={{ fontSize: '1.5rem', fontWeight: 900, color: '#ffffff' }}>
              Gemba Check
            </Typography>
            <GembaCheck squad={props.squad} />
          </Grid>
          <Grid item xs={6} align="center">
            <Typography style={{ fontSize: '1.5rem', fontWeight: 900, color: '#ffffff' }}>
              Check de Execução
            </Typography>
            <CheckExecucao squad={props.squad} />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Membros membros={props.squad.Membros} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Squad;
