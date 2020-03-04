import React from "react";
import { Typography, withStyles, Avatar, Box } from "@material-ui/core";

export const planoDeAcao = props => {
  const { classes } = props;

  const planosDeAcao = props.membros.map(membro => {
    if (membro.plano) {
      return (
        <Box key={membro.login} display="flex" flexDirection="row" justifyContent="center">
          <Box p={1} flexDirection="row">
            <Avatar className={classes.avatar} style={{ backgroundColor: membro.cor }}>
              <Typography className={classes.numero}>♠</Typography>
            </Avatar>
          </Box>
          <Box>
            <Typography key={membro.login} className={classes.typography}>
              {membro.plano}
            </Typography>
          </Box>
        </Box>
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
    fontSize: "1.4rem",
    fontWeight: "400",
    color: "#ffffff"
  },
  avatar: {
    height: "20px",
    width: "20px"
  }
});

export default withStyles(styles)(planoDeAcao);
