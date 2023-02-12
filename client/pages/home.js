import React from "react";
import { Typography } from '@mui/material';
import { useRouter } from 'next/router'
import ResponsiveAppBar from "./../components/Header";

export default function SimpleContainer() {
  const router = useRouter()
  return (
    <React.Fragment>
      <ResponsiveAppBar />
      <Typography variant="h5">Home</Typography>
    </React.Fragment>
  );
}