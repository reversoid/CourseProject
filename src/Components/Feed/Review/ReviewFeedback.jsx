import React, { useEffect, useState } from "react"
import { Comment } from "./Comment"
import {like} from '../../../api/like'
import {comment} from '../../../api/comment'
import {getComments} from '../../../api/getComments'
import {getCurrentUserData} from '../../../api/getCurrentUserData'



export const ReviewFeedback = (props) => {
    let [commentCollapsed, setCommentCollapsed] = useState(true)
    let [likedState, setLikedState] = useState('like me-5')
    let [comments, setComments] = useState(new Array())
    let [writeCommentValue, setWriteCommentValue] = useState('')
    function toggleComment(){
        setCommentCollapsed(!commentCollapsed)
        console.log(commentCollapsed)
    }
    
    useEffect(()=>{
        getComments(props.post_id).then((response)=>{
            setComments(response)
        })
    }, [])
    return (
        <>
            <div className="feedback-panel">
                <div className="comments-panel">
                    <span className='fw-bold ms-5'>Comments&nbsp;</span>
                    <span>({comments.length})</span>
                    <div className={commentCollapsed?"down-arrow ms-3":"down-arrow ms-3 rotated"}
                    onClick={()=>toggleComment()}></div>
                </div>

                <div className="like-panel">
                    <div className="likes-count me-3 fw-bold">{props.like_count}</div>
                    <div className={likedState}
                    onClick={(event)=>like(event.currentTarget.parentNode.parentNode.parentNode.id, setLikedState)}
                    ></div>
                </div>
            </div>
            
            <div className={commentCollapsed?"container px-5 collapsed":"container-lg px-5 mx-0"}>
                {comments.map((comment, index)=>{return <Comment comment={comment} key={index+30}/>})}
                <div className="mt-4">
                    <textarea className="form-control"
                    name=""
                    id=""
                    placeholder="Add new comment"
                    value={writeCommentValue}
                    onChange={(event)=>setWriteCommentValue(event.target.value)}
                    ></textarea>

                    <button
                    className="btn btn-primary mt-3"
                    onClick={()=>comment(props.currentId, String(props.post_id), writeCommentValue, setWriteCommentValue)}
                    >Post</button>
                </div>
                
            </div>
             
        </>
        

    )
}