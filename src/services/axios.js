import axios from "axios";

const instance = axios.create({
    // baseURL: "https://smart-store-7bb43.firebaseio.com"
    baseURL: "http://171.244.37.150:8080/api/"
});

export default instance;