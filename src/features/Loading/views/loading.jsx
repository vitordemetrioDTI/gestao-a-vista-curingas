import React from "react";
import Spinner from "react-spinkit";
import { withStyles } from "@material-ui/core";

const loading = props => {
  const { classes } = props;

  return props.loading ? (
    <div className={classes.overlayContent}>
      <div className={classes.wrapper}>
        <Spinner className={classes.spinner} name="pacman" fadeIn="none" color="yellow" />
        <span className={classes.message}>{props.message}</span>
      </div>
    </div>
  ) : null;
};

const styles = {
  overlayContent: {
    display: "flex",
    width: "100%",
    left: "0",
    top: "0",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    position: "fixed",
    zIndex: "999999",
    background: "#29283ddd",
    flexDirection: "column"
  },
  wrapper: {
    display: "inherit",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  message: {
    marginTop: "20px",
    color: "white",
    fontSize: "2rem",
    fontWeight: "bold",
    textShadow: "0 2px 5px black"
  },
  spinner: {
    color: "white",
    zIndex: "-1"
  },
  img: {
    height: "auto",
    width: "auto"
  }
};

export default withStyles(styles)(loading);
