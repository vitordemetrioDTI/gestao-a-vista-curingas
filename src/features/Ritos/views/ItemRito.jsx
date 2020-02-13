import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { dateCell, andon, corFarolEstoque } from '../RitosUtils'

export const ItemRito = props => {
  const squad = props.squad;
  return [
    <Grid key="a" item container xs={2} style={{ minHeight: 160 }}>
      <Grid item container justify="center" direction="column">
        <Typography style={{ fontSize: 28, fontWeight: 900 }}>{squad.Squad}</Typography>
      </Grid>
    </Grid>,
    <Grid key="b" item container xs={10} justify="center">
      <Grid item xs={1} container justify="center" direction="column" align="center">
        {andon(squad.Andon)}
      </Grid>
      <Grid
        item
        xs={1}
        style={corFarolEstoque(squad.Estoque)}
        container
        justify="center"
        direction="column"
        align="center"
      >
        <Typography variant="h6" style={{ color: '#ffffff', fontWeight: 900 }}>
          {squad.Estoque}
        </Typography>
      </Grid>
      {dateCell(squad.CheckArquitetural)}
      {dateCell(squad.CheckExecucao)}
      {dateCell(squad.RetroSquad)}
    </Grid>
  ];
};

export default ItemRito;
