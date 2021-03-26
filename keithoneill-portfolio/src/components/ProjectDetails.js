import { React, useState } from 'react';
import { CssBaseline, Paper, Grid, Modal, Typography, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Background from '../images/gridpapersmall_vert.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  sidebar: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gif: {
    marginTop: 20,
    boxShadow: '6px 5px 5px #21201e',
    width: '92%'
  },
  gif2: {
    marginTop: 20,
    boxShadow: '6px 5px 5px #21201e',
    width: '40%',
    height: '50vh',
  },
  image: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    width: '45%',
    cursor: 'pointer',
    boxShadow: '6px 5px 5px #21201e',
  },
  imageContainer: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  modal: {
    position: 'absolute',
    width: '50vw',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #38A3A5',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    left: '25%',
  },
  modalImage: {
    height: '80%',
    width: '100%',
    textAlign: 'center',
  }
}));

export default function ProjectDetails(props) {
  const classes = useStyles();

  const [open01, setOpen01] = useState(false);
  const [open02, setOpen02] = useState(false);

  const handleOpen01 = () => {
    setOpen01(true);
  };

  const handleClose01 = () => {
    setOpen01(false);
  };

  const handleOpen02 = () => {
    setOpen02(true);
  };

  const handleClose02 = () => {
    setOpen02(false);
  };

  const body01 = (
    <div className={classes.modal}>
      <h2 id="simple-modal-title" style={{ textAlign: "center" }}>{props.title}</h2>
      <p id="simple-modal-description">
        <img src={props.image01} alt="Loading..." className={classes.modalImage} />
      </p>
    </div>
  );
  const body02 = (
    <div className={classes.modal}>
      <h2 id="simple-modal-title" style={{ textAlign: "center" }}>{props.title}</h2>
      <p id="simple-modal-description">
        <img src={props.image02} alt="Loading..." className={classes.modalImage} />
      </p>
    </div>
  );

  return (
    
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.sidebar}>
        {props.gif ? <img src={props.gif} alt="Loading..." className={classes.gif} /> : <img src={props.gif2} alt="Loading..." className={classes.gif2} />}
        <Hidden smDown>
          <div className={classes.imageContainer}>
            <img src={props.image01} alt="Loading..." className={classes.image} onClick={handleOpen01}/>
            <img src={props.image02} alt="Loading..." className={classes.image} onClick={handleOpen02}/>
            <Modal
              open={open01}
              onClose={handleClose01}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              >
              {body01}
            </Modal>
            <Modal
              open={open02}
              onClose={handleClose02}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              >
              {body02}
            </Modal>
          </div>
        </Hidden>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography variant="h3" style={{ textAlign: 'center' }} gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {props.job}
          </Typography>
          <Typography variant="body1" gutterBottom style={{ marginTop: '80px'}}>
            {props.description}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}