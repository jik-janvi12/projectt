import React from 'react'
import ResponsiveDrawer from "./Drawer";
//
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
const Dashboard = () => {
    const Cate = localStorage.getItem('Cate');
    const Subcate =localStorage.getItem('Subcate')
    const QA =localStorage.getItem('QA')
  return (
    <ResponsiveDrawer>
        <Box  component='section' sx={{padding:'10px 0px 0px 10px'}} >
            <Grid container spacing={2}>
                <Grid xs={4} sx={{padding:'8px'}}>
                    <Box sx={{boxShadow:'0px 0px 5px #ccc',padding:'20px',borderRadius:'5px' }}>
                        <Typography variant='h5' sx={{textAlign:'center',fontSize:'1.5rem',fontWeight:'700',marginBottom:'20px'}}>Total Category</Typography>
                        <Typography variant='h3' sx={{textAlign:'center',fontSize:'3rem',fontWeight:'700'}}>{Cate}</Typography>
                        
                    </Box>
                </Grid>
                <Grid xs={4} sx={{padding:'8px'}}>
                    <Box sx={{boxShadow:'0px 0px 5px #ccc',padding:'20px',borderRadius:'5px' }}>
                        <Typography variant='h5' sx={{textAlign:'center',fontSize:'1.5rem',fontWeight:'700',marginBottom:'20px'}}>Total Sub Category</Typography>
                        <Typography variant='h3' sx={{textAlign:'center',fontSize:'3rem',fontWeight:'700'}}>{Subcate}</Typography>
                    </Box>
                </Grid>
                <Grid xs={4} sx={{padding:'8px'}}>
                    <Box sx={{boxShadow:'0px 0px 5px #ccc',padding:'20px',borderRadius:'5px' }}>
                        <Typography variant='h5' sx={{textAlign:'center',fontSize:'1.5rem',fontWeight:'700',marginBottom:'20px'}}>Total Q / A</Typography>
                        <Typography variant='h3' sx={{textAlign:'center',fontSize:'3rem',fontWeight:'700'}}>{QA}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        
        
    </ResponsiveDrawer>
  )
}

export default Dashboard




