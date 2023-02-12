import React from 'react';
import Box from '@mui/material/Box';
import { Button,  Paper, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router'
import { Stack } from '@mui/system';

export default function SimpleContainer() {
  const router = useRouter()

  const onClick = () => {
    router.push('/home')
  }
  return (
      <Box
        sx={{
          bgcolor: "background.paper",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper sx={{ width: "36rem" }}>
          <Stack spacing={2} p={12}>
            <TextField label="Email" variant="outlined" />
            <TextField label="Password" variant="outlined" type="password" />
            <Button onClick={onClick} variant="contained">
              Login
            </Button>
          </Stack>
        </Paper>
      </Box>
  );
}