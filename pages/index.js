import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Input, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router'

export default function SimpleContainer() {
  const router = useRouter()

  const onClick = () => {
    router.push('/home')
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', display:'flex', alignItems:'center', justifyContent:'center' }} >
          <Paper>
            <Typography variant='h5'>Login</Typography>
            <Input />
            <Button onClick={onClick}>Login</Button>
          </Paper>
          </Box>
      </Container>
    </React.Fragment>
  );
}