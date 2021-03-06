import axios from 'axios'
import config from '../config.js'

export const getUsernameById = async () => {
    try {
        const response = await axios.post(config.myUrl+'/api/auth/getUsernameById', {})
        return response.data.username
    } catch (e) {
        return undefined
    }
}