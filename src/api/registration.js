import axios from 'axios'
import config from '../config'

export const toRegister = async (username, password, showInfo, setLoading) => {
    try {
        setLoading(true)        
        const response = await axios.post(config.myUrl+'/api/auth/registration', {
        username,
        password
        }, {withCredentials: true})
        setLoading(false)
        showInfo(response.data)
       
    } catch (e) {
        setLoading(false)
        showInfo(e.response.data)
    }
}