import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ButtonBase, Container, Typography, Link } from '@material-ui/core'

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageSubtitle: {
    position: 'relative',
    paddingTop: 200,
    color: '#ddd',
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function Projects(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://images.unsplash.com/photo-1525183480399-e8706926adac?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwzMzc0Mzg3fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      title: 'Certificate In Music Production',
      subtitle: 'Curriculum Designer',
      width: '50%',
      detail: 'mpcert',
    },
    {
      url:
        'https://images.unsplash.com/photo-1582259161965-663b6e55dfff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bG9jYXRpb24lMjBzb3VuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      title: 'A.A.S. In Music Production And Audio For Media',
      subtitle: 'Curriculum Designer',
      width: '50%',
      detail: 'mpam',
    },
    {
      url:
        'https://images.unsplash.com/photo-1524181294734-0d917cf54522?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw0MjQ4MTI4fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      title: 'Introduction To Audio Production',
      subtitle: 'eLearning Instructional Designer',
      width: '38%',
      detail: 'introtoaudio',
    },
    {
      url:
        'https://images.unsplash.com/photo-1524181385915-2104bc5514f1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzN8fG11c2ljJTIwcmVjb3JkaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      title: 'Pro Tools Native',
      subtitle: 'eLearning Instructional Designer',
      width: '38%',
      detail: 'protools',
    },
    {
      url:
        'https://images.unsplash.com/photo-1584697964190-7383cbee8277?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cXVpenxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      title: 'Online Quiz Maker',
      subtitle: 'Design And Development',
      width: '24%',
      detail: 'onlinequiz',
    },
    {
      url:
        'https://images.unsplash.com/photo-1615986201152-7686a4867f30?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c3RyZWFtaW5nJTIwbW92aWVzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      title: 'WhatchuWatchin',
      subtitle: 'Design And Development',
      width: '40%',
      detail: 'whatchuwatchin',
    },
    {
      url:
        'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWRlbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      title: 'New Student Orientation',
      subtitle: 'Training Specialist',
      width: '20%',
      detail: 'orientation',
    },
    {
      url:
        'https://images.unsplash.com/photo-1515603403036-f3d35f75ca52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMzQxNzMzfHxlbnwwfHx8&auto=format&fit=crop&w=800&q=60',
      title: 'Title IX Training',
      subtitle: 'Training Specialist',
      width: '40%',
      detail: 'titlenine',
    },
    {
      url:
        'https://images.unsplash.com/photo-1579684288538-c76a2fab9617?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHNjaWVuY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      title: 'Physics Of Sound',
      subtitle: 'Project Manager',
      width: '30%',
      detail: 'physicsofsound',
    },
    {
      url:
        'https://images.unsplash.com/photo-1583568671741-c75e1e2e4389?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWlkaXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      title: 'MIDI Synthesis and Sequencing',
      subtitle: 'Project Manager',
      width: '38%',
      detail: 'midisynth',
    },
    {
      url:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      title: 'Music Business',
      subtitle: 'Project Manager',
      width: '32%',
      detail: 'musicbusiness',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h3" marked="center" align="center" component="h2">
        Featured Projects
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
            <ButtonBase
              key={image.title}
              className={classes.imageWrapper}
              style={{
                width: image.width,
              }}
            >
              <Link href={image.detail} style={{ textDecoration: 'none' }}>
              <div
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <div className={classes.imageBackdrop} />
              <div className={classes.imageButton}>
                <Typography
                  component="h3"
                  variant="h6"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <div className={classes.imageMarked} />
                </Typography>
              </div>
              <div>
                <Typography className={classes.imageSubtitle} >
                  {image.subtitle}
                </Typography>
              </div>
              </Link>
            </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);