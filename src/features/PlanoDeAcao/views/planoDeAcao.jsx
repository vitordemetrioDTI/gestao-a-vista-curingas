import React from "react";
import { Typography, withStyles } from "@material-ui/core";

export const planoDeAcao = props => {
  const { classes } = props;

  console.log(props);

  const planosDeAcao = props.membros.map(membro => {
    if (membro.plano !== "") {
      return (
        <Typography key={membro.login} className={classes.typography}>
          {membro.plano}
        </Typography>
      );
    } else {
      return null;
    }
  });
  return planosDeAcao;
};

const styles = estilo => ({
  typography: {
    paddingBlockEnd: "0.5em",
    fontSize: "1.7rem",
    fontWeight: "400",
    color: "#ffffff"
  }
});

export default withStyles(styles)(planoDeAcao);
