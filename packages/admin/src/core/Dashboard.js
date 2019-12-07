// in src/Dashboard.js
import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { withStyles } from '@material-ui/core/styles';
import BarChart from './components/BarChart';

const styles = {
  mainCard: {
    marginBottom: '16px',
  },
  graphField: {
    maxWidth: '650px',
  },
};

function Dashboard(props) {
  return (
    <Fragment>
      <Card mb="16px" className={props.classes.mainCard}>
        <CardHeader title="Welcome to the administration" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
      </Card>
      <Card className={props.classes.graphField}>
        <CardHeader title="График популярности услуг" />
        <CardContent>
          <BarChart />
        </CardContent>
      </Card>
    </Fragment>
  );
}

export default withStyles(styles)(Dashboard);
