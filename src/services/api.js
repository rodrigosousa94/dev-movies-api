import axios from "axios";

const api = axios.create({ 
    baseURL: "https://api.themoviedb.org/3/",
    params: {

        api_key: "02f2e80796f312f88acbcc6f90c4ceeb",
        language: "pt-BR",
        page: 1

    }
 })

export default api
