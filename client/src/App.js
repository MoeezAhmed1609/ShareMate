import "./App.css";
// MUI
import { Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins, san-serif",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h3">Moeez Ahmed's Work Station</Typography>
    </ThemeProvider>
  );
}

export default App;
