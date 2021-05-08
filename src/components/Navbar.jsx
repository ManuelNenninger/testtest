
import "./Navbar.css";

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'transparent',
    color: "#3E5659;",
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "Poppins",
  },
  typography: {
    fontFamily: "Poppins",
  },

}));



export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div >

      <AppBar position="static" classes={{root: classes.root}}>
        <Toolbar >
          <Typography variant="h6" className={classes.title}>
            Manuel Nenninger
          </Typography>
          <Button color="inherit" className={classes.typography} >Login</Button >
        </Toolbar>
      </AppBar>

    </div>
  );
}
