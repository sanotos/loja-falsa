import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';// Importa hooks de estado e efeito
import { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress, Card, CardMedia, CardContent, Button } from '@mui/material';

// Interface que define o tipo de um produto
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

// Componente que mostra os detalhes de um único produto
const ProductDetails = () => {
  // Obtém o parâmetro da URL (o ID do produto)
  const { id } = useParams<{ id: string }>();

  // Hook de navegação (voltar à tela anterior)
  const navigate = useNavigate();

  // Estado que armazena o produto
  const [product, setProduct] = useState<Product | null>(null);

  // Estado para controle de carregamento
  const [loading, setLoading] = useState(true);

  // useEffect executa a requisição assim que o componente monta
  useEffect(() => {
    // Faz uma requisição GET para buscar os dados do produto pelo ID
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data)) // Armazena os dados no estado
      .catch(() => setProduct(null))       // Em caso de erro, define como null
      .finally(() => setLoading(false));   // Finaliza o carregamento
  }, [id]); // O efeito depende do ID

  // Enquanto estiver carregando, mostra um indicador de progresso
  if (loading) {
    return (
      <Container sx={{ textAlign: 'center', mt: 8 }}>
        <CircularProgress />
      </Container>
    );
  }

  // Se o produto não for encontrado, mostra uma mensagem
  if (!product) {
    return (
      <Container sx={{ textAlign: 'center', mt: 8 }}>
        <Typography>Produto não encontrado.</Typography>
      </Container>
    );
  }

  // Se o produto for carregado com sucesso, exibe os detalhes
  return (
    <Container sx={{ mt: 4 }}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 4, // padding interno
        }}
      >
        {/* Imagem do produto */}
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.title}
          sx={{ objectFit: 'contain', mb: 2 }} // imagem proporcional e com margem abaixo
        />

        {/* Conteúdo com título, descrição e preço */}
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Typography variant="h6" color="primary">
            R$ {product.price.toFixed(2)}
          </Typography>

          {/* Botão para voltar para a página anterior */}
          <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate(-1)}>
            Voltar
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

// Exporta o componente para ser usado na rota de detalhes
export default ProductDetails;