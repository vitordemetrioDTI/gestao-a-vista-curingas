import React from "react";
import { Grid, Badge, Avatar, Typography, withStyles } from "@material-ui/core";
import EventAvailableIcon from "@material-ui/icons/EventAvailableRounded";
import { corStatus, selecionafoto } from "../membrosUtils";

export const membros = props => {
  const { classes } = props;

  return (
    <Grid container spacing={2} align="center">
      {props.membros.map(membro => {
        let corStatusOneOnOne = "#1c68b1";
        if (props.crafters) {
          const crafter = props.crafters.find(crafter => crafter.email.includes(membro.login));
          if (crafter !== undefined) corStatusOneOnOne = corStatus(crafter);
        }
        let avatar = (
          <Avatar
            className={classes.avatar}
            style={{
              border: `8px solid ${corStatusOneOnOne}`,
              backgroundColor: corStatusOneOnOne
            }}
            src={selecionafoto(membro)}
          />
        );
        if (membro.plano) {
          avatar = (
            <Badge
              overlap="circle"
              anchororigin={{
                vertical: "top",
                horizontal: "right"
              }}
              badgeContent={
                <Avatar
                  className={classes.marcadorPlanoDeAcao}
                  style={{
                    backgroundColor: membro.cor
                  }}
                >
                  <EventAvailableIcon className={classes.evento} />
                </Avatar>
              }
            >
              {avatar}
            </Badge>
          );
        }
        return (
          <Grid item xs={4} key={membro.login}>
            {avatar}
            <Typography className={classes.typography}>{membro.nome}</Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

const styles = estilo => ({
  typography: {
    fontSize: "1.6rem",
    fontWeight: 600,
    color: "#ffffff"
  },
  marcadorPlanoDeAcao: {
    height: "3vw",
    width: "3vw"
  },
  evento: {
    color: "#ffffff",
    height: "80%",
    width: "80%"
  },
  avatar: {
    width: "8vw",
    height: "8vw"
  }
});

export default withStyles(styles)(membros);
