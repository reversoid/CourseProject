import axios from 'axios'
import config from '../config.json'

export const like = async (post_id, setLikedState) => {
    try {
        const response = await axios.post(config.myUrl+'/api/auth/like', {
            post_id: post_id.split('-')[1]
        }, {withCredentials: true})
        if(response.data.status == 'liked')
        {
            setLikedState('like me-5 like-filled')
        }
        else{
            setLikedState('like me-5')
        }
    } catch (e) {
        
    }
}