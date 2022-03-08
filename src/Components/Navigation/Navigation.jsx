import React, { useEffect } from "react"
import { AuthModal } from "./AuthModal"
import {getCurrentUserData} from '../../api/getCurrentUserData'
import './styles.css'

export const Navigation = () => {
    // useEffect(()=>{
    //     getCurrentUserData()
    // })
    return (
        <nav className='container-xxl bg-dark'>
            <div className="logo" />
            <input type="text" className='form-control search' placeholder='Search for reviews' />
            <div className='text-light'>
                <span className="category-item fs-5">Films</span>
                <span className="category-item fs-5">Games</span>
                <span className="category-item fs-5">Books</span>
                <span className="category-item fs-5">All</span>
            </div>

            {/* MODAL BUTTON */}
            <button className='btn btn-primary' onClick={()=>getCurrentUserData()} data-bs-toggle="modal" data-bs-target="#authModal">Sign in</button>
            <AuthModal/>
        </nav>
    )
}