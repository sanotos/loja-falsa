import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/auth';

export async function login(username: string, password: string) {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data; // { token: string }
}