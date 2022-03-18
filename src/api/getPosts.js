import axios from 'axios'
import config from '../config.json'

export const getPosts = async (params) => {
    try {
        const response = await axios.get(config.myUrl+'/api/auth/getPosts', {params})
        
        return response.data.posts
    } catch (e) {
    }
}