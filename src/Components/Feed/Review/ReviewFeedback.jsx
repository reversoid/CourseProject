import React, { useEffect, useState } from "react"
import { Comment } from "./Comment"

export const ReviewFeedback = () => {
    let [commentCollapsed, setCommentCollapsed] = useState(true)
    function toggleComment(){
        setCommentCollapsed(!commentCollapsed)
        console.log(commentCollapsed)
    }
    return (
        <>
            <div className="feedback-panel">
                <div className="comments-panel">
                    <span className='fw-bold ms-5'>Comments&nbsp;</span>
                    <span>(10)</span>
                    <div className={commentCollapsed?"down-arrow ms-3":"down-arrow ms-3 rotated"}
                    onClick={()=>toggleComment()}></div>
                </div>

                <div className="like-panel">
                    <div className="likes-count me-3 fw-bold">999</div>
                    <div className="like me-5"></div>
                </div>
            </div>
            
            <div className={commentCollapsed?"container px-5 collapsed":"container px-5"}>
                <Comment/>
                <Comment/>
            </div>
        </>
        

    )
}