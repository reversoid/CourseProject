import axios from 'axios'
import config from '../config'

export const logout = async () => {
    try {
        const response = await axios.post(config.myUrl+'/api/auth/logout', {withCredentials: true})
        console.log(response);
        return response
    } catch (e) {
    }
}