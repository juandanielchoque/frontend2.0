import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/api/auth`;


const registrarUsuario = async (usuarioData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, usuarioData);
    return response.data; 
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al registrar usuario.');
  }
};

const obtenerUsuarioPorId = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al obtener el usuario.');
  }
};

export default {
  registrarUsuario,
  obtenerUsuarioPorId
};