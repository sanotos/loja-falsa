import React, { useEffect, useState } from 'react'; // Importa React e hooks de estado e efeito
import axios from 'axios'; // Biblioteca para requisições HTTP
import { Typography, Grid, CircularProgress, Container, Card, CardContent, CardMedia, CardActions, Button, AppBar, Toolbar, } from '@mui/material'; // Componentes visuais do Material UI
import { useNavigate } from 'react-router-dom'; // Hook para navegação de rotas

// Interface que define o tipo de um produto
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

// Componente principal da lista de produtos
const ProductList: React.FC = () => {
  // Estados para armazenar produtos, loading e erro
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate(); // Hook para redirecionar o usuário

  // Função assíncrona que busca os produtos da API
  const fetchProducts = async () => {
    try {
      const response = await axios.get<Product[]>('https://fakestoreapi.com/products'); // Requisição GET
      setProducts(response.data); // Salva os dados no estado
    } catch (err) {
      setError('Erro ao carregar os produtos.'); // Define mensagem de erro
    } finally {
      setLoading(false); // Marca fim do carregamento
    }
  };

  // useEffect chama fetchProducts assim que o componente for montado
  useEffect(() => {
    fetchProducts();
  }, []);

  // Enquanto estiver carregando, mostra um loading spinner
  if (loading) {
    return (
      <Container sx={{ textAlign: 'center', mt: 8 }}>
        <CircularProgress />
      </Container>
    );
  }

  // Se der erro, mostra a mensagem
  if (error) {
    return (
      <Container sx={{ textAlign: 'center', mt: 8 }}>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  return (
    <>
      {/* Barra superior da loja */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Catalogo
          </Typography>
          {/* Botão para sair (vai para a rota '/') */}
          <Button color="inherit" onClick={() => navigate('/')}>
            Sair
          </Button>
        </Toolbar>
      </AppBar>

      {/* Container que envolve a lista de produtos */}
      <Container sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          {/* Mapeia cada produto em um card */}
          {products.map((product) => (
            <Grid item xs={8} sm={3} md={2} lg={2} key={product.id}>
              {/* Card do produto */}
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 3,
                  borderRadius: 3,
                }}
              >
                {/* Imagem do produto */}
                <CardMedia
                  component="img"
                  height="100"
                  image={product.image}
                  alt={product.title}
                  sx={{ objectFit: 'contain', p: 2 }}
                />
                {/* Conteúdo do produto */}
                <CardContent sx={{ flexGrow: 2 }}>
                  <Typography variant="h6" gutterBottom noWrap>
                    {product.title}
                  </Typography>
                  {/* Descrição com limite de 2 linhas */}
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {product.description}
                  </Typography>
                  {/* Preço */}
                  <Typography variant="subtitle1" color="primary" sx={{ mt: 1 }}>
                    R$ {product.price.toFixed(2)}
                  </Typography>
                </CardContent>
                {/* Botão de ação: Ver detalhes */}
                <CardActions>
                  <Button
                    size="small"
                    fullWidth
                    variant="contained"
                    onClick={() => navigate(`/product/${product.id}`)} // Vai para tela de detalhes
                  >
                    Ver Detalhes
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ProductList; // Exporta o componente para ser usado em outras rotas