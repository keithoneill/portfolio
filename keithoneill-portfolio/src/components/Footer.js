import React from 'react';
import { CssBaseline, Typography, Container, Link, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReceiptIcon from '@material-ui/icons/Receipt';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '80vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: '#264653',
    textAlign: 'center',
    color: '#ddd',
  },
  links: {
    color: '#264653',
    paddingLeft: 8,
    '&:hover': {
      boxShadow: '2px 2px 7px #21201e',
      marginTop: 5,
      marginLeft: 5,
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="footer">
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Contact
        </Typography>
          <List>
            <Link href="mailto:keithaoneill83@gmail.com" style={{ textDecoration: 'none' }} >
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary={<Typography variant='h5' className={classes.links}>keithaoneill83@gmail.com</Typography>}/>
              </ListItem>
            </Link>
            <Link href="/resume" style={{ textDecoration: 'none' }} >
              <ListItem>
                <ListItemIcon>
                  <ReceiptIcon />
                </ListItemIcon>
                <ListItemText primary={<Typography variant='h5' className={classes.links}>Resume</Typography>}/>
              </ListItem>
            </Link>
            <Link href="https://www.linkedin.com/in/keith-o-neill-280179133/" style={{ textDecoration: 'none' }} >
              <ListItem>
                <ListItemIcon>
                  <LinkedInIcon />
                </ListItemIcon>
                <ListItemText primary={<Typography variant='h5' className={classes.links}>LinkedIn</Typography>}/>
              </ListItem>
            </Link>
          </List>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Keith O'Neill - Instructional Designer</Typography>
        </Container>
      </footer>
    </div>
  );
}