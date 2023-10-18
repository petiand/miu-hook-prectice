import { createTheme } from "@mui/material";

const themeLight = createTheme({
  palette: {
    text: {
      primary: "#003049",
      // secondary:"#f2e8cf"
    },
    background: {
      default: "#f2e8cf",
      paper: "#F7EF99",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            borderColor: "#003049",
            color: "#003049",
            ":hover": { borderColor: "#003049" },
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& fieldset": {
            border: `2px solid #003049`,
          },
          "& .MuiInputBase-input:hover + fieldset": {
            border: `2px solid #003049`,
          },
          "& .MuiInputBase-input:focus + fieldset": {
            border: `2px solid #003049`,
          },
          "& label.Mui-focused": {
            color: "#003049",
          },
          "& label": {
            color: "#003049",
          },
        },
      },
    },
  },
});

const themeDark = createTheme({
  palette: {
    text: {
      primary: "#fdf0d5",
    },
    background: {
      default: "#003049",
      paper: "#003049",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            borderColor: "#f2e8cf",
            color: "#f2e8cf",
            ":hover": { borderColor: "#f2e8cf" },
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& fieldset": {
            border: `2px solid #f2e8cf`,
          },
          "& .MuiInputBase-input:hover + fieldset": {
            border: `2px solid #f2e8cf`,
          },
          "& .MuiInputBase-input:focus + fieldset": {
            border: `2px solid #f2e8cf`,
          },
          "& label.Mui-focused": {
            color: "#f2e8cf",
          },
          "& label": {
            color: "#f2e8cf",
          },
        },
      },
    },
  },
});

export { themeDark, themeLight };
