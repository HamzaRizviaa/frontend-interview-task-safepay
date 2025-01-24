import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes";
import theme from "./assets/theme";
import { store } from "./store";

import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <AppRoutes />
          <ToastContainer position="top-center" />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
