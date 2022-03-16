import axios from 'axios'
import config from '../config.json'

export const getPosts = async () => {
    try {
        const response = await axios.post(config.myUrl+'/api/auth/getPosts', {id: 1})
        
        return response.data.posts
    } catch (e) {
    }
}