import React from "react"
import { ReviewContent } from "./ReviewContent"
import { ReviewFeedback } from "./ReviewFeedback"

import './styles.css'
export const Review = () => {
  return (
    <div className="review-container mb-5">
      <ReviewContent />
      <ReviewFeedback />
    </div>)
}