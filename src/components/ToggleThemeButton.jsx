import { Box, Button } from '@mui/material'
import React from 'react'

const ToggleThemeButton = ({darkTheme, toggleTheme}) => {
  return (
    <Box sx={{margin:'10px 20px'}}>
        <Button onClick={toggleTheme}>
            {darkTheme ? "Sun" : "Dark"}
        </Button>
    </Box>
  )
}

export default ToggleThemeButton
