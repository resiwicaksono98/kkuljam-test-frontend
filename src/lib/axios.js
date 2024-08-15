    import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
});

export const axiosInstanceMyServer = axios.create({
  baseURL: "http://localhost:8000/api/"
});
