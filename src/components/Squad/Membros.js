import React from 'react';
import { Grid, Avatar, Typography } from '@material-ui/core';

export const Membros = props => {
  return (
    <Grid container spacing={2} align="center">
      {props.membros.map(membro => {
        return (
          <Grid item xs={3}>
            <Avatar
              style={{ width: 120, height: 120, backgroundColor: '#1c68b1' }}
              src={`./images/fotos/${membro.login}.JPG`}
            />
            <Typography style={{ fontSize: 12, fontWeight: 600, color: '#ffffff' }}>
              {membro.nome}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Membros;
