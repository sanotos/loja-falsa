import React from 'react';
import { Typography, Box, Card, CardContent } from '@mui/material';

const HomePage: React.FC = () => (
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
                <Typography variant="h2" mt={4}>Bem-vindo à Fake Store!</Typography>
            </CardContent>
        </Card>
    </Box>
);

export default HomePage;