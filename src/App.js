import React from 'react';
import { MuiThemeProvider, AppBar, Tabs, Tab, Fab, withStyles, Paper } from '@material-ui/core';
import Theme from './Theme';
import PauseButton from '@material-ui/icons/Pause';
import PlayButton from '@material-ui/icons/PlayArrow';
import Squad from './components/Squad/Squad';
import SquadRepo from './repos/SquadRepo';
import CuringasRepo from './repos/CuringasRepo';

const pages = [0, 1, 2, 3];

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  pageView: {
    height: `calc(100vh - 48px)`,
    backgroundColor: '#29283d',
    borderRadius: 0
  }
});

class App extends React.Component {
  state = {
    index: 0,
    page: 0,
    play: true
  };

  componentDidMount() {
    CuringasRepo.listarCuringas().then(crafters => {
      this.setState({
        crafters: crafters
      });
    });
    SquadRepo.listarSquads().then(squads => {
      this.setState({
        squads: squads
      });
    });
    this.timer = setInterval(() => {
      if (this.state.play) {
        const newIndex = (this.state.index + 1) % pages.length;
        this.setState({
          index: newIndex,
          page: pages[newIndex]
        });
      }
    }, 30 * 1000);
  }

  handleChange = (e, value) => {
    this.setState({ page: value });
  };

  handleClick = () => {
    this.setState({ play: !this.state.play });
  };

  render() {
    const { page, squads, crafters } = this.state;
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={Theme}>
        <AppBar position="static">
          <Tabs value={page} onChange={this.handleChange} style={{ flexGrow: 1 }}>
            {squads && crafters &&
              squads.map(squad => {
                return <Tab wrapped label={squad.Squad} />;
              })}
          </Tabs>
        </AppBar>

        {squads && crafters && (
          <Paper className={classes.pageView}>
            <Squad squad={squads[page]} crafters={crafters}></Squad>
          </Paper>
        )}

        {/* {page === 2 && <OneOnOne />} */}

        <Fab onClick={this.handleClick} className={classes.fab} color="secondary">
          {this.state.play ? (
            <PauseButton style={{ color: '#ffffff' }} />
          ) : (
            <PlayButton style={{ color: '#ffffff' }} />
          )}
        </Fab>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
