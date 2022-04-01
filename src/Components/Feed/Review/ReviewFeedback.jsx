import React, { useEffect, useState } from "react"
import { Comment } from "./Comment"
import {like} from '../../../api/like'
import {comment} from '../../../api/comment'
import {getComments} from '../../../api/getComments'
import {getCurrentUserData} from '../../../api/getCurrentUserData'

import {isLiked} from '../../../api/isLiked'
import {v4 as uuidv4} from 'uuid'


export const ReviewFeedback = (props) => {
    let [commentCollapsed, setCommentCollapsed] = useState(true)
    let [likedState, setLikedState] = useState('like')
    let [comments, setComments] = useState(new Array())
    let [writeCommentValue, setWriteCommentValue] = useState('')
    let [likeCount, setLikeCount] = useState(props.like_count)
    function toggleComment(){
        setCommentCollapsed(!commentCollapsed)
    }
    
    useEffect(()=>{
        getComments(props.post_id).then((response)=>{
            setComments(response)
        })
        isLiked(props.post_id, props.currentId).then((response)=>{
            if (response){
                setLikedState('like'+(response.isLiked?' like-filled':''))
            }
            
        })
        let timerComments = setInterval(()=>{
            getComments(props.post_id).then((response)=>{
                if (response.toString() != comments.toString())
                {
                    setComments(response)
                }
                    
            })
        }, 5000)
        return ()=>{clearInterval(timerComments)}
    }, [])
    return (
        <div className="mx-lg-4 mx-3">
            <div className="feedback-panel">
                <div className="comments-panel">
                    <span className='fw-bold'>Comments&nbsp;</span>
                    <span>({comments?comments.length:0})</span>
                    <div className={commentCollapsed?"down-arrow ms-3":"down-arrow ms-3 rotated"}
                    onClick={()=>toggleComment()}></div>
                </div>

                <div className="like-panel">
                    <div className="likes-count me-3 fw-bold">{likeCount}</div>
                    <div className={likedState}


                    onClick={(event)=>like(event.currentTarget.parentNode.parentNode.parentNode.parentNode.id, likedState, setLikedState, likeCount, setLikeCount)}
                    ></div>
                </div>
            </div>
            
            <div className={commentCollapsed?"container px-3 px-lg-4 comments-collapsed":"container-lg  mx-0"}>

                {comments?comments.map((comment, index)=>{return <Comment comment={comment} key={uuidv4()}/>}):''}
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
             
        </div>
        

    )
}