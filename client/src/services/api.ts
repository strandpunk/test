import axios from 'axios'

const token = localStorage.getItem("user-token")

const api = axios.create({
    baseURL: "http://localhost:4000/api/",
    timeout: 1000,
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export default api