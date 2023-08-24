import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import logo from '../Img/mug-hot-solid.png';
import '../App.css';
import { createTheme, alpha, getContrastRatio,  ThemeProvider } from '@mui/material/styles';
const green = '#3e77f2';
const black = '#32353f'
const blackMain = alpha(black, .7);

const violetMain = alpha(green, .7);
const theme = createTheme({
  palette: {
    violet: {
      main: violetMain,
      light: alpha(green, 0.9),
      dark: alpha(green, 0.9),
      contrastText: getContrastRatio(violetMain, '#fff') > 1 ? '#fff' : '#111',
    },
    black: {
      main: blackMain,
      light: alpha(black, 0.9),
      dark: alpha(black, 0.9),
      contrastText: getContrastRatio(blackMain, '#fff') > 1 ? '#fff' : '#111',
    },
  },
});
function Header(props) {
  const { sections, title } = props;

  return (
    
    <React.Fragment >
      <ThemeProvider theme={theme}>
              
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', justifyContent:'center' }}>
        < IconButton sx={{}}>
          <img src={logo} alt="Logo" width="40" height="40" />
        </IconButton>        
        <Typography
          component="h3"
          variant="h4"
          color="black"
          align="center"
          sx={{ marginLeft:"10rem", marginRight:"10rem" }}
        >
          <div className="HeadTitle">{title}</div>
        </Typography>

        <Button sx={{ }} variant="contained" color="violet" size="large" disableElevation>
          Sign Up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'center', overflowX: 'auto' }}
      >
        
      </Toolbar>
      </ThemeProvider>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
