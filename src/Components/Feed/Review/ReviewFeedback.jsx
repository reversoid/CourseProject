import React from "react"

export const ReviewFeedback = () => {
    return (
        <div className="feedback">
            <div className="comments-panel">
                <span className='fw-bold ms-5'>Comments&nbsp;</span>
                <span>(10)</span>
                <div className="down-arrow ms-3"></div>
            </div>

            <div className="like-panel">
                <div className="likes-count me-3 fw-bold">999</div>
                <div className="like me-5"></div>
            </div>
        </div>
    )
}