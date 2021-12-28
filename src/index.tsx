import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}></ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
