import React, { useEffect } from "react"
import { ReviewContent } from "./ReviewContent"
import { ReviewFeedback } from "./ReviewFeedback"

import './styles.css'
export const Review = (props) => {
  return (
    
    <div className="review-container mb-5" id={"post-"+props.post.post_id}>
      <ReviewContent review={props.post}/>
      <ReviewFeedback post_id={props.post.post_id}/>
    </div>)
}