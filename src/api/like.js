import axios from 'axios'
import config from '../config.json'

export const like = async (post_id) => {
    try {
        const response = await axios.post(config.myUrl+'/api/auth/like', {
            post_id
        })
        
    } catch (e) {
        
    }
}