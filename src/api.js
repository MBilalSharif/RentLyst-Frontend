import axios from "axios";

// 👇 Use your Render backend URL here
const API = axios.create({
  baseURL: "https://rentlyst.onrender.com/api",
});

export default API;
