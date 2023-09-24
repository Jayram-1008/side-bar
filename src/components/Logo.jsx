import React from 'react'
import { Box } from '@mui/material';
export const LogoLarge = () => {
  return (
    <Box className='logo logo-large' sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <h2>Real State</h2>
    </Box>
  )
}

export const LogoSmall = () => {
    return (
      <Box className='logo logo-small' sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <h3>Real <br/>State</h3>
      </Box>
    )
  }