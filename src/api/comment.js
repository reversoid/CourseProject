import axios from 'axios'
import config from '../config.json'

export const comment = async (from_id, post_id, text, setWriteCommentValue) => {
    try {
        setWriteCommentValue('')
        console.log('inside comment', post_id, text, from_id);
        const response = await axios.post(config.myUrl+'/api/auth/comment', {
            post_id,
            text,
            from_id
        }, {withCredentials: true})
    } catch (e) {
        
    }
}