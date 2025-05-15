import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Card, CardContent, CardMedia, Typography, Grid, CircularProgress, Container } from '@mui/material';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (err) {
      setError('Erro ao carregar os produtos.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Container sx={{ textAlign: 'center', mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ textAlign: 'center', mt: 4 }}>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: 'contain', p: 2 }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom noWrap>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                  {product.description}
                </Typography>
                <Typography variant="subtitle1" color="primary" sx={{ mt: 1 }}>
                  R$ {product.price.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;