import React from 'react';
import { withStyles, Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const styles = () => ({
  media: {
    height: '64vh',
    paddingTop: 0
  }
});

class Evento extends React.Component {
  render() {
    const { evento, classes } = this.props;
    return (
      <Card>
        <CardMedia className={classes.media} image={evento.Imagem} />
        <CardContent>
          <Typography variant="h4">{evento.Responsavel}</Typography>
          <Typography variant="h5">{evento.Descricao}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Evento);
