import axios from 'axios'

const api = axios.create({
    baseURL: API_BASE_URL
})

export default api