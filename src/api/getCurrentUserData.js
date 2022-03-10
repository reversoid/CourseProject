import axios from 'axios'
import config from '../config.json'

export const getCurrentUserData = async () => {
    try {
        const response = await axios.post(config.myUrl+'/api/auth/protected', {}, {withCredentials: true})
        return response.data.user
    } catch (e) {
        return undefined
    }
}