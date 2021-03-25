import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link, Container, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#22577A',
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  icon: {
    color: '#ddd',
    width: 50,
    height: 78,
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h4" gutterBottom>
              Contact:
            </Typography>
            <Typography variant="h5" >
              <Link href="mailto:keithaoneill83@gmail.com" style={{ textDecoration: 'none', color: '#ddd' }}>keithaoneill83@gmail.com</Link>
              <Link href="/resume" style={{ textDecoration: 'none', color: '#ddd', marginLeft: '80px' }}>Resume</Link>
              <Link href="/biography" style={{ textDecoration: 'none', color: '#ddd', marginLeft: '80px' }}>Biography</Link>
              <Link href="https://www.linkedin.com/in/keith-o-neill-280179133/" style={{ textDecoration: 'none', color: '#ddd', marginLeft: '80px' }}>LinkedIn</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}