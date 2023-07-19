import axios from 'axios'
import Cookie from 'universal-cookie'

const cookie = new Cookie()
const token = cookie.get("user-token")

const api = axios.create({
    baseURL: "http://localhost:4000/api/",
    timeout: 1000,
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export default api