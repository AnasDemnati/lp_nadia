import * as React from 'react';
import{ useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ListGeneral from './list2';
import InboxIcon from '@mui/icons-material/Inbox';
import Cartepass from './cartepass';

const pages = [
  {title:'Général' ,icon: <InboxIcon /> },
  {title:'Carte Pass' ,icon: <InboxIcon /> },
  {title:'Carte Flex' ,icon: <InboxIcon /> },
  {title:'Carte Budget' ,icon: <InboxIcon /> },
  {title:'Carte Hybrid' ,icon: <InboxIcon /> },];
export default function List1() {
    const [selectedPage, setSelectedPage] = useState('');
    const handlePageClick = (page :any) => {
      setSelectedPage(page);
    };
  return (
    <>
     <Box sx={{  display: {  md: 'flex' }, justifyContent: 'center' , alignItems: 'center' ,width:'100%' }}>
      {pages.map((page) => (
        <Card sx={{ width: '200px', height: '150px', marginLeft: '15px',marginRight:'15px',backgroundColor: selectedPage === page.title ? '#455dc6' : '#fff',color:'#afb5cd' }}>
          <CardContent>
            <CardActions>
            <Grid container direction="column" alignItems="center" sx={{fontSize:'30px'}}>
              <Grid item >
                {page.icon}
              </Grid>
            <Grid item alignItems="center">
              <Button
                sx={{
                  textAlign: 'center',
                  fontSize: '15px',
                  fontWeight: '800',
                  textTransform: 'none',
                  color:'#afb5cd',
                  whiteSpace:'nowrap',
                }}
                onClick={() => handlePageClick(page.title)}
              >
                {page.title}
              </Button>
            </Grid>
          </Grid>
            </CardActions>
          </CardContent>
        </Card>
      ))}
    </Box>
    <Box>
    <ListGeneral/>
     {selectedPage === ' ' && (
            <ListGeneral/>
      )}
       {selectedPage === 'Carte Pass' && (
         <Cartepass />
      )}
    </Box>
    </>    
  );
}

