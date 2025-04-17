import axios from "axios";

const api = axios.create({
    baseURL: "https://fakestoreapi.com"
})

export const getProducts = async () => {
    const {data}  = await api("/products")
    return data
}

export const getProduct = async (id : string | number) => {
    const {data}  = await api(`/products/${id}`)
    return data
}
