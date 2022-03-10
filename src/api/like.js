import axios from 'axios'
import config from '../config.json'

export const like = async (post_id, likedState, setLikedState, likeCount, setLikeCount) => {
    try {
        if (likedState === 'like me-5 like-filled'){
            // no like anymore
            setLikedState('like me-5')
            setLikeCount(likeCount - 1)
        }
        else{
            // like
            setLikedState('like me-5 like-filled')
            setLikeCount(likeCount + 1)

        }
        const response = await axios.post(config.myUrl+'/api/auth/like', {
            post_id: post_id.split('-')[1]
        }, {withCredentials: true})
        
    } catch (e) {
        
    }
}