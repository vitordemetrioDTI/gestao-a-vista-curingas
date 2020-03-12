import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { obterCorBackground, verificaData } from "../cadenciaUtils";

let estiloTitulo = { fontSize: "1.6rem", fontWeight: 300, color: "#ffffff" };

export const cadencia = props => {
  return (
    <Grid container align="center">
      <Grid item xs={4}>
        <Typography style={estiloTitulo}>Check Arquitetural</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography style={estiloTitulo}>Check de Execução</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography style={estiloTitulo}>Retro do Squad</Typography>
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
  let dataVerificada = verificaData(data);
  let backgroundColor = obterCorBackground(data, dataVerificada);
  return (
    <Typography
      style={{
        width: "80%",
        fontSize: "3rem",
        fontWeight: 900,
        backgroundColor: backgroundColor,
        color: "#ffffff"
      }}
    >
      {dataVerificada}
    </Typography>
  );
};

export default cadencia;
