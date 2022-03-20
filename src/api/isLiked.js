import axios from 'axios'
import config from '../config'

export const isLiked = async (post_id, id) => {
    try {
        const response = await axios.post(config.myUrl+'/api/auth/isLiked', {post_id, id}, {withCredentials: true})
        return response.data
    } catch (e) {
        return undefined
    }
}