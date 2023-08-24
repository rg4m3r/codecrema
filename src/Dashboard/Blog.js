import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blogpost1.txt';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import { red,blue} from '@mui/material/colors';

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

const posts = [post1, post2, post3];

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

// TODO remove, this demo shouldn't need to reset the theme.
const theme = createTheme({
    palette: {
        mode: 'dark',

      primary: {
        main: blue[300],

      },
      secondary:{
        main: blue[300],
      },
    },
  });
export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
      <Header title="Code Crema" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} style={{width:"100%"}} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Inscribete ahora!" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title=""
        description="Atrévete a aprender algo nuevo!"
      />
    </ThemeProvider>
  );
}
