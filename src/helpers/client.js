import axios from 'axios';

export default axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "419aa7543895f0d7bacc13c6a64e08cf"
    }
});