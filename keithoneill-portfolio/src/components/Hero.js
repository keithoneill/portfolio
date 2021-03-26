import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import HeroLayout from './HeroLayout';
import Background from '../images/gridpapersmall.jpg'

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(8),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function Hero(props) {
  const { classes } = props;

  return (
    <HeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={Background} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center" style={{ marginTop: '30px' }}>
        Keith O'Neill
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        An experienced Instructional Designer with a background in Web Design and Development
      </Typography>
    </HeroLayout>
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);