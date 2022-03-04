import React, { useEffect, useState } from "react"

export const ReviewContentScore = (props) => {
    let [rating, setRating] = useState([])
    function getRating(){
        let starColor = "star " + props.color
        //get title
        for (let i = 0; i < props.rating; i++) {
            rating.push(<div className={starColor} key={i}></div>)
        }
        for (let i = 0; i < 5 - props.rating; i++) {
            rating.push(<div className="star" key={props.rating + i}></div>)
        }
        return <div className="score pb-3" title={props.hoverTitle}>{rating}</div>
    }
    return (
        getRating()
    )
}