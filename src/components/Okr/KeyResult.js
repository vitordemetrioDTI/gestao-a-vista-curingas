import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import ReactApexCharts from 'react-apexcharts';
import { map, chain } from 'lodash';
import moment from 'moment';

export const KeyResult = props => {
  const dataSet = chain(props.okr)
    .pickBy((value, key) => key.includes('/'))
    .map((value, key) => [moment(key, 'DD/MM/YYYY'), value])
    .orderBy((value, key) => key)
    .value();
  const categories = map(dataSet, data => data[0].format('D/M'));
  const target = map(dataSet, () => props.okr.Target);
  const values = map(dataSet, data => data[1]);
  return (
    <Grid container>
      <Grid item xs={10}>
        <Typography style={{ fontSize: '1rem', fontWeight: 300, color: '#ffffff' }}>
          {props.okr.KeyResult}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        {renderConfianca(props.okr.Confianca)}
      </Grid>
      <Grid item xs={12}>
        <ReactApexCharts
          options={{
            chart: {
              height: 20,
              type: 'line',
              background: 'rgba(41, 40, 61, 0)',
              toolbar: { show: false }
            },
            colors: ['#1c68b1', '#57bb8a'],
            fill: {
              type: 'solid',
              opacity: [0.5, 1]
            },
            legend: { show: false },
            theme: { mode: 'dark' },
            xaxis: {
              categories: categories
            }
          }}
          series={[
            {
              name: 'Okr',
              type: 'area',
              data: values
            },
            {
              name: 'Meta',
              type: 'line',
              data: target
            }
          ]}
          type="area"
          height={200}
        />
      </Grid>
    </Grid>
  );
};

const renderConfianca = confianca => {
  switch (confianca) {
    case 'Baixa':
      return (
        <SentimentDissatisfiedIcon
          fontSize="large"
          style={{ color: '#e95d6a' }}
        ></SentimentDissatisfiedIcon>
      );
    case 'Média':
      return (
        <SentimentSatisfiedIcon
          fontSize="large"
          style={{ color: '#f6b26b' }}
        ></SentimentSatisfiedIcon>
      );
    case 'Alta':
      return (
        <SentimentVerySatisfiedIcon
          fontSize="large"
          style={{ color: '#57bb8a' }}
        ></SentimentVerySatisfiedIcon>
      );
    default:
      return (
        <SentimentSatisfiedIcon
          fontSize="large"
          style={{ color: '#f6b26b' }}
        ></SentimentSatisfiedIcon>
      );
  }
};

export default KeyResult;
