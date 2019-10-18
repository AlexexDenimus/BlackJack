import { withStyles } from '@material-ui/core/styles';

const styles = {
  price: { color: 'purple' },
};

const PriceField = withStyles(styles)(({ type, ...props }) => (
  <TextField className={type} {...props} />
));
