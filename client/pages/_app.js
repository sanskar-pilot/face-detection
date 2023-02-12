
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

const MyApp = ({ Component, pageProps, auth }) => {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
