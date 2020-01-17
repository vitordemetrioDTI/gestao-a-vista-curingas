import React from 'react';
import ReactApexCharts from 'react-apexcharts';

export const CheckExecucao = props => {
  const scores = Object.entries(props.squad).filter(entry => {
    return entry[0].includes('ScoreCE');
  });
  const categories = scores.map(entry => {
    return entry[0].replace('ScoreCE', '');
  });
  const data = scores.map(entry => {
    return entry[1];
  });
  return (
    <ReactApexCharts
      options={{
        chart: {
          height: 20,
          type: 'radar',
          background: '#29283d'
        },
        colors: ['#57bb8a'],
        fill: {
          colors: ['#57bb8a'],
          opacity: 0.9
        },
        theme: {
          mode: 'dark',
          palette: 'palette8'
        },
        xaxis: {
          categories: categories
        }
      }}
      series={[
        {
          name: '',
          data: data
        }
      ]}
      type="radar"
      height={500}
    />
  );
};

export default CheckExecucao;
