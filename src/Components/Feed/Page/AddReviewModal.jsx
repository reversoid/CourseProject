import React, { useCallback, useState, useEffect } from "react";
import { DropZone } from "./DropZone";
import RichEditor from "./RichEditor";
import { publish } from "../../../api/publish"
import { Tag } from "../Review/Tag";

export const AddReviewModal = () => {

    const onDrop = useCallback(acceptedFiles => {
        // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
        console.log(acceptedFiles);
    }, []);

    // logical rating
    let [rating, setUserRating] = useState(0)
    // view rating
    let [viewRating, setViewRating] = useState('')


    useEffect(() => {
        renderRating(rating, viewRating, setViewRating)
    }, [rating])

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    let [tags, setTags] = useState([])

    useEffect(()=>{
    }, [tags])

    let [inputTag, setInputTag] = useState('')
    
    let [category, setCategory] = useState('')


    function renderRating(rating, viewRating, setViewRating) {

        // this function renders rating based on logical rating
        setUserRating(rating)
        let colors = ['very-bad', 'bad', 'satisfactory', 'good', 'excellent']
        let color 
        color = colors[rating - 1]
        viewRating = 'rating rating-' + color
        setViewRating(viewRating)
    }

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
                                <div className="d-inline-flex flex-column align-items-center justify-content-center">
                                    <input style={{color: '#212529'}}
                                    type="text"
                                    className={"rating fs-2 text-center input-rating m-0 p-0"+viewRating}
                                    maxLength={1}
                                    minLength={1}
                                    onChange={(event)=>{
                                        renderRating(event.target.value, viewRating, setViewRating)
                                    }}/>
                                    <span className="text-secondary mt-1">Your score</span>
                                    <select className="form-select shadow-none mt-3 mb-2" id="floatingSelect"
                                        value={category}
                                        onChange={(e)=>{
                                        setCategory(e.target.value)
                                    }}>
                                        <option defaultValue>Select category</option>
                                        <option value="films">Films</option>
                                        <option value="games">Games</option>
                                        <option value="books">Books</option>
                                        <option value="music">Music</option>
                                    </select>
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
                                                async function push (){
                                                    tags.push(inputTag)
                                                }
                                                push().then(()=>{
                                                    setTags(tags)
                                                })
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
                                        // add 
                                        // tags={tags} setTags={setTags}
                                        tags ? tags.map((tag, index) => {return <Tag tag={tag} key={index + 100} id={index}/>}) : ''
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
                            onClick={() => {publish(title, text, rating, tags, category)}}
                        >Publish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
