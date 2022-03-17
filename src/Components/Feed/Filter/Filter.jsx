import React, { useState } from "react"
import {Tag} from '../../Feed/Review/Tag'
import './styles.css'
export const Filter = () => {
    let [tag, setTag] = useState('')
    let [tags, setTags] = useState([])

    return (
        <div className="filters">
            <h4 className="text-center py-3 pb-4">Filters</h4>

            <div className="">
                {/* <span className="text-center w-100">Date</span> */}
                <div action="" className="d-flex flex-column" onSubmit={(e)=>{
                    e.preventDefault()
                }}>
                    <label htmlFor="form-check" className="text-primary ms-2">Category</label>
                    <div className="form-check mt-1 mb-3" id="form-check">
                        <div className="d-block">
                            <label htmlFor="films">Films</label>
                            <input type="checkbox" className="form-check-input mx-1 shadow-none" id="films"/>
                        </div>
                        
                        <div className="d-block">
                            <label htmlFor="games">Games</label>
                            <input type="checkbox" className="form-check-input mx-1 shadow-none" id="games"/>
                        </div>
                        
                        <div className="d-block">
                            <label htmlFor="books">Books</label>
                            <input type="checkbox" className="form-check-input mx-1 shadow-none" id="books"/>
                        </div>
                        
                        <div className="d-block">
                            <label htmlFor="music">Music</label>
                            <input type="checkbox" className="form-check-input mx-1 shadow-none" id="films"/>
                        </div>
                        
                    </div>


                    {/* DATE SECTION */}
                    <div className="d-block" id="dateBlock">
                        {/* FROM DATE */}
                        <label htmlFor="dateFrom" className="ms-2 text-primary">From</label>
                        <input type="date" name="" id="dateFrom" className="form-control bg-dark text-light border-0 ps-2 shadow-none w-100 mb-2"/>
                        
                        {/* TO DATE */}
                        <label htmlFor="dateTo" className="ms-2 text-primary">To</label>
                        <input type="date" name="" id="dateTo" className="form-control bg-dark text-light border-0 ps-2 shadow-none"/>
                    </div>
                    <form action=""
                        className="d-flex align-items-center justify-content-center"
                        onSubmit={(event) => {
                            tag = tag.trim()
                            if (!tag.trim() || tag.includes('#') || tag.includes(' ')) {
                                alert('Tag must not be empty, not contain "#" and whitespaces')
                                event.preventDefault()
                                return
                            }

                            tags.push(tag)
                            setTags(tags)
                            setTag('')
                            event.preventDefault()

                        }}
                    >

                        <div className="tag bg-warning set-tag my-2">
                            <input type="text"
                            name=""
                            id="tagInput"
                            className="form-control bg-warning shadow-none border-0"
                            placeholder="Write a tag"
                            value={tag}
                            onChange={(event)=>setTag(event.target.value)}
                            />
                        </div>
                    </form>
                    <div className="d-flex flex-direction-row mx-2 mb-2 mt-1" style={{'flexWrap':'wrap', 'overflowX': 'auto'}}>
                        {tags ? tags.map((tag, index) => <Tag tag={tag} key={index + 10000} id={index+10000} tags={tags} setTags={setTags}/>) : ''}

                    </div>
                    
                    {/* <select className="form-select shadow-none" aria-label="Default select example">
                        <option selected>Upscending</option>
                        <option value="1"></option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select> */}

                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary my-3 shadow-none">Применить</button>
                </div>
            </div>
        </div>
    )
}