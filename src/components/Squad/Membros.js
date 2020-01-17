import React from 'react';
import { Grid, Avatar, Typography } from '@material-ui/core';

export const Membros = props => {
  return (
    <Grid container spacing={2} align="center">
      {props.membros.map(membro => {
        return (
          <Grid item xs={4}>
            <Avatar
              style={{ width: '10vw', height: '10vw', backgroundColor: '#1c68b1' }}
              src={`./images/fotos/${membro.login}.JPG`}
            />
            <Typography style={{ fontSize: '2rem', fontWeight: 600, color: '#ffffff' }}>
              {membro.nome}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Membros;
