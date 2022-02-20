import React from "react"
import './styles.css'

export const Navigation = () => {
    return (
        <nav className='container-xxl bg-dark'>
            <div className="logo" />
            <input type="text" className='form-control' placeholder='Search for reviews' />
            <div className='text-light'>
                <span className="category-item fs-5">Films</span>
                <span className="category-item fs-5">Games</span>
                <span className="category-item fs-5">Books</span>
                <span className="category-item fs-5">All</span>
            </div>
            <button className='btn btn-primary'>Sign in</button>
        </nav>
    )
}