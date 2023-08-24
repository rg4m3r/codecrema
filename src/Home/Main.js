import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, alpha, getContrastRatio,  ThemeProvider } from '@mui/material/styles';
import Footer from '../Dashboard/Footer';
import Header from './HeaderMain';
import { red,blue} from '@mui/material/colors';
import CustomTitle from './CustomTitle';
import '../App.css';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import MyIcon  from '../Img/logo.svg';

const sections = [
  { title: 'Technology', url: '#' },

];

const mainFeaturedPost = {
  title: 'La mejor escuela de programación de México!',
  description:
    "Somos una empresa dedicada a la enseñanza de programación, con el objetivo de formar a los mejores programadores del país.",
  image: 'https://source.unsplash.com/random?code',
  imageText: 'main image description',
  linkText: '',
};

const featuredPosts = [
  {
    title: 'React',
    date: '11 de Agosto, 2023',
    description:
      'Diseño de aplicaciones web con React, el framework más popular del momento!',
    image: 'https://source.unsplash.com/random?Website',
    imageLabel: 'Image Text',
  },
  {
    title: 'Unity',
    date: '11 de Agosto, 2023',
    description:
      'Aprende a diseñar videojuegos para cualquier plataforma o consola!',
    image: 'https://source.unsplash.com/random?Videogames',
    imageLabel: 'Image Text',
  },
];


const sidebar = {
  title: 'Acerca de nosotros',
  description:
    'Somos una empresa dedicada a la enseñanza de programación, con el objetivo de formar a los mejores programadores del país.',
  archives: [
    { title: 'Agosto 2023', url: '#' },
    { title: 'Septiembre 2023', url: '#' },

  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon }
  ],
};
const violetBase = '#3e77f2';
const violetMain = alpha(violetBase, 0.7);
// TODO remove, this demo shouldn't need to reset the theme.
const theme = createTheme({
  palette: {
    violet: {
      main: violetMain,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
});
export default function mainScreen() {
  return (
    <div>
        <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="code crema"/>
        <div className='main'>
        <div className='mainContainer'>
          <div className="welcomeMessage">
            <h1>Turn your ideas into a <span>success.</span></h1>
            <h2>Webbee will make your product look modern and professional while saving you precious time.</h2>
            <Box m={2} textAlign={"center"} alignItems={"center"} sx={{ '& button': { m: 2 } }}>
            <Button className="signers" variant="outlined" color="violet" size="large" disableElevation>
              Sign Up
            </Button>
            <Button className="signers" variant="contained" color="violet" size="large" disableElevation>
              Sign Up
            </Button>
            
            </Box>
            
          </div>
          
          <div className='imageContainer'>
          <img src={MyIcon} />
          </div>

        </div>
        
        </div>

      <Footer mt={50}
        title=""
        description="CodeCrema "
      />
    </ThemeProvider>
    </div>
  );
}
