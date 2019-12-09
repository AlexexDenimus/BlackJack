// in src/Dashboard.js
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { withStyles } from '@material-ui/core/styles';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import PriceBox from './components/PriceBox';

const styles = {
  root: {
    width: '80%',
    margin: 'auto',
  },
  mainCard: {
    marginBottom: '16px',
  },
  graphField: {
    maxWidth: '650px',
    flexGrow: '1',
  },
  flexField: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginTop: '16px',
  },
  price: {
    textAlign: 'center',
    fontSize: '36px',
  },
};

function Dashboard(props) {
  return (
    <div className={props.classes.root}>
      <Card mb="16px" className={props.classes.mainCard}>
        <CardHeader title="Панель администратора" />
        <CardContent>Анализ работы заведения</CardContent>
      </Card>
      <div className={props.classes.flexField}>
        <Card className={props.classes.graphField}>
          <CardHeader title="График популярности услуг" />
          <CardContent>
            <BarChart />
          </CardContent>
        </Card>
        <Card className={props.classes.graphField}>
          <CardHeader title="График популярности барберов" />
          <CardContent>
            <PieChart />
          </CardContent>
        </Card>
      </div>
      <div className={props.classes.flexField}>
        <Card className={props.classes.graphField}>
          <CardHeader title="Всего заработано" />
          <CardContent className={props.classes.price}>
            <PriceBox />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default withStyles(styles)(Dashboard);
