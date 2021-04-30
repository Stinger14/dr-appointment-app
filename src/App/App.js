import { CssBaseline, makeStyles } from '@material-ui/core';
import { createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Doctors from "../pages/Doctors/Doctors"

import './App.css';

const theme = createMuiTheme({
  pallete: {
    primary: {
      main: "#FF0000",
      light: "#3c44b126"
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526"
    },
    background: {
      default: "#f4f5fd"
    }
  },
  shape: {
    borderRadius: '12px'
  }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  return (
    // <></> === React.Fragment
    //? Replace fragments with ThemeProvider for customizing whole app theme
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Doctors />
      </div>
      {/* Adding common css rules with CssBaseline */}
      <CssBaseline /> 
    </ThemeProvider>
  );
}

export default App;
