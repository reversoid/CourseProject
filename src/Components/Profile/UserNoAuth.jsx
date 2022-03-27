import React from "react"

import {Route, Routes, Link, Navigate} from 'react-router-dom'

import './styles.css'

export const UserNoAuth = (props) => {

    return (
        <div className="container text-light mt-5">
            This user is not authorized. <Link to={'/feed'}>Go to main page</Link>
        </div>
    )
}