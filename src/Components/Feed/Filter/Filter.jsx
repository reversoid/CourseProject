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

                    {/* CATEGORY SECTION */}
                    {/* MUST LOAD CATEGORIES FROM DB TO BE GOOD CODE*/}
                    <div className="">
                    <input className="w-100 form-control shadow-none mb-2 px-1" list="categoryOptions" id="" placeholder="Category"/>
                        <datalist id="categoryOptions">
                            <option value="Books"/>
                            <option value="Films"/>
                            <option value="Games"/>
                            <option value="Music"/>
                        </datalist>
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
                        <div className="tag bg-warning set-tag me-3 mb-2">
                            <input type="text"
                            name=""
                            id=""
                            className="form-control bg-warning shadow-none border-0"
                            placeholder="Write a tag"
                            value={tag}
                            onChange={(event)=>setTag(event.target.value)}
                            />
                        </div>
                    </form>
                    <div className="d-flex flex-direction-row" style={{'flex-wrap':'wrap'}}>
                        {tags ? tags.map((tag, index) => <Tag tag={tag} key={index + 10000} />) : ''}

                    </div>
                    

                </div>
                
               
            </div>
        </div>
    )
}