import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { login } from '../api/auth';
import { useNavigate } from 'react-router-dom';

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
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4, width: 300 }}>
      <Typography variant="h5" mb={2}>Login</Typography>
      <TextField label="Usuário" value={username} fullWidth margin="normal"
        onChange={(e) => setUsername(e.target.value)} />
      <TextField label="Senha" type="password" value={password} fullWidth margin="normal"
        onChange={(e) => setPassword(e.target.value)} />
      {error && <Typography color="error">{error}</Typography>}
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Entrar</Button>
    </Box>
  );
};