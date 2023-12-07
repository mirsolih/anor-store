import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODBlMWVkMzVlNzE5M2JkODRlY2M4OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjIzMTQ0MCwiZXhwIjoxNjg2NDkwNjQwfQ.gyXZazQrvZ3C-PoQaXOlDWB7NWgR3D4kl-uPmk-14I4"
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
//const TOKEN = "null"
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
})