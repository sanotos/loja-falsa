import React from 'react';
import { Box, Card, CardContent } from '@mui/material';
import { LoginForm } from '../components/LoginForm';

const LoginPage: React.FC = () => (
  
    <Box 
    display="flex"
    justifyContent="center"
    alignItems="center"
    width="100vw"
    height="100vh"
    bgcolor="#f0f0f0"
    >
      <Card>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>  
    </Box>
);

export default LoginPage;
