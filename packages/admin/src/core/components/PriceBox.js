import React, { useEffect, useState, useCallback } from 'react';
import { withStyles } from '@material-ui/core/styles';
import API from '../axios';

const styles = {
  root: {
    maxWidth: '800px',
    maxHeight: '600px',
  },
};

const PriceBox = props => {
  const [price, setPrice] = useState(0);

  const fetchPrice = useCallback(() => {
    API.get('events/services/done')
      .then(response => {
        const newPrice = response.data.reduce(function(acc, value) {
          return acc + value.price;
        }, 0);
        setPrice(newPrice);
      })
      .catch(err => {
        console.log(err);
      });
  }, [setPrice]);

  useEffect(() => {
    fetchPrice();
  }, [fetchPrice]);

  return (
    <div className={props.classes.root}>
      <h3>{price}</h3>
    </div>
  );
};

export default withStyles(styles)(PriceBox);
