import axios from 'axios'
import config from '../config.json'

export const comment = async (from_id, post_id, text, setWriteCommentValue) => {
    try {
        setWriteCommentValue('')
        const response = await axios.post(config.myUrl+'/api/auth/comment', {
            post_id: post_id,
            text: text,
            from_id: from_id
        }, {withCredentials: true})
    } catch (e) {
        
    }
}