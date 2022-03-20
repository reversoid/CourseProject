import axios from 'axios'
import config from '../config'

export const getTags = async (post_id) => {
    try {
        const response = await axios.post(config.myUrl+'/api/auth/getTags', {post_id})
        return response.data.tags
    } catch (e) {
    }
}