import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8cc641',
    },
    neutral: {
      main: '#fff',
      contrastText: '#c2caec',
    },  
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    neutral: true;
  }
}

const pages = ['Transactions', 'Contrat', 'Les Utilisateurs', 'Tartifs'];
export default function Contact() {

const [nom, setNom] = useState('');
const [prenom, setPrenom] = useState('');
const [email, setEmail] = useState('');
const [tel, setTel] = useState('');
const [objet, setObj] = useState('');
const [message, setMessage] = useState('');

const data =() =>{
  console.log('Nom', nom);
  console.log('Prenom', prenom);
  console.log('Email', email);
  console.log('Tel', tel);
  console.log('Objet', objet);
  console.log('Message', message);
}
  return (
    <ThemeProvider theme={theme}>  
    <Grid   alignItems="flex-start" sx={{marginTop:'25px'  , marginRight:'-20px'}}>
      <Box>
        <Card sx={{ backgroundColor: '#455dc6', color: '#fff', width: '100%', height: '700px' ,paddingTop:'30px'}}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid container >
                  <Grid item xs={12}>
                    <Typography sx={{ fontSize: '40px', padding: '25px', textAlign: 'center',fontFamily:'serif' }}>
                      Vous ne trouvez pas ce que vous cherchez ?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} >
                    <Typography sx={{ fontWeight:'200',fontSize: '13px', padding: '25px', textAlign: 'center',marginTop:'-13rem' }}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, necessitatibus quas officiis doloribus eligendi fugit quam delectus obcaecati </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Divider orientation="vertical" flexItem sx={{ backgroundColor: '#fff' }} />
              <Grid container spacing={1} item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ fontSize: '40px', textAlign: 'center' ,marginBottom:'5px',fontFamily:'serif',marginTop:'27px' }}>
                  Nous contacter
                </Typography>
                <form onSubmit={data}>
                <Grid container spacing={10} >
                  <Grid item xs={6} >
                    <TextField label="Votre nom" variant="standard" name='nom' defaultValue="John"  onChange={(e) => setNom(e.target.value)}  color='neutral' focused sx={{marginLeft:'10%',width:'100%','& input': {color: '#bac3ea',},'& label': {marginTop: '12px',color:'#798ae5'},"& .MuiInputBase-root": {height: 50} ,}} />
                    <TextField label="Votre prenom" variant="standard" name='prenom' defaultValue="Prenom"    onChange={(e) => setPrenom(e.target.value)}  color='neutral'  focused sx={{marginLeft:'10%', width:'100%','& input': {color: '#bac3ea',},'& label': {marginTop: '12px',color:'#798ae5'},"& .MuiInputBase-root": {height: 50} , }} />
                  </Grid>
                  <Grid item xs={6} >
                    <TextField  label="Votre adresse email" variant="standard" name='email' defaultValue="john@email.com"  onChange={(e) => setEmail(e.target.value)}   color='neutral' focused sx={{width:'100%','& input': {color: '#bac3ea',},'& label': {marginTop: '10px',color:'#798ae5'},"& .MuiInputBase-root": {height: 50} ,}} />
                    <TextField label="Votre numero de telephone" variant="standard" name='tel' defaultValue="+212-"  color='neutral'  onChange={(e) => setTel(e.target.value)}  focused sx={{  width:'100%','& input': {color: '#bac3ea',},'& label': {marginTop: '10px',color:'#798ae5'},"& .MuiInputBase-root": {height: 50} ,}} />
                  </Grid>
                  <Grid item xs={12} sx={{marginLeft:'25px'}}>
                    <TextField  defaultValue="Objet de votre requette" name='objet'  label="Standard warning" variant="standard"  color='neutral'  onChange={(e) => setObj(e.target.value)}   focused sx={{ width:'100%' ,marginBottom:'7px', "& .MuiInputBase-root": {height: 50} ,'& input': {color: '#bac3ea',},'& label': {marginTop: '10px',color:'#798ae5'},}} />
                    <TextField label=" "  variant="standard" defaultValue="Votre message" name='message' color='neutral' onChange={(e) => setMessage(e.target.value)}   focused sx={{width:'100%','& input': {color: '#bac3ea',marginTop:'-10px'},"& .MuiInputBase-root": {height: 80}  , '& label': {marginTop: '10px',color:'#798ae5'},}} />
                  </Grid>
                </Grid>
                 <Button variant="contained" onClick={data} color='primary' sx={{color:'#fff', borderRadius:'40px', marginTop:'35px',width:'30%',padding:'10px',textTransform:'capitalize'}}>Envoyer</Button>
                </form>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Grid>
    </ThemeProvider>
  );
}
