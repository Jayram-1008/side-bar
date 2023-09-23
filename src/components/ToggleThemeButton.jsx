import { Button } from 'antd'
import React from 'react'

const ToggleThemeButton = ({darkTheme, toggleTheme}) => {
  return (
    <div className='toggle-theme-btn'>
        <Button onClick={toggleTheme}>
            {darkTheme ? "Sun" : "Dark"}
        </Button>
    </div>
  )
}

export default ToggleThemeButton
