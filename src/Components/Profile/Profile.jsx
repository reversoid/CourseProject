import React, { useEffect, useState } from "react"
import { Filter } from "../Feed/Filter/Filter"
import { Review } from "../Feed/Review/Review"
import {} from '../Feed/Review/Comment'
import { Navigation } from "../Navigation/Navigation"
import {getProfile} from '../../api/getProfile'
import {getPosts} from '../../api/getPosts'
import {getCurrentUserData} from '../../api/getCurrentUserData'


import './styles.css'
export const Profile = () => {
    
    const [username, setUsername] = useState('undefined')
    const [likesCount, setLikesCount] = useState(0)
    const [posts, setPosts] = useState(new Array())


    useEffect(()=>{

        // set username
        getCurrentUserData().then((res)=>{setUsername(res.username)})

        // get profile info
        getProfile('george').then((response)=>{
            setLikesCount(response.profileInfo.user_likes_count)
            setPosts(response.profilePosts)
            // console.log(response.profilePosts)
        })
    }, [])
    return (
        <>
            <Navigation/>
            <div className="container-xxl text-light mt-5">
                <div className="row d-flex flex-column">
                    <div className="profile-image-container">
                        <div className="profile-image"></div>
                    </div>
                    <h1 className="username fw-bold text-center py-3 mb-5">{username}</h1>
                </div>
                <div className="row">
                    <div className="col-9">
                        <h1 className="py-3 pb-5 d-inline-block">My reviews</h1> <h4 className="ms-3 text-success d-inline-block">Total rating {likesCount}</h4>
                        {posts.map((post, index) => {return <Review post={post} key={index}/>})}                        

                    </div>
                    <div className="col-3">
                        <Filter/>
                    </div>
                </div>
            </div>
        </>
    )
}