import axios from 'axios'
import config from '../config.json'

export const publish = async (title, text, rating, tags, category) => {
    try {
        const response = await axios.post(config.myUrl+'/api/auth/publish', {
            title, 
            text,
            rating,
            tags,
            category
        }, {withCredentials: true})
        
        return response
    } catch (e) {
    }
}