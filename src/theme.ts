import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#455cc7',
    },
    secondary: {
      main: '#455cc7',
    },
    error: {
      main: red.A400,
    },
  },
});
export default theme;


