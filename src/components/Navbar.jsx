import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, IconButton, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Badge from '@mui/material/Badge';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

  return (
    <Box sx={{display:'flex', width:'100%',}}>
        <Box className="menu-bar-icon">
            <Button variant='text' onClick={toggleCollapse || showDrawer}><MenuIcon/></Button>
        </Box>
        <Box className='search-bar' sx={{marginTop:'6px', marginLeft:'5%'}}>
            <FormControl sx={{ m: 1, width:'100%'}} variant="outlined" >
            <OutlinedInput
                id="outlined-adornment-weight"
                placeholder='Search'
                endAdornment={<InputAdornment position="end"><SearchOutlinedIcon/></InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                'aria-label': 'weight',
                sx: {
                   height:'6px', // Set the desired height
                    width: '350px', // Set the desired width
                  },
                }}
            />
            </FormControl>
        </Box>
        <Box className='nav-right-side' sx={{display:'flex', alignItems:'center', gap:'20px', justifyContent:'flex-end' , width:'100%', marginRight:'20px' }}>
            <Box className='badges' sx={{cursor:'pointer'}}>
                <IconButton aria-label="cart">
                    <Badge color="secondary" variant='dot'>
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
            </Box>
            <Box sx={{display:'flex', alignItems:'center',}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Box sx={{marginLeft:'5px'}}>
                    <Typography> User name</Typography>
                </Box>
                <Box className="" sx={{marginTop:'10px', cursor:'pointer'}}>
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