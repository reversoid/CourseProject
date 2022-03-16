import React, { useEffect, useState } from "react"
import { ReviewContentScore } from "./ReviewContentScore"
import { markdownToDraft } from 'markdown-draft-js';
import RichEditor from "../Page/RichEditor";
import RichViewer from "./RichViewer";
import { Tag } from "./Tag";
import {getTags} from '../../../api/getTags'

export const ReviewContent = (props) => {

    const [writtenBy, setWrittenBy] = useState('')
    useEffect(()=>{
        console.log(props.review);
    }, [])


    useEffect(()=>{
        console.log(props.review.uid_fk);
    }, [])
    function getReview() {
        let colors = ['very-bad', 'bad', 'satisfactory', 'good', 'excellent']
        let color = colors[props.review.rating - 1] || 'very-bad'
       
        let hoverTitle = color.charAt(0).toUpperCase() + color.slice(1)
        hoverTitle = hoverTitle.replace('-', ' ')
        
        let borderColor = "border-"+color
        let borderClass = "reviewContent "+ "px-5 "+ borderColor
        return (<div className="reviewContent px-5">
            <h2 className="title text-center py-3 mb-0">{props.review.title}</h2>
            <div className="description pb-3 text-light">
                <RichViewer text={props.review.text}/>

                <div className="ms-2 text-secondary mt-3">
                    Written by: &nbsp;
                    <div className="written-by text-primary d-inline">
                        {props.review.uid_fk}
                    </div>
                </div>
            </div>
            
            {/* PICTURES HERE MAYBE CENTERED SLIDER */}
            <ReviewContentScore rating={props.review.rating} color={color} hoverTitle={hoverTitle}/>
            <div className="tags mb-3">
                {tags.map((tag, index)=>{return <Tag tag={tag.text} key={index + 10000}/>})}
                {/* <Tag tag={'hehehe1'}/> */}
            </div>
        </div>)
    }

    const [tags, setTags] = useState(new Array())
    useEffect(()=>{
        getTags(props.review.post_id).then((tags)=>setTags(tags));
    }, [])

    return (
        
        getReview()
    )
}