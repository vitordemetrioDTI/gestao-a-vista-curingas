import React from "react";
import { Grid, Badge, Avatar, Typography } from "@material-ui/core";
import EventAvailableIcon from "@material-ui/icons/EventAvailableRounded";
import { corStatus } from "../MembrosUtils";

export const Membros = props => {
  return (
    <Grid container spacing={2} align="center">
      {props.membros.map(membro => {
        let corStatusOneOnOne = "#1c68b1";
        if (props.crafters) {
          const crafter = props.crafters.find(crafter =>
            crafter.email.includes(membro.login)
          );
          corStatusOneOnOne = corStatus(crafter.meeting, props);
        }

        let avatar = (
          <Avatar
            style={{
              border: `8px solid ${corStatusOneOnOne}`,
              width: "8vw",
              height: "8vw",
              backgroundColor: corStatusOneOnOne
            }}
            src={`./images/fotos/${membro.login}.JPG`}
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
                  style={{
                    backgroundColor: corStatusOneOnOne,
                    height: "3vw",
                    width: "3vw"
                  }}
                >
                  <EventAvailableIcon
                    style={{ color: "#ffffff", height: "80%", width: "80%" }}
                  />
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
            <Typography
              style={{
                fontSize: "1.6rem",
                fontWeight: 600,
                color: "#ffffff"
              }}
            >
              {membro.nome}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Membros;
