import React, { useEffect, useState, useCallback } from 'react';
import { Pie } from 'react-chartjs-2';
import { withStyles } from '@material-ui/core/styles';
import API from '../axios';

const styles = {
  root: {
    maxWidth: '800px',
    maxHeight: '600px',
  },
};

const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
};

const PieChart = props => {
  const [pieData, setPieData] = useState({});

  const fetchPieData = useCallback(() => {
    API.get('events/barbers/done')
      .then(response => {
        const data = {
          labels: response.data.map(value => {
            return value._id;
          }),
          datasets: [
            {
              data: response.data.map(value => {
                return value.count;
              }),
              backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', '#AC64AD'],
              hoverBackgroundColor: [
                '#FF5A5E',
                '#5AD3D1',
                '#FFC870',
                '#A8B3C5',
                '#616774',
                '#DA92DB',
              ],
            },
          ],
        };
        setPieData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [setPieData]);

  useEffect(() => {
    fetchPieData();
  }, [fetchPieData]);

  return (
    <div className={props.classes.root}>
      <Pie data={pieData} options={pieChartOptions} />
    </div>
  );
};

export default withStyles(styles)(PieChart);
