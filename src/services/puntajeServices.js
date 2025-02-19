import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/api/puntajes`;

const getAuthConfig = () => {
  const token = localStorage.getItem('token');
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

export const puntajesService = {
  obtenerPuntajes: async () => {
    try {
      const response = await axios.get(API_URL, getAuthConfig());
      return response.data.data;
    } catch (error) {
      console.error('❌ Error al obtener puntajes:', error.response?.data || error.message);
      throw new Error('Error al obtener puntajes: ' + (error.response?.data?.message || error.message));
    }
  },

  inicializarPuntajes: async () => {
    try {
      const response = await axios.post(`${API_URL}/inicializar`, {}, getAuthConfig());
      return response.data;
    } catch (error) {
      console.error('❌ Error al inicializar puntajes:', error.response?.data || error.message);
      throw error;
    }
  },

  guardarPuntajes: async (puntajes) => {
    try {
      const response = await axios.post(`${API_URL}/multiple`, puntajes, getAuthConfig());
      return response.data;
    } catch (error) {
      console.error('❌ Error al guardar puntajes:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Error al guardar puntajes: ' + error.message);
    }
  },
};

export default puntajesService;
