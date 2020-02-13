import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Cadencia from './Cadencia/Cadencia';
import GembaCheck from './GembaCheck/GembaCheck';
import Membros from './Membros/Membros';
import CheckExecucao from './CheckExecucao/CheckExecucao';
import PlanoDeAcao from './PlanoDeAcao/PlanoDeAcao';

export const Squad = props => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundImage: `url(${props.squad.Cover})`,
        backgroundSize: 'cover',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#29283ddd',
          overflow: 'hidden'
        }}
      >
        <Typography style={{ padding: 16, fontSize: '2.2rem', fontWeight: 900, color: '#ffffff' }}>
          {props.squad.Squad}
        </Typography>
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item container xs={8} spacing={4} alignItems="flex-start">
            <Grid item xs={12}>
              <Cadencia squad={props.squad} />
            </Grid>
            <Grid item xs={6} align="center">
              <Typography style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff' }}>
                Gemba Check
              </Typography>
              <GembaCheck squad={props.squad} />
            </Grid>
            <Grid item xs={6} align="center">
              <Typography style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff' }}>
                Check de Execução
              </Typography>
              <CheckExecucao squad={props.squad} />
            </Grid>
            <Grid item xs={12} align="center">
              <Typography style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff' }}>
                Plano de Ação
              </Typography>
              <PlanoDeAcao squad={props.squad} />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Membros membros={props.squad.Membros} crafters={props.crafters} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Squad;
