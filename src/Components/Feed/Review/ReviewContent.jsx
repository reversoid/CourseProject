import React, { useEffect, useState } from "react"
import { ReviewContentScore } from "./ReviewContentScore"
import { markdownToDraft } from 'markdown-draft-js';
import RichEditor from "../Page/RichEditor";
import RichViewer from "./RichViewer";

export const ReviewContent = (props) => {

    function getReview() {
        let colors = ['very-bad', 'bad', 'satisfactory', 'good', 'excellent']
        let color = colors[props.review.rating - 1] || 'very-bad'
       
        let hoverTitle = color.charAt(0).toUpperCase() + color.slice(1)
        hoverTitle = hoverTitle.replace('-', ' ')
        
        let borderColor = "border-"+color
        let borderClass = "reviewContent "+ "px-5 "+ borderColor
        return (<div className={borderClass}>
            <h2 className="title text-center py-3 mb-0">{props.review.title}</h2>
            <div className="description pb-3 text-light">
                <RichViewer text={props.review.text}/>
               {/* {props.review.text} */}
            </div>
            {/* PICTURES HERE MAYBE CENTERED SLIDER */}
            <ReviewContentScore rating={props.review.rating} color={color} hoverTitle={hoverTitle}/>
        </div>)
    }

    return (
        getReview()
    )
}