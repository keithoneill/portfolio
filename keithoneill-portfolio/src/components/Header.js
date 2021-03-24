import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, AppBar, Toolbar, Link, ClickAwayListener, IconButton } from '@material-ui/core';
import { Menu as MenuIcon, PersonOutline as PersonOutlineIcon, LockOpenOutlined as LockOpenOutlinedIcon, InfoOutlined as InfoOutlinedIcon, ChevronRight as ChevronRightIcon } from '@material-ui/icons';

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
    color: '#C7F9CC',
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
          <Divider />
          <List>
            <Link href="/login">
              <ListItem button onClick={handleDrawerClose}>
                <ListItemIcon>
                  <PersonOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItem>
            </Link>
            <Divider />
            <Link href="/register">
              <ListItem button onClick={handleDrawerClose}>
                <ListItemIcon>
                  <LockOpenOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Register" />
              </ListItem>
            </Link>
            <Divider />
            <Link href="/about">
              <ListItem button onClick={handleDrawerClose}>
                <ListItemIcon>
                  <InfoOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="About WhatchuWatchin" />
              </ListItem>
            </Link>
            <Divider />
          </List>
        </Drawer>
      </div>
    </ClickAwayListener>
  );
}
