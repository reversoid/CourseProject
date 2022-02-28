import React from "react"
import { ReviewContent } from "./ReviewContent"
import { ReviewFeedback } from "./ReviewFeedback"

import './styles.css'
export const Review = (props) => {
  return (
    <div className="review-container mb-5">
      <ReviewContent review={props.post}/>
      <ReviewFeedback />
    </div>)
}