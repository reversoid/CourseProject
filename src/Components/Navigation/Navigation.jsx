import React, { useEffect, useState } from "react"
import { AuthModal } from "./AuthModal"
import {getCurrentUserData} from '../../api/getCurrentUserData'
import {Navigate} from 'react-router-dom'
import './styles.css'

export const Navigation = () => {
    const [profileArea, setProfileArea] = useState(<button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#authModal">Sign in</button>)
    let [navigate, setNavigate] = useState(<div></div>)
    useEffect(()=>{
        getCurrentUserData().then((res)=>{
            if(res){
                setProfileArea(
                <div className="profile-link"
                onClick={()=>{
                    // check
                    setNavigate(<Navigate to={'/profile'}/>)
                }}
                >
                    <div className="profile-img me-2"></div>
                    <div className="me-2">
                        {res.username}
                    </div>
                </div>)
            }
        })
    }, [])
    return (
        <nav className='container-xxl bg-dark'>
            {navigate}
            <div className="logo" onClick={()=>{
                // check
                    setNavigate(<Navigate to={'/feed'}/>)
                }}/>
            <input type="text" className='form-control search shadow-none' placeholder='Search for reviews' />
            <div className='text-light'>
                <span className="category-item fs-5">Films</span>
                <span className="category-item fs-5">Games</span>
                <span className="category-item fs-5">Books</span>
                <span className="category-item fs-5">All</span>
            </div>

            {/* MODAL BUTTON OR PROFILE LINK*/}
            <div className="text-light">
                {profileArea}
                <AuthModal/>
            </div>
            
        </nav>
    )
}