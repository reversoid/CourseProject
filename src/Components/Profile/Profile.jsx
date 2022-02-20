import React from "react"
import { Filter } from "../Feed/Filter/Filter"
import { Review } from "../Feed/Review/Review"
import { Navigation } from "../Navigation/Navigation"
import './styles.css'
export const Profile = () => {
    return (
        <>
            <Navigation/>
            <div className="container-xxl text-light mt-5">
                <div className="row d-flex flex-column">
                    <div className="profile-image-container">
                        <div className="profile-image"></div>
                    </div>
                    <h1 className="username fw-bold text-center py-3 mb-5">Georgio armani</h1>
                </div>
                <div className="row">
                    <div className="col-9">
                        <h1 className="py-3 pb-5">My reviews</h1>
                        <Review/>
                    </div>
                    <div className="col-3">
                        <Filter/>
                    </div>
                </div>
            </div>
        </>
    )
}