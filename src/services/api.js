import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-bd-6j7c.onrender.com'
})

export default api