import React from "react";
import { MondayProvider } from "react-monday";
import { ModalProvider } from "react-modal-hook";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";

const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MondayProvider token={process.env.TOKEN}>
        <ModalProvider>{children}</ModalProvider>
      </MondayProvider>
    </ThemeProvider>
  );
};

export default Providers;
