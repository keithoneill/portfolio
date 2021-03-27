import React from 'react';
import { CssBaseline, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Profile from '../images/KeithONeill_ProfilePic.png';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '80vh',
  },
  picture: {
    width: '20%',
    marginBottom: '20px',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="footer">
      <CssBaseline />
      <Container component="main" className={classes.main} >
        <img src={Profile} alt="Keith O'Neill" className={classes.picture} />
      <Typography variant="h5" component="h2" gutterBottom>
        Keith O’Neill is a Senior Instructional Designer and Instructor for Atlanta Institute of Music and Media. 
        He is responsible for developing online courses for the Music Production and Audio for Media courses, supervising audio and video production of course content, and supervising the creative content and marketing initiatives for AIMM Online. 
        In addition, Keith also teaches several courses on campus including Pro Tools and Mastering classes. 
        He is an Avid Certified Expert Instructor, an Avid Certified Expert in Music, an Avid Certified User in Game Audio, and an Apple Certified Mastered for iTunes Engineer. 
        Keith has worked on countless productions in many genres and currently works primarily as a mastering engineer for clients all over the world. 
        He holds a Certificate Degree in Music Production from Atlanta Institute of Music and Media and a Bachelor’s Degree in Web Design and Development from Full Sail University.
        He is currently pursuing a Masters Degree in Instructional Design from Full Sail University. 
        In his free time, he enjoys listening to music, playing board games, and spending time with his family. 
        If you are in the Atlanta are you may catch him at a live show, just keep an eye out for his distinguishing long hair and glasses.
      </Typography>
      </Container>
    </div>
  );
}