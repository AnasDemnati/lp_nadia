import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const pages = [
  { title: 'test', icon: <InboxIcon /> },
  { title: 'test', icon: <InboxIcon  /> },
  { title: 'test', icon: <InboxIcon  /> },
  { title: 'test', icon: <InboxIcon  /> },
];

export default function Cartepass() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>
      <Card sx={{ width: '100%', marginLeft: '-35%', marginRight: '-35%' }}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={3}>
              <List sx={{color:'#afb5cd'}}>
                {pages.map((page) => (
                  <ListItem key={page.title}>
                    {page.icon}
                    <ListItemText primary={page.title} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Divider orientation="vertical" flexItem sx={{ backgroundColor: '#fff' }} />
            <Grid item xs={8}>
            <Accordion style={{marginTop:'5px', boxShadow: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px' }}>
            <AccordionSummary expandIcon={   <KeyboardArrowDownOutlinedIcon   style={{fontWeight:'500', fontSize: '1rem',width:'2rem', height:'2rem',color: '#4c5068',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius:'50px' }} />}>
                 <Typography  sx={{height:'3rem'}} fontWeight={'600'}>Duhiifeznnjkné ajddshjzndjzajhd ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet cumque itaque quia nostrum doloremque perspiciatis. Magni nulla maxime dignissimos ratione hic sunt, deserunt quae recusandae accusamus quisquam exercitationem tempora.</Typography>
            </AccordionDetails>
            </Accordion>
            <Accordion style={{marginTop:'5px', boxShadow: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px' }}>
            <AccordionSummary expandIcon={   <KeyboardArrowDownOutlinedIcon   style={{fontWeight:'500', fontSize: '1rem',width:'2rem', height:'2rem',color: '#4c5068',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius:'50px' }} />}>
                 <Typography  sx={{height:'3rem'}} fontWeight={'600'}>Duhiifeznnjkné ajddshjzndjzajhd ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet cumque itaque quia nostrum doloremque perspiciatis. Magni nulla maxime dignissimos ratione hic sunt, deserunt quae recusandae accusamus quisquam exercitationem tempora.</Typography>
            </AccordionDetails>
            </Accordion>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
