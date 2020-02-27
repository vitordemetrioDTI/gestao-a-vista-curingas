import React from "react";
import {
  MuiThemeProvider,
  AppBar,
  Tabs,
  Tab,
  Fab,
  withStyles,
  Paper,
  Typography
} from "@material-ui/core";
import { map } from "lodash";
import Theme from "./Theme";
import PauseButton from "@material-ui/icons/Pause";
import PlayButton from "@material-ui/icons/PlayArrow";
import Squad from "./features/Squad";
import SquadRepo from "./features/SquadRepo";
import OneOnOneRepo from "./features/OneOnOne";
import { Okr, OkrRepo } from "./features/Okr";
import { MembrosRepo } from "./features/Membros";

const styles = theme => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  pageView: {
    height: `calc(100vh - 48px)`,
    backgroundColor: "#29283d",
    borderRadius: 0
  }
});

class App extends React.Component {
  state = {
    index: 0,
    play: true
  };

  componentWillMount() {
    OneOnOneRepo.listarCuringas().then(crafters => {
      this.setState({
        crafters: crafters
      });
    });
    SquadRepo.listarSquads().then(squads => {
      MembrosRepo.listarMembros().then(todosMembros => {
        const membros = [];
        squads.forEach(squad => {
          var membrosSquad = todosMembros.filter(resposta =>
            resposta.squad.includes(squad.Squad)
          );
          membros.push(membrosSquad);
        });
        this.setState({
          squads: squads,
          membros: membros
        });
      });
    });
    OkrRepo.listarOkrs().then(okrs => {
      this.setState({ okrs: okrs });
    });
    this.timer = setInterval(() => {
      if (this.state.play) {
        const stateIndex = this.state.index + 1;
        const squadsLengthPlus = this.state.squads.length + 1;
        const newIndex = stateIndex % squadsLengthPlus;
        this.setState({
          index: newIndex
        });
      }
    }, 30 * 1000);
  }
  handleChange = (e, value) => {
    this.setState({ index: value });
  };
  handleClick = () => {
    this.setState({ play: !this.state.play });
  };

  render() {
    const { index, squads, crafters, okrs, membros } = this.state;
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={Theme}>
        <AppBar position="static">
          <Tabs
            value={index}
            onChange={this.handleChange}
            style={{ flexGrow: 1 }}
          >
            {map(squads, (squad, i) => {
              return (
                <Tab wrapped key={squad.Squad} label={squad.Squad} value={i} />
              );
            })}
            {okrs && squads && (
              <Tab wrapped key="okr" label="Okrs" value={squads.length} />
            )}
          </Tabs>
          <Typography
            variant="overline"
            style={{ position: "absolute", right: "16px", top: "24px" }}
          ></Typography>
        </AppBar>
        {// Só será executado quando o state membros estiver inicializado... Garantindo que a será enviado a props na ordem correta
        this.state.membros &&
          map(squads, (squad, i) => {
            return (
              <Paper
                className={classes.pageView}
                hidden={index !== i}
                key={squad.Squad}
              >
                <Squad squad={squad} crafters={crafters} membros={membros[i]} />
              </Paper>
            );
          })}
        {squads && okrs && (
          <Paper
            style={{
              // Scroll ativo
              width: "auto",
              height: "auto",
              backgroundColor: "#29283ddd",
              overflow: "hidden",
              paddingBottom: "7%"
            }}
            hidden={index < squads.length}
            key={"okr"}
          >
            <Okr okrs={okrs} />
          </Paper>
        )}

        <Fab
          style={{ position: "fixed", bottom: "10px", right: "10px" }}
          onClick={this.handleClick}
          className={classes.fab}
          color="secondary"
        >
          {this.state.play ? (
            <PauseButton style={{ color: "#ffffff" }} />
          ) : (
            <PlayButton style={{ color: "#ffffff" }} />
          )}
        </Fab>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
