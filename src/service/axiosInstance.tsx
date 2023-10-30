import axios from "axios";

const reqres = axios.create({
  baseURL: "http://localhost:8000/",
});

export default reqres;
