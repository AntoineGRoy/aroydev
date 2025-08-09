import React from "react"
import { Box, Container, Typography } from '@mui/material'

const Footer = (props) => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="body2" 
          color="text.secondary" 
          align="center"
        >
          © {new Date().getFullYear()} {props.siteMetadata.author}
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
