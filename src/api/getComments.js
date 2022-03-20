import axios from 'axios'
import config from '../config'

export const getComments = async (post_id) => {
    try {
        const response = await axios.post(config.myUrl+'/api/auth/getComments', {post_id})
        
        return response.data.comments
    } catch (e) {
    }
}