import React from 'react';
import { Typography, Box, Card, CardContent } from '@mui/material';
import { LoginForm } from '../components/LoginForm';

const HomeLoginPage: React.FC = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    width="100vw"
    height="100vh"
    bgcolor="#f0f0f0"
  >
    <Card sx={{ minWidth: 350, p: 4, borderRadius: 4, boxShadow: 3 }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Bem-vindo
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Faça login para continuar
        </Typography>

        {/* Formulário de login */}
        <LoginForm />
      </CardContent>
    </Card>
  </Box>
);

export default HomeLoginPage;