import axios from 'axios'

const token = localStorage.getItem("uwer-token")

const api = axios.create({
    baseURL: "httplocalhost:4000/api/",
    timeout: 1000,
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export default api