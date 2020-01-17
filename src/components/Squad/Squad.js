import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Cadencia from './Cadencia';
import GembaCheck from './GembaCheck';
import Membros from './Membros';

export const Squad = props => {
  return (
    <div style={{ padding: 16 }}>
      <Typography style={{ paddingBottom: 16, fontSize: 32, fontWeight: 900, color: '#ffffff' }}>
        {props.squad.Squad}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Cadencia squad={props.squad} />
          <GembaCheck squad={props.squad} />
        </Grid>
        <Grid item xs={6}>
          <Membros membros={props.squad.Membros} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Squad;
