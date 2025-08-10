import { Link } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Email as EmailIcon } from '@mui/icons-material'


const Header = (props) => {
  const siteMetadata= props.siteMetadata
  const logo = getImage(props.logo)
  return (
    <AppBar position="fixed" color="default" elevation={1} sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.2s ease-in-out'
                }
              }}
            >
              <GatsbyImage 
                image={logo}
                style={{ 
                  width: 37, 
                  height: 37, 
                  marginTop: -10
                }} 
                alt={siteMetadata.title} 
              />
            </Box>
            <Typography variant="h6" component="h1" sx={{ fontWeight: 600, ml: 2, height: 37, color:'primary.main' }}>Antoine Roy - SSE</Typography>
          </Link>
        </Box>
        <Button
          href="mailto:antoineroy.dev@gmail.com"
          startIcon={<EmailIcon />}
          color="primary"
          variant="outlined"
          sx={{ borderRadius: 2 }}
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header

