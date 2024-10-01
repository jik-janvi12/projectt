
import React from 'react';
import { Container, Grid, Typography, Link, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#eef7fd',
        padding: '40px 0',
        marginTop: 'auto',
       
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{color:'#124256',fontSize:'25px'}}>
              Quick Start
            </Typography>
            <Typography variant="body2" color="textSecondary">
              We are committed to providing the best service to our customers. Our mission is to improve your life through our products and services.
            </Typography>
          </Grid>

          {/* Links Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{color:'#124256'}}>
              Quick Links
            </Typography>
            <Link href="#" color="#727272" underline="hover" display="block">
              Home
            </Link>
            <Link href="#" color="#727272" underline="hover" display="block">
              About Us
            </Link>
            <Link href="#" color="#727272" underline="hover" display="block">
              Services
            </Link>
            <Link href="#" color="#727272" underline="hover" display="block">
              Contact
            </Link>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{color:'#124256'}}>
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Email: contact@mywebsite.com
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Phone: (123) 456-7890
            </Typography>
            <Box mt={2}>
              <IconButton color="#124256" href="https://facebook.com" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="#124256" href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="#124256" href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box mt={4} textAlign="center" sx={{ borderTop: '1px solid #e0e0e0',}}>
          <Typography variant="body2" color="textSecondary" marginTop="15px">
            © {new Date().getFullYear()} My Website. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;