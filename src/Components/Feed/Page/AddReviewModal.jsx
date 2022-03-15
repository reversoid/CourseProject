import React, { useCallback, useState, Component, useEffect } from "react";
import { DropZone } from "./DropZone";
import RichEditor from "./RichEditor";
import { publish } from "../../../api/publish"
import { Tag } from "../Review/Tag";


function renderRating(rating, viewRating, setViewRating, numbers) {

    // this function renders rating based on logical rating

    // make an empty array
    viewRating = []

    // pick color
    let colors = ['very-bad', 'bad', 'satisfactory', 'good', 'excellent']
    let color = colors[rating - 1]

    // classname for star
    let starColor = "star star-editable " + color

    for (let i = 0; i < rating; i++) {
        viewRating.push(<div className={starColor} key={i} id={numbers[i]}></div>)
    }
    for (let i = 0; i < 5 - rating; i++) {
        viewRating.push(<div className="star star-editable" key={rating + i} id={numbers[rating + i]}></div>)
    }
    setViewRating(viewRating)
}

export const AddReviewModal = () => {

    const onDrop = useCallback(acceptedFiles => {
        // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
        console.log(acceptedFiles);
    }, []);

    // logical rating
    let [rating, setUserRating] = useState(0)

    // view rating
    let [viewRating, setViewRating] = useState([])


    useEffect(() => {

        renderRating(rating, viewRating, setViewRating, numbers)

    }, [rating])

    // numbers for id and logical rating
    let numbers = ['one', 'two', 'three', 'four', 'five']

    function setRating(target, numbers) {
        if (target.id)
            setUserRating(numbers.indexOf(target.id) + 1)
    }

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const [tags, setTags] = useState(new Array())
    let [inputTag, setInputTag] = useState('')

    return (
        <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content bg-dark">
                    <div className="modal-header">
                        <h1 className="modal-title" id="exampleModalLabel">Add new review</h1>
                        <button type="button" className="btn-close bg-light " data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container m-auto d-flex justify-content-center flex-column text-dark">
                            <input type="text"
                                placeholder="Title"
                                id="title"
                                className="form-control my-3"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                            <div className="editor text-dark">
                                <RichEditor setText={setText} text={text} />
                            </div>
                            <div className="text-light mt-5">
                                <div className="stars me-3" onClick={(event) => setRating(event.target, numbers)}>
                                    {viewRating}
                                </div>

                                <div className="d-block mt-3 mb-4">
                                    <div className="tag bg-warning set-tag me-3 mb-2">

                                        <form className="d-inline-block"
                                            onSubmit={(event) => {
                                                inputTag = inputTag.trim()
                                                if (!inputTag.trim() || inputTag.includes('#') || inputTag.includes(' ')) {
                                                    alert('Tag must not be empty, not contain "#" and whitespaces')
                                                    event.preventDefault()
                                                    return
                                                }

                                                tags.push(inputTag)
                                                setTags(tags)
                                                setInputTag('')
                                                event.preventDefault()

                                            }}>
                                            <input type="text"
                                                className="form-control bg-warning shadow-none border-0"
                                                placeholder="Add a tag"
                                                value={inputTag}
                                                onChange={(event) => {
                                                    setInputTag(event.target.value)
                                                }}
                                            />
                                        </form>

                                    </div>

                                    {
                                        tags ? tags.map((tag, index) => <Tag tag={tag} key={index + 100} />) : ''
                                    }


                                </div>

                                <DropZone onDrop={onDrop} accept={"image/*"} />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button"
                            className="btn btn-primary"
                            onClick={() => publish(title, text, rating, tags)}
                        >Publish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
