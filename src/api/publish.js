import axios from 'axios'
import config from '../config.json'

export const publish = async (title, text, rating) => {
    try {
        const response = await axios.post(config.myUrl+'/api/auth/publish', {
            title, 
            text,
            rating
        })
        
        return response
    } catch (e) {
        console.log(e.response)
    }
}