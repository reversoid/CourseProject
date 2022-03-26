import axios from 'axios'
import config from '../config'

export const fullTextSearch = async (pattern) => {
    try {
        const response = await axios.get(config.myUrl+'/api/auth/fullTextSearch', {params: {pattern}})
        
        return response.data.posts
    } catch (e) {
    }
}