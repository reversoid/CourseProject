import axios from 'axios'
import config from '../config.json'

export const publish = async (title, text, rating, tags) => {
    try {
        const response = await axios.post(config.myUrl+'/api/auth/publish', {
            title, 
            text,
            rating,
            tags
        }, {withCredentials: true})
        
        return response
    } catch (e) {
        console.log(e.response)
    }
}