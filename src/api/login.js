import axios from 'axios'
import {myUrl} from '../../server/config.json'

export const registration = async (username, password) => {
    try {
        const response = await axios.post('https://reversoid.herokuapp.com/api/auth/registration', {
        username,
        password
        })
        
        localStorage.setItem('token', response.data.token)
        console.log('token',response.data.token)

        console.log(response.data)
        showInfo(response.data)
       
    } catch (e) {
        console.log(e.response.data.message)
        showInfo(e.response.data)
    }
}