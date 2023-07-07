import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField, InputAdornment} from '@mui/material';
import List1 from './list1';
import Contact from './contact';
function SearchInput() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <TextField
        type="search"
        label="Rechercher un mot clé"
        variant='outlined'
        sx={{width: '60%',backgroundColor:'#f4f7fe',marginBottom:'65px',border:'none',borderRadius:'40px', '& .MuiTextField-root': {borderRadius: '40px',}, }}
        InputProps={{
          classes: {
            root: 'MuiTextField-root',
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton sx={{ color: '#fff', backgroundColor: '#445dc7', borderRadius: '40px', width: '150px', padding: '8px' }}>
                <Typography>
                  Recherche
                </Typography>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}


function Copyright() {
    return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 ,height:'5rem'}}>
      <BottomNavigation sx={{ backgroundColor: '#455cc7',justifyContent: 'flex-end',height:'5rem' }}>
        <Typography sx={{ color: '#fff', fontSize: '15px',marginTop:'20px'}}>
          Mention Légales | Privacy policy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Typography>
      </BottomNavigation>
    </Paper>
    );
}
function Navbar() {
  return (
  <>
  <Header />  
  <Grid container spacing={5}>
      <Grid item xs={12} sx={{backgroundColor: '#455cc7' , position: 'fixed', Top: 0, left: 0, right: 0 ,textAlign:'center' ,height:'300px'}}>
      <Typography variant="h1" component="h2" sx={{ color: '#fff', fontSize: '50px' ,marginTop:15 ,opacity:0.5 }}>
              Aide
      </Typography>
      </Grid>
  </Grid>
  </>  
 
  );
}
function Aide() {
  return (
    
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' , alignItems: 'center', height: '100%',marginTop:'12rem', marginLeft: '20px',marginRight:'20px',marginBottom:'14rem'}}>
      <Card sx={{ position: 'sticky',width:'90%' }}>
        <CardContent>
          <Typography variant="h3" sx={{ textAlign: 'center', fontFamily: 'sans-serif', fontSize: '40px' ,marginBottom:'65px'}}>
            Comment pouvons-nous vous aider ?
          </Typography>
          <SearchInput />
          <List1 />
          <Contact />
        </CardContent>
      </Card>
    </Box>
  );
}


const pages = ['Tableau de bord', 'Profil', 'Utilisateurs |Cartes','Services |Catégories','Consomation','Aide'];
const Langue = ['Fr'];
function Header(){
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event :any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return(
    <AppBar sx={{ position: 'fixed', Top: 0, left: 0, right: 0}}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Nadia Ajmaoui
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , justifyContent: 'center'}}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' ,fontSize: '12px',marginRight :'20px' }}
            >
              {page}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , justifyContent: 'center'}}>           
            <Button
              key={Langue[0]}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {Langue}
            </Button>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  )
}


export default function App() {
  return (
    <Grid container  >
     <Navbar />
     <Aide />
      <Box sx={{ my: 4 }}>
        <Copyright />
      </Box>
    </Grid>
  );
}
