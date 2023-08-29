"use client"
import { createTheme } from "@mui/material/styles";

const baselightTheme = createTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: "#e6e6ed",
      light: "#fff",
      dark: "#d7e1ea",
    },
    secondary: {
      main: "#111",
      light: "#E8F7FF",
      dark: "#23afdb",
    },
    success: {
      main: "#13DEB9",
      light: "#E6FFFA",
      dark: "#02b3a9",
      contrastText: "#ffffff",
    },
    info: {
      main: "#539BFF",
      light: "#EBF3FE",
      dark: "#1682d4",
      contrastText: "#ffffff",
    },
    error: {
      main: "#FA896B",
      light: "#FDEDE8",
      dark: "#f3704d",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#FFAE1F",
      light: "#FEF5E5",
      dark: "#ae8e59",
      contrastText: "#ffffff",
    },
    grey: {
      100: "#F2F6FA",
      200: "#EAEFF4",
      300: "#DFE5EF",
      400: "#7C8FAC",
      500: "#5A6A85",
      600: "#2A3547",
    },
    text: {
      primary: "#111",
      secondary: "#91979e",
    },
    action: {
      disabledBackground: "rgba(73,82,88,0.12)",
      hoverOpacity: 0.02,
      hover: "#f6f9fc",
    },
    divider: "#e5eaef",
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', sans-serif;",
    h1: {
      fontWeight: 600,
      fontSize: "2.25rem",
      lineHeight: "2.75rem",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: "1.75rem",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.3125rem",
      lineHeight: "1.6rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: "1.6rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.2rem",
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 400,
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.334rem",
    },
    body2: {
      fontSize: "0.75rem",
      letterSpacing: "0rem",
      fontWeight: 400,
      lineHeight: "1rem",
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
          boxShadow:
            "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px !important",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '7px'
        }
      }
    }
  },
});

const baseDarkTheme = createTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: '#282828', // Màu chính cho dark mode
      light: '#2c2c2c', // Màu phụ cho dark mode
      dark: '#131313', // Màu phụ cho dark mode
    },
    secondary: {
      main: '#D9534F', // Màu chính cho dark mode
      light: '#ef706e', // Màu phụ cho dark mode
      dark: '#ef1613', // Màu phụ cho dark mode
    },
    success: {
      main: '#00BFA5', // Màu chính cho dark mode
      light: '#64FFDA', // Màu phụ cho dark mode
      dark: '#008e76', // Màu phụ cho dark mode
      contrastText: '#ffffff',
    },
    info: {
      main: '#448AFF', // Màu chính cho dark mode
      light: '#82B1FF', // Màu phụ cho dark mode
      dark: '#005ecb', // Màu phụ cho dark mode
      contrastText: '#ffffff',
    },
    error: {
      main: '#FF5252', // Màu chính cho dark mode
      light: '#FF8A80', // Màu phụ cho dark mode
      dark: '#c50b0b', // Màu phụ cho dark mode
      contrastText: '#ffffff',
    },
    warning: {
      main: '#FFAB00', // Màu chính cho dark mode
      light: '#FFD740', // Màu phụ cho dark mode
      dark: '#c67c00', // Màu phụ cho dark mode
      contrastText: '#ffffff',
    },
    grey: {
      100: '#f5f5f5', // Màu chính cho dark mode
      200: '#bdbdbd', // Màu phụ cho dark mode
      300: '#9e9e9e', // Màu phụ cho dark mode
      400: '#757575', // Màu phụ cho dark mode
      500: '#616161', // Màu phụ cho dark mode
      600: '#424242', // Màu phụ cho dark mode
    },
    text: {
      primary: '#ffffff', // Màu chính cho dark mode
      secondary: '#9e9e9e', // Màu phụ cho dark mode
    },
    action: {
      disabledBackground: 'rgba(33, 33, 33, 0.12)',
      hoverOpacity: 0.08,
      hover: '#1c1c1c',
    },
    divider: '#bdbdbd',
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', sans-serif;",
    h1: {
      fontWeight: 600,
      fontSize: "2.25rem",
      lineHeight: "2.75rem",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: "1.75rem",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.3125rem",
      lineHeight: "1.6rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: "1.6rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.2rem",
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 400,
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.334rem",
    },
    body2: {
      fontSize: "0.75rem",
      letterSpacing: "0rem",
      fontWeight: 400,
      lineHeight: "1rem",
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
          boxShadow:
            "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px !important",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '7px'
        }
      }
    }
    // add other overide styled bellow
  },
});


export { baselightTheme, baseDarkTheme };
