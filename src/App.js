import AppRouter from "./router/AppRouter";
import store from "./store/index";
import { Provider } from "react-redux";
import { indigo } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[300],
    },
    secondary: {
      light: "#eeeeee",
      main: "#424242",
      dark: "#000",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
