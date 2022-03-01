import React, { useCallback, useState, Component } from "react";
import { DropZone } from "./DropZone";
import RichEditor from "./RichEditor";
import {publish} from "../../../api/publish"


export const AddReviewModal = () => {

    const onDrop = useCallback(acceptedFiles => {
        // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
        console.log(acceptedFiles);
    }, []);

    let [rating, setUserRating] = useState(0)
    function setRating(target){
        if(!target.id)
            return
        if(target.id === "one")
            setUserRating(1)
        else if (target.id === "two")
            setUserRating(2)
        else if (target.id === "three")
            setUserRating(3)
        else if (target.id === "four")
            setUserRating(4)
        else if (target.id === "five")
            setUserRating(5)
        }
    
        let [title, setTitle] = useState('')
        let [text, setText] = useState('')

    return (
        <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content bg-dark">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add new review</h5>
                        <button type="button" className="btn-close bg-light " data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container m-auto d-flex justify-content-center flex-column text-dark">
                            <input type="text"
                            placeholder="Title"
                            id="title"
                            className="form-control my-3 mb-5"
                            value={title}
                            onChange={(event)=>setTitle(event.target.value)}
                            />
                            {/* <textarea className="form-control" name="" id="" cols="30" rows="10" placeholder="Review itself"></textarea> */}
                            
                            <RichEditor/>
                            
                            <div className="text-light mt-5">
                                <div className="stars" onClick={(event)=> setRating(event.target)}>
                                    <div className="star star-editable" id="one"></div>
                                    <div className="star star-editable" id="two"></div>
                                    <div className="star star-editable" id="three"></div>
                                    <div className="star star-editable" id="four"></div>
                                    <div className="star star-editable" id="five"></div>
                                </div>
                                
                                <DropZone onDrop={onDrop} accept={"image/*"} />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button"
                        className="btn btn-primary"
                        onClick={()=>publish('1', '2', 5)}
                        >Publish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
