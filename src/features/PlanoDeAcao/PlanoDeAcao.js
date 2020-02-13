import React from 'react';
import { Typography } from '@material-ui/core';

export const PlanoDeAcao = props => {
  return (
    <Typography style={{ fontSize: '1.2rem', fontWeight: 300, color: '#ffffff' }}>
      {props.squad.PlanoDeAcao}
    </Typography>
  );
};

export default PlanoDeAcao;
