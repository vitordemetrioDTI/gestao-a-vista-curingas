import React from 'react';
import { TableRow, TableCell, Typography, withStyles } from '@material-ui/core';
import { corStatus } from '../RetroUtils'

const styles = () => ({
  Pendente: {
    backgroundColor: '#e95d6a'
  },
  Concluido: {
    backgroundColor: '#57bb8a'
  },
  Andamento: {
    backgroundColor: '#6fa8dc'
  },
  Cancelado: {
    backgroundColor: '#303030'
  }
});

class ItemRetro extends React.Component {
  state = {
    editarItem: false
  };
  render() {
    const { item } = this.props;
    return (
      <TableRow>
        <TableCell padding="none">
          <Typography style={{ fontSize: 32, fontWeight: 600 }}>{item.Acao}</Typography>
        </TableCell>
        <TableCell padding="none">
          <Typography style={{ fontSize: 24, fontWeight: 300, fontStyle: 'italic' }}>
            {item.Responsavel}
          </Typography>
        </TableCell>
        <TableCell className={corStatus(item.Status, this.props.classes)} align="center" padding="none">
          <Typography align="center" style={{ fontSize: 24, fontWeight: 200, color: '#ffffff' }}>
            {item.Status}
          </Typography>
        </TableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(ItemRetro);
