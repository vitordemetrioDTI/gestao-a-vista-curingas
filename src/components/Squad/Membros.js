import React from 'react';
import { Grid, Badge, Avatar, Typography } from '@material-ui/core';
import EventAvailableIcon from '@material-ui/icons/EventAvailableRounded';
import moment from 'moment';

export const Membros = props => {
  return (
    <Grid container spacing={2} align="center">
      {props.membros.map(membro => {
        const crafter = props.crafters.find(crafter => crafter.email.includes(membro.login));
        const corStatusOneOnOne = corStatus(crafter.meeting);
        let avatar = (
          <Avatar
            style={{
              border: `8px solid ${corStatusOneOnOne}`,
              width: '8vw',
              height: '8vw',
              backgroundColor: corStatusOneOnOne
            }}
            src={`./images/fotos/${membro.login}.JPG`}
          />
        );
        if (membro.login === 'tiago.turibio') {
          avatar = (
            <Badge
              overlap="circle"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              badgeContent={
                <Avatar style={{ backgroundColor: corStatusOneOnOne, height: '3vw', width: '3vw' }}>
                  <EventAvailableIcon style={{ color: '#ffffff', height: '80%', width: '80%' }} />
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
            <Typography style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffffff' }}>
              {membro.nome}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

const corStatus = meeting => {
  if (!meeting) {
    return this.props.classes.Escalado;
  }
  const dias = moment().diff(moment(meeting.lastMeeting), 'days');
  if (dias < 21) {
    return '#57bb8a';
  } else if (dias < 30) {
    return '#f6b26b';
  } else if (dias < 45) {
    return '#e95d6a';
  } else {
    return '#505050';
  }
};

export default Membros;
