import React, { useEffect, useState } from "react"

export const ReviewContentScore = (props) => {
    // let [rating, setRating] = useState(new Array())
    // useEffect(()=>{
    //     let starColor = "star " + props.color
    //     for (let i = 0; i < props.rating; i++) {
    //         rating.push(<div className={starColor} key={i}></div>)
    //     }
    //     for (let i = 0; i < 5 - props.rating; i++) {
    //         rating.push(<div className="star" key={props.rating + i}></div>)
    //     }
    // }, [])
    let [ratingClassname, setRatingClassname] = useState(['rating', 'text-dark', 'fs-2', 'mb-3', 'ms-2'])
    useEffect(()=>{
        if(props.rating === 1)
            ratingClassname.push('rating-very-bad')
        else if(props.rating === 2)
            ratingClassname.push('rating-bad')
        else if(props.rating === 3)
            ratingClassname.push('rating-satisfactory')
        else if(props.rating === 4)
            ratingClassname.push('rating-good')
        else if(props.rating === 5)
            ratingClassname.push('rating-excellent')
    }, [])
    return (
        <div className={ratingClassname.join(' ')}>{props.rating}</div>
        // <div className="score pb-3" title={props.hoverTitle}>{rating}</div>
    )
}