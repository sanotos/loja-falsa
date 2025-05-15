import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
} from '@mui/material';
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
      sx={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #ffffff 50%, #9dabe2 50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: 320,
          borderRadius: 3,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, width: '100%' }}>
          <TextField
            placeholder="email address"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            sx={{ mb: 2, borderRadius: 2 }}
          />
          <TextField
            type="password"
            placeholder="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            sx={{ mb: 2, borderRadius: 2 }}
          />

          {error && (
            <Typography color="error" variant="body2" mb={1}>
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 1,
              background: 'linear-gradient(to right, #a18cd1, #fbc2eb)',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: 3,
              textTransform: 'uppercase',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                background: 'linear-gradient(to right, #8e9eab, #eef2f3)',
              },
            }}
          >
            LOGIN
          </Button>
        </Box>

        <Link href="#" mt={3} underline="hover" color="text.secondary">
          Sign Up
        </Link>
      </Paper>
    </Box>
  );
};