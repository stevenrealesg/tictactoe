import axios from 'axios'
// const dotenv = require('dotenv');
// dotenv.config();
const URL_API = process.env.URL_API || 'http://localhost:3001'

const getList = async () => {
    try {
        const history = await axios.get(`${URL_API}/history`)
        return history.data
    } catch (error) {
        console.log(error)
        return null
    }
}

const create = async (params) => {
    try {
        const response = await axios.post(`${URL_API}/history/create`, params)
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export default { getList, create }