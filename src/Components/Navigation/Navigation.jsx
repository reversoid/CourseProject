import React from "react"
import { AuthModal } from "./AuthModal"
import './styles.css'

export const Navigation = () => {
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
            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#authModal">Sign in</button>
            <AuthModal/>
        </nav>
    )
}