import axios from 'axios';

const API_KEY = 'YOUR_RAWG_API_KEY';  // Substitua com sua chave de API

export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://api.rawg.io/api/games', {
      params: {
        key: API_KEY,
        page_size: 10,  // Limitar a quantidade de produtos retornados
        ordering: '-added',  // Ordenar os produtos por data de lançamento
      },
    });
    return response.data.results; // Retorna os produtos da API
  } catch (error) {
    throw new Error('Erro ao buscar produtos');
  }
};