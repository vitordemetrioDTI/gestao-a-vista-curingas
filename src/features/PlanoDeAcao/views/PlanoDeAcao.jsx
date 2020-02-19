import React from "react";
import { Typography } from "@material-ui/core";

export const PlanoDeAcao = props => {
  return (
    <Typography
      style={{
        paddingBlockStart: "1em",
        fontSize: "1.7rem",
        fontWeight: "400",
        color: "#ffffff",
        marginBlockEnd: "15%"
      }}
    >
      {props.squad.PlanoDeAcao}
    </Typography>
  );
};

export default PlanoDeAcao;
