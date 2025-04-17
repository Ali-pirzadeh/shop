import axios from "axios";

const api = axios.create({
    baseURL: "'https://fakestoreapi.com"
})

export const getProducts = async () => {
    const data  = await api("/product")
    console.log(data);
    return data
}