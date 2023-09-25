import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton, Paper, Typography, Menu, MenuItem, Box, Badge, TextField, Button } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { SearchSharp } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';


const Header = ({toggleCollapse, showDrawer}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
    <Paper>
        <Box sx={{display:'flex', alignItems:'center', width:'100%', justifyContent:'space-between', padding:'10px'}}>
            <Box>
                <Button variant='text' onClick={toggleCollapse || showDrawer}><MenuIcon  sx={{fontSize:'30px'}}/></Button>
            </Box>
            <Box sx={{display:'flex', alignItems:'center',
                    '@media only screen and (max-width: 900px)': {
                        display: 'none',
                    },
            }}>
                <TextField fullWidth label="" id="fullWidth" size='small' placeholder='Search' />
                <IconButton>
                    <SearchSharp/>
                </IconButton>
            </Box>
            <Box sx={{display:'flex', alignItems:'center', gap:'10px'}}>
                <IconButton sx={{display:'none',
                    '@media only screen and (max-width: 900px)': {
                        display: 'block',
                      },
                }}> 
                    <SearchSharp/>
                </IconButton>
                <IconButton>
                    <Badge color="secondary" variant="dot">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <Box sx={{display:'flex', alignItems:'center', gap:'5px'}}>
                    <Avatar sx={{ bgcolor: 'red' }}>OP</Avatar>
                    <Box sx={{ '@media only screen and (max-width: 800px)': {
                        display: 'none',
                      },
                    }}>
                        <Typography>Username</Typography>
                    </Box>
                    <Box>
                        <KeyboardArrowDownIcon  onClick={handleClick}/>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
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
    </Paper>
  )
}

export default Header