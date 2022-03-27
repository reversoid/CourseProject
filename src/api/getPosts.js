import axios from 'axios'
import config from '../config'

export const getPosts = async (params, setLoading) => {
    try {
        setLoading(true)
        const response = await axios.get(config.myUrl+'/api/auth/getPosts', {params})
        setLoading(false)
        return response.data
    } catch (e) {
        setLoading(false)
    }
}