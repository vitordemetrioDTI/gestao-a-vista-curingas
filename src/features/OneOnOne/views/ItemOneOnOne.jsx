import React from 'react';
import {
  Typography,
  withStyles,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  CardMedia
} from '@material-ui/core';
// import AssignmentIcon from '@material-ui/icons/Assignment';
// import LinesEllipsis from 'react-lines-ellipsis';
import moment from 'moment';
import { corStatus, prettyName } from '../OneOnOneUtils'

const styles = () => ({
  Atrasado: {
    backgroundColor: '#e95d6a'
  },
  EmDia: {
    backgroundColor: '#57bb8a'
  },
  Proximo: {
    backgroundColor: '#f6b26b'
  },
  Escalado: {
    backgroundColor: '#505050'
  }
});

class ItemOneOnOne extends React.Component {
  render() {
    const { crafter } = this.props;
    return (
      <Grid item xs={1}>
        <Card className={corStatus(crafter.meeting, this.props.classes)}>
          <CardMedia
            style={{ height: '22vh' }}
            image={`./images/fotos/${crafter.email.split('@')[0]}.JPG`}
          />
          {/* <CardHeader
            style={{ paddingBottom: 0 }}
            avatar={
              <Avatar
                src={`./images/fotos/${crafter.email.split('@')[0]}.JPG`}
                style={{ width: 120, height: 120, backgroundColor: '#1c68b1' }}
              >
                <Typography align="justify" style={{ fontSize: 40, fontWeight: 300, color: '#ffffff' }}>
                  {crafter.name[0]}
                </Typography>
              </Avatar>
            }
            title={
              <Typography
                align="left"
                style={{
                  fontSize: 18,
                  fontWeight: 900,
                  color: '#ffffff',
                  minHeight: 140,
                  textTransform: 'capitalize'
                }}
              >
                {crafter.name}
              </Typography>
            }
          /> */}
          <CardContent style={{ minHeight: 64 }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  align="left"
                  style={{
                    fontSize: 16,
                    fontWeight: 900,
                    color: '#ffffff',
                    minHeight: 140,
                    textTransform: 'capitalize'
                  }}
                >
                  {crafter.name}
                  {/* {this.prettyName(crafter.email)} */}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography style={{ fontSize: 16, fontWeight: 700, color: '#ffffff' }}>
                  {crafter.meeting ? moment(crafter.meeting.lastMeeting).format('DD/MM') : '-'}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  style={{ fontSize: 16, fontWeight: 200, color: '#ffffff' }}
                  noWrap={true}
                >
                  {crafter.meeting ? crafter.meeting.leader : '-'}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  }


}

export default withStyles(styles)(ItemOneOnOne);
