import React, { useEffect, useState } from "react"
import { Comment } from "./Comment"
import {like} from '../../../api/like'
export const ReviewFeedback = () => {
    let [commentCollapsed, setCommentCollapsed] = useState(true)
    function toggleComment(){
        setCommentCollapsed(!commentCollapsed)
        console.log(commentCollapsed)
    }
    let [likedState, setLikedState] = useState('like me-5')
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
                    <div className={likedState}
                    onClick={(event)=>like(event.currentTarget.parentNode.parentNode.parentNode.id, setLikedState)}
                    ></div>
                </div>
            </div>
            
            <div className={commentCollapsed?"container px-5 collapsed":"container-lg px-5 mx-0"}>
                <Comment/>
                <Comment/>
            </div>
        </>
        

    )
}