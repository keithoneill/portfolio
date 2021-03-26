import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
import resume from '../images/KeithONeillResume.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    height: '100vh',
  }
}));

export default function Resume() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.root}>
        <img src={resume} alt="Keith O'Neill Resume" className={classes.image}/>
      </Container>
    </>
  );
}