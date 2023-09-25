import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchSharp from '@mui/icons-material/SearchSharp';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Navbar = ({toggleCollapse, showDrawer}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleSearchClick = (event) =>{
        console.log("button clicked")
    }

  return (
    <Box sx={{display:'flex', width:'100%', alignItems:'center', justifyContent:'space-evenly', }}>
        <Box sx={{display:'flex', alignItems:'center'}}>
            <Button variant='text' onClick={toggleCollapse || showDrawer}><MenuIcon  sx={{fontSize:'30px'}}/></Button>
        </Box>
       <Box sx={{display:'flex',  width:'100%', marginLeft:'20%'}}>
        <TextField variant='outlined' placeholder='search' size='small' 
            sx={{width:'100%', padding:'1px',
            '@media only screen and (max-width: 800px)': {
                display: 'none',
              },}}
        />
        <IconButton 
            sx={{'@media only screen and (max-width: 800px)': {
                display: 'none',
              },}}
        >
            <SearchSharp/>
        </IconButton>
       </Box>
        <Box 
            sx={{display:'flex', alignItems:'center', gap:'20px', justifyContent:'flex-end' , width:'100%', marginRight:'50px', 
                '@media only screen and (max-width: 800px)': {
                    marginRight: '10px',
                },
                }}
        >
            <Box sx={{display:'flex', alignItems:'center', marginTop:'5px'}}>
                <IconButton
                    sx={{display:'none',
                        '@media only screen and (max-width: 800px)': {
                            display: 'block',
                            marginTop:'5px'
                            
                        },
                    }}
                >
                    <SearchSharp onClick={handleSearchClick}/>
                </IconButton>
                <IconButton aria-label="cart">
                    <Badge color="secondary" variant='dot'>
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
            </Box>
            <Box sx={{display:'flex', alignItems:'center',}}>
                <Avatar  alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Box 
                    sx={{marginLeft:'5px',
                    '@media only screen and (max-width: 1100px)': {
                        display: 'none',
                      },}}
                    >
                    <Typography> User name</Typography>
                </Box>
                <Box sx={{marginTop:'10px', cursor:'pointer', marginLeft:'5px'}}>
                    <ExpandMoreIcon onClick={handleClick}/>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Navbar