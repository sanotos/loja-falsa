import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { token } = await login(username, password);
      localStorage.setItem('token', token);
      navigate('/home');
    } catch {
      setError('Login falhou. Verifique suas credenciais.');
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper elevation={3} sx={{ padding: 4, width: 300 }}>
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            placeholder="E-mail"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            margin="normal"
            InputProps={{ style: { backgroundColor: 'white' } }}
          />
          <TextField
            placeholder="Senha"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            margin="normal"
            InputProps={{ style: { backgroundColor: 'white' } }}
          />
          {error && (
            <Typography color="error" variant="body2" mt={1}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: '#333',
              color: 'white', '&:hover': { backgroundColor: '#000' },
            }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};