import axios from 'axios'
import config from '../config.json'

export const comment = async (post_id, text) => {
    try {
        const response = await axios.post(config.myUrl+'/api/auth/comment', {
            post_id: post_id.split('-')[1],
            text: text
        })
        console.log(response.data);
    } catch (e) {
        
    }
}