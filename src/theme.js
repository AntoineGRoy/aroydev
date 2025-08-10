import { createTheme } from '@mui/material/styles';

const primaryColor = '#00507e';
const secondaryColor = 'rgba(255, 181, 32, 0.94)';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: '#ffffff',
    },
    secondary: {
      main: secondaryColor,
      contrastText: '#000000',
    },
    text: {
      primary: 'rgba(0,0,0,0.9)',
      secondary: 'rgba(0,0,0,0.7)',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif'
    ].join(','),
    a: {
      padding:0
    },
    h1: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 500,
      color: primaryColor,
      marginTop:0
    },
    h2: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 500,
      color: primaryColor,
      marginTop:0
    },
    h3: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 500,
      color: primaryColor,
      marginTop:0
    },
    h4: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 500,
      color: primaryColor,
    },
    h5: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 400,
    },
    button: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 500,
    },
    caption: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 400,
    },
    overline: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          borderRadius: 12,
          boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '20px',
          '&:last-child': {
            paddingBottom: '20px',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto, Arial, sans-serif',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          fontWeight: 'bold',
          '&:hover': {
            textDecoration: 'none',
            transform: 'scale(1.02)',
            transition: 'transform 0.2s ease-in-out',
          },
        },
      },
    },
  },
});

export default theme; 