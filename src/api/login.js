import axios from 'axios'
import config from '../config.json'

export const registration = async (username, password, showInfo) => {
    try {
        const response = await axios.post(config.myUrl+'/api/auth/login', {
        username,
        password
        })
        showInfo(response.data)
       
    } catch (e) {
        showInfo(e.response.data)
    }
}