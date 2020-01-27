import React, { useEffect, useState, useCallback } from 'react';
import { Bar } from 'react-chartjs-2';
import { withStyles } from '@material-ui/core/styles';
import API from '../axios';

const styles = {
  root: {
    maxWidth: '800px',
    maxHeight: '600px',
  },
};

const barChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        barPercentage: 1,
        gridLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          beginAtZero: true,
          stepSize: 1,
        },
      },
    ],
  },
};

const BarChart = props => {
  const [barData, setBarData] = useState({});

  const fetchBarData = useCallback(() => {
    API.get('events/done/services')
      .then(response => {
        const data = {
          labels: response.data.map(value => {
            return value._id;
          }),
          datasets: [
            {
              label: 'Сделано заказов',
              data: response.data.map(value => {
                return value.count;
              }),
              backgroundColor: [
                'rgba(255, 134,159,0.4)',
                'rgba(98,  182, 239,0.4)',
                'rgba(255, 218, 128,0.4)',
                'rgba(113, 205, 205,0.4)',
                'rgba(170, 128, 252,0.4)',
                'rgba(255, 177, 101,0.4)',
              ],
              borderWidth: 2,
              borderColor: [
                'rgba(255, 134, 159, 1)',
                'rgba(98,  182, 239, 1)',
                'rgba(255, 218, 128, 1)',
                'rgba(113, 205, 205, 1)',
                'rgba(170, 128, 252, 1)',
                'rgba(255, 177, 101, 1)',
              ],
            },
          ],
        };
        setBarData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [setBarData]);

  useEffect(() => {
    fetchBarData();
  }, [fetchBarData]);

  return (
    <div className={props.classes.root}>
      <Bar data={barData} options={barChartOptions} />
    </div>
  );
};

export default withStyles(styles)(BarChart);
