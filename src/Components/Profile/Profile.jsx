import React, { useEffect, useState } from "react"
import { Filter } from "../Feed/Filter/Filter"
import { Review } from "../Feed/Review/Review"
import {getProfile} from '../../api/getProfile'
import {getPosts} from '../../api/getPosts'
import {getCurrentUserData} from '../../api/getCurrentUserData'
import {logout} from '../../api/logout'
import {Route, Routes, Link, Navigate} from 'react-router-dom'

import './styles.css'
import { Loading } from "../Loading"
import { UserNoAuth } from "./UserNoAuth"
export const Profile = (props) => {
    let [loading, setLoading] = useState(false)
    const [username, setUsername] = useState(
        <div className="placeholder-glow mb-5 mt-3 d-flex justify-content-center">
            <span className="placeholder col-3 py-3 mx-auto"></span>
        </div>
    )
    const [likesCount, setLikesCount] = useState(0)
    const [posts, setPosts] = useState(new Array())
    const [id, setId] = useState(0)

    

    let [filters, setFilters] = useState(new Object())
    
    let [isAuth, setIsAuth] = useState(false)
    // useEffect(()=>{
    //     filters.username = username
    //     getPosts(filters, setLoading).then((response)=>{setPosts(response)})
    // }, [filters])

    // useEffect(()=>{

    //     // set username and get post for it
    //     getCurrentUserData().then((res)=>{
    //         setUsername(<h1 className="username fw-bold text-center py-3 mb-5">{res.username}</h1>);
    //         setId(res.id)
    //         getProfile(String(res.username)).then((response)=>{
    //             if (response)
    //                 setLikesCount(response.profileInfo.user_likes_count)
    //         })
    //         getPosts({username: res.username, setLoading}).then((response)=>{
    //             setPosts(response)})
    //     })   
    // }, [])
    useEffect(() => {
        getCurrentUserData().then((res)=>{
            if(res){
                setIsAuth(true)
            }
            else{
                setIsAuth(false)
                return
            }
            setUsername(<h1 className="username fw-bold text-center py-3 mb-5">{res.username}</h1>);
            
            setId(res.id)
            getProfile(String(res.username)).then((response)=>{
                if (response)
                    setLikesCount(response.profileInfo.user_likes_count)
            })
            getPosts({username: res.username}, setLoading).then((response)=>{
                setPosts(response)})
        })   
    }, [filters, props.search.search])
    return (
        <>
            {isAuth?<div className="container-xxl text-light mt-5">
                <div className="row d-flex flex-column">
                    <div className="profile-image-container">
                        <div className="profile-image"></div>
                        
                        <Link to={'/feed'}>
                            <button type="button"
                            className="btn-close btn-close-white shadow-none exit-button me-5 mt-1"
                            aria-label="Close"
                            onClick={()=>{
                                logout().then((res)=>{
                                    if (res)
                                        window.location.reload(false);
                                })
                            }}
                            title="Log out"
                            ></button>
                        </Link>
                        

                    </div>

                    {username?username:''}
                </div>
                <div className="container-fluid">

                    <h1 className="py-3 pb-lg-5 d-inline-block">My reviews</h1> {loading?<Loading/>:''}
                    <h4 className="ms-lg-3 text-success d-lg-inline-block d-block pb-5 pb-lg-0">Total rating {likesCount}</h4>
                </div>

                <div className="row">
                    <div className="col-md-12 col-lg-9">
                        {posts?posts.map((post, index) => {return <Review post={post} key={index} currentId={id}/>}):''}                  

                    </div>
                    <div className="col-lg-3 d-none d-lg-block">
                        <Filter filters={filters} setFilters={setFilters}/>
                    </div>
                </div>
            </div>:<UserNoAuth/>}
            
        </>
    )
}