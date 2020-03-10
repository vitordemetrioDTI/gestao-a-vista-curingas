import React from "react";
import { withStyles, Typography, Grid } from "@material-ui/core";
import Cadencia from "./Cadencia";
import GembaCheck from "./GembaCheck";
import CheckExecucao from "./CheckExecucao";
import PlanoDeAcao from "./PlanoDeAcao";
import { Membros } from "./Membros";

export const Squad = props => {
  const { classes } = props;

  return (
    <div className={classes.page} style={{ backgroundImage: `url(${props.squad.Cover})` }}>
      <div className={classes.degrade}>
        <Typography className={classes.tituloPrincipal}>{props.squad.Squad}</Typography>
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item container xs={8} spacing={4} alignItems="flex-start">
            <Grid item xs={12}>
              <Cadencia squad={props.squad} />
            </Grid>

            <Grid item xs={6} align="center">
              <Typography className={classes.titulo}>Gemba Check</Typography>
              <GembaCheck squad={props.squad} />
            </Grid>
            <Grid item xs={6} align="center">
              <Typography className={classes.titulo}>Check de Execução</Typography>
              <CheckExecucao squad={props.squad} />
            </Grid>

            <Grid item xs={12} align="center">
              <Typography className={classes.planoDeAcao}>Plano de Ação</Typography>
              <PlanoDeAcao membros={props.membros} />
              <Typography style={{ marginBlockEnd: "250px" }}> </Typography>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Membros crafters={props.crafters} membros={props.membros} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const styles = {
  planoDeAcao: {
    fontSize: "2rem",
    fontWeight: 900,
    color: "#ffffff",
    marginBlockEnd: "2%",
    marginTop: "-100px"
  },
  titulo: {
    fontSize: "2rem",
    fontWeight: 900,
    color: "#ffffff"
  },
  degrade: {
    width: "auto",
    height: "auto",
    backgroundColor: "#29283ddd",
    overflow: "hidden"
  },
  tituloPrincipal: {
    padding: 16,
    fontSize: "2.2rem",
    fontWeight: 600,
    color: "#ffffff",
    marginLeft: "2%"
  },
  page: {
    width: "auto",
    height: "auto",
    backgroundSize: "cover",
    overflow: "hidden"
  }
};

export default withStyles(styles)(Squad);
