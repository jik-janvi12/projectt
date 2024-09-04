import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
//
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import CategoryIcon from '@mui/icons-material/Category';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useLocation } from "react-router-dom";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const drawerWidth = 240;

export default function ResponsiveDrawer({children}) {
 const  location = useLocation()
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const list = [{name : 'Dashboard' , path : '/dashboard'},{name : 'category' , path : '/category'},{name : 'subcategory' , path : '/subcategory'},{name : 'Question' , path : '/question'}]

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const [color ,setcolor] =React.useState('blue')
  const handleClick=()=>{
    setcolor(prevColor => prevColor === 'blue' ? 'red' : 'blue');
  }

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <Typography component="div" className="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular MuiToolbar-dense"
      sx={{
          fontSize:'22px',
          fontWeight:'500',
          color:'#fff',
          background:'#124256',
          padding:'15px',
      }}
      >INTERVIEW API</Typography>
      <Divider />
      <List>
        {list.map((text, index) => (
          // <Router>
            <Link to={text.path}>
             <ListItem key={text} disablePadding >
                <ListItemButton sx={{marginLeft:'15px',marginRight:'15px'}}>
                  <Button sx={{color:'black',padding:'8px 16px',textTransform:'capitalize',fontSize:'1rem',width:'200px',textAlign:'start',justifyContent:'flex-start',backgroundColor:'color'}}onClick={handleClick} >
                    <ListItemIcon>
                      {index === 0 ? <SpaceDashboardIcon /> : ''}
                      {index === 1 ? <CategoryIcon /> : ''}
                      {index === 2 ? <ControlPointDuplicateIcon /> : ''}
                      {index === 3 ? <HelpOutlineIcon /> : ''}
                    </ListItemIcon>
                    <ListItemText primary={text.name} />
                  </Button>
                </ListItemButton>
          </ListItem>
          </Link>
          // </Router>
         
        ))}
      </List>
      
    </div>
  );

  // Remove this const when copying and pasting into your project.


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar  sx={{background:'#124256' ,display:'flex',justifyContent:'space-between'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard{location.pathname}
           
          </Typography>

          <Typography>
              <Link to="/">
              <MeetingRoomIcon style={{color:'#fff',fontSize:'32px'}} />
              </Link>
          </Typography>

        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
            {children}
      </Box>
    </Box>
  );
}
