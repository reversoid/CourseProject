import axios from 'axios'
import config from '../config.json'

export const getProfile = async (username) => {
    try {
        const response = await axios.post(config.myUrl+'/api/auth/getProfile', {username}, {withCredentials: true})
        return response.data
    } catch (e) {
        return undefined
    }
}