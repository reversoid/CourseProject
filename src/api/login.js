import axios from 'axios'
import config from '../config'

export const toLogin = async (username, password, showInfo) => {
    try {
        const response = await axios.post(config.myUrl+'/api/auth/login', {
        username,
        password
        }, {withCredentials: true})
        showInfo(response.data)
       
    } catch (e) {
        showInfo(e.response.data)
    }
}