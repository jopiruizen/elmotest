import { createTheme } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

import color from './colors';

const breakpoints = createBreakpoints({});

const theme = createTheme({
  spacing: 8,
  breakpoints: {
    values: {
      xs: 320,
      sm: 360,
      md: 768,
      lg: 1024,
      xl: 1280
    }
  },
  
  palette: {
    primary: {
      main: color.brand.primary,
    },
  },

  typography: {
    fontFamily: "'Poppins', Arial, sans-serif",

    /* Brand Body Style */
    body1: {
        color: color.typography.main,
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '1.0',
        [breakpoints.up('sm')]: {
          fontSize: '13px',
        },
    },

    body2: {
        color: color.typography.main,
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '18px',
    },

    /* Brand Heading */
    h6: {
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '1.346',
    },

    h5: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '11px',
      lineHeight: '16px',
  },
  
    /* Brand Price  */
    h4: {
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '1.0',
    },

     /* Dialog Title  */
     h3: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '30px',
      textAlign: 'center',
      [breakpoints.up('sm')]: {
        fontSize: '20px',
      },
      
    },
  },

  overrides: {

  
    MuiInputAdornment: {
        root: {
            fontWeight:500,
            color: '#777E83',
            fontSize: '12px',
            lineHeight: '18px',
        },
    },

    MuiFormControl : {
      root: {
        display: 'flex',
        width: '100%',
      }
    },

    MuiInputBase: {
      root: {
        width: '100%',
        border: '1px solid #F0F0F0',
        backgroundColor: '#FFFFFF',
        boxSizing: 'border-box',
        paddingLeft: '16px',
        paddingTop: '16px',
        paddingBottom: '16px',
      },
      input: {
          fontFamily: "'Poppins', sans-serif",
          width: '100%',
          padding : '0px',
          fontWeight:400,
          color: '#000000',
          fontSize: '12px',
          height: '24px',
          lineHeight: '24px',
      },
    },
    
    MuiButton: {
      root: {
        width: '100%',
        borderRadius: '5px',
        height: '50px',
        fontSize: "14px",
        lineHeight: "21px",
        textAlign: "center",
        textTransform: "none",
        fontWeight: 600,
        boxShadow: "none",
        backgroundColor: color.buttons.primary,
        color: color.brand.white,

        "&:hover": {
          backgroundColor: color.buttons.primaryHover
        },
    
        "&:disabled": {
          backgroundColor: color.buttons.primaryDisable,
          color: color.buttons.labelDisable,
          "&:hover": {
            backgroundColor: color.buttons.primaryDisable,
          }
        }
      },

      label: {
        marginRight: '0px',
      },

      startIcon:{
        margin: '0px',
        marginLeft: '0px',
        marginRight: '0px',
      },

     
    },

    MuiSvgIcon: {
      root: {
        width: '20px',
        height: '20px',
        margin: '0',
        marginRight: '2px',
      }
    },

  },

  
});

export default theme;