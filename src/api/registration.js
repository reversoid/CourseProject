import axios from 'axios'
import config from '../config.json'

export const registration = async (username, password) => {
    try {
        console.log('here')
        
        const response = await axios.post(config.myUrl+'/api/auth/registration', {
        username,
        password
        })
        
        // localStorage.setItem('token', response.data.token)
        // console.log('token',response.data.token)

        // console.log(response.data)
        // showInfo(response.data)
       
    } catch (e) {
        // console.log(e.response.data.message)
        console.log(e)
        // showInfo(e.response.data)
    }
}