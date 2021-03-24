import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, AppBar, Toolbar, Link, ClickAwayListener, IconButton } from '@material-ui/core';
import { Menu as MenuIcon, Person as PersonOutlineIcon, Receipt, ContactMail, ChevronRight as ChevronRightIcon } from '@material-ui/icons';
import Profile from '../images/KeithONeill_ProfilePic.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#22577A',
    color: '#ddd',
    width: '100vw',
  },
  text: {
    color: '#ddd',
  },
  picture: {
    width: '60%',
    alignSelf: 'center',
  },
  menuButton: {
    marginLeft: theme.spacing(5),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  subheader: {
    fontSize: '1.5rem',
    paddingLeft: '5rem',
    backgroundColor: '#ddd',
  },
}));


export default function Header() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const handleDrawerOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <AppBar position="static" className={classes.header}>
          <Toolbar>
            <div className={classes.title}>
              <Link href="/" style={{ textDecoration: 'none' }} >
                <Typography variant='h4' className={classes.text}>
                  Keith O'Neill
                </Typography>
              </Link>
            </div>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronRightIcon />
            </IconButton>
          </div>
          <img src={Profile} alt="Keith O'Neill" className={classes.picture} />
          <List>
            <Link href="/biography" style={{ textDecoration: 'none' }} >
              <ListItem button onClick={handleDrawerClose}>
                <ListItemIcon>
                  <PersonOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Keith O'Neill" />
              </ListItem>
            </Link>
            <Divider />
            <Link href="/resume" style={{ textDecoration: 'none' }} >
              <ListItem button onClick={handleDrawerClose}>
                <ListItemIcon>
                  <Receipt />
                </ListItemIcon>
                <ListItemText primary="Resume" />
              </ListItem>
            </Link>
            <Divider />
            <Link href="/contact" style={{ textDecoration: 'none' }} >
              <ListItem button onClick={handleDrawerClose}>
                <ListItemIcon>
                  <ContactMail />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItem>
            </Link>
            <Divider />
          </List>
        </Drawer>
      </div>
    </ClickAwayListener>
  );
}
