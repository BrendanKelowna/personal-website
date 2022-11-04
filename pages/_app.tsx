import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Copyright } from "../components/Copyright/Copyright";
import ContextWrapper from "../context/ContextWrapper";

const theme = createTheme();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextWrapper>
      <Component {...pageProps} />
      <Copyright />
    </ContextWrapper>
  );
}

export default MyApp;
