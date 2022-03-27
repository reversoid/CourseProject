import * as React from "react";
import { useState } from 'react'
import * as JSURL from "jsurl";
import { Tag } from '../../Feed/Review/Tag'

import { useQueryParam } from '../../../hooks/useQueryParam'
import './styles.css'

export const Filter = (props) => {
    // value of input tag
    let [tag, setTag] = useState('')

    // get filter values from url
    let [filter, setFilter] = useQueryParam("filter");

    // fill default values
    if (!filter) {
        filter = { category: [], dateFrom: "", dateTo: "", tags: [] };
    }

    // TODO is legacy code, can be simplified with only filter.tags probably
    let [tags, setTags] = useState(filter.tags)

    /**
     * This function handles change of form
     * @param {*} event
     * @param {*} changeOfTags determines whether form inputs changes or tags changes
     */
    function handleChange(event, changeOfTags = false) {
        let form
        if (changeOfTags)
            form = event.currentTarget.parentNode;
        else
            form = event.currentTarget;

        let formData = new FormData(form);

        // This complex data structure is preserved in the URL in the
        // `filter` query parameter each time a value in the form changes!
        let filter = {
            category: formData.getAll("category"),
            dateFrom: formData.get("dateFrom"),
            dateTo: formData.get("dateTo"),
            tags: tags,
        };

        setFilter(filter, { replace: true });
    }

    return (
        <div className="filters">
            <h4 className="text-center py-3 pb-4">Filters</h4>

            <div className="">
                <form id="filterForm" className="d-flex flex-column"
                    onChange={handleChange}
                >
                    {/* CATEGORY SECTION */}
                    <label htmlFor="form-check" className="text-warning ms-2">Category</label>
                    <div className="form-check mt-1 mb-3" id="form-check">
                        <div className="d-block">
                            <label htmlFor="films">Films</label>
                            <input
                                type="checkbox"
                                className="form-check-input mx-1 shadow-none"
                                id="films"
                                defaultChecked={filter.category.includes("films")}
                                name="category"
                                value="films"
                            />
                        </div>

                        <div className="d-block">
                            <label htmlFor="games">Games</label>
                            <input
                                type="checkbox"
                                className="form-check-input mx-1 shadow-none"
                                id="games"
                                defaultChecked={filter.category.includes("games")}
                                name="category"
                                value="games"
                            />
                        </div>

                        <div className="d-block">
                            <label htmlFor="books">Books</label>
                            <input type="checkbox"
                                className="form-check-input mx-1 shadow-none"
                                id="books"
                                defaultChecked={filter.category.includes("books")}
                                name="category"
                                value="books"
                            />
                        </div>

                        <div className="d-block">
                            <label htmlFor="music">Music</label>
                            <input type="checkbox"
                                className="form-check-input mx-1 shadow-none"
                                id="films"
                                defaultChecked={filter.category.includes("music")}
                                name="category"
                                value="music"
                            />
                        </div>

                    </div>


                    {/* DATE SECTION */}
                    <label htmlFor="dateFrom" className="ms-2 text-warning">From</label>

                    <div className="row d-flex justify-content-center">
                        <div className="col-8 mt-1">
                            {/* FROM DATE */}
                            <input type="date"
                                id="dateFrom"
                                className="form-control bg-secondary text-light border-0 ps-2 shadow-none mb-2"
                                name="dateFrom"
                                defaultValue={filter.dateFrom}
                            />
                        </div>
                    </div>

                    <label htmlFor="dateTo" className="ms-2 text-warning">To</label>

                    <div className="row d-flex justify-content-center">

                        <div className="col-8 mt-1">
                            {/* TO DATE */}
                            <input type="date"
                                id="dateTo"
                                className="form-control bg-secondary text-light border-0 ps-2 shadow-none"
                                name="dateTo"
                                defaultValue={filter.dateTo}
                            />
                        </div>
                    </div>

                    <div
                        className="d-flex align-items-center justify-content-center mt-3"
                        onKeyDown={(event) => {
                            if (event.key != 'Enter') { return }
                            tag = tag.trim()
                            if (!tag.trim() || tag.includes('#') || tag.includes(' ')) {
                                alert('Tag must not be empty, not contain "#" and whitespaces')
                                event.preventDefault()
                                return
                            }
                            tags.push(tag)
                            setTags(tags)
                            setTag('')
                            handleChange(event, true)
                            event.preventDefault()
                        }}
                    >
                        <div className="tag bg-secondary set-tag my-2 text-dark">
                            <input type="text"
                                name=""
                                id="tagInput"
                                className="form-control bg-secondary shadow-none border-0 placeholder-dark"
                                placeholder="Write a tag"
                                value={tag}
                                onChange={(event) => setTag(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="d-flex flex-direction-row mx-2 mb-2 mt-1" style={{ 'flexWrap': 'wrap', 'overflowX': 'auto' }}>
                        {filter.tags ? filter.tags.map((tag, index) => <Tag tag={tag} key={index + 10000} id={index + 10000} tags={tags} setTags={setTags} />) : ''}
                    </div>

                </form>
                {/* for form debug */}
                {/* <p>The current form values are:</p>

                    <pre>{JSON.stringify(filter || {}, null, 2)}</pre> */}
                {/* <div className="d-flex justify-content-center">
                    <button className="btn btn-warning mb-3 shadow-none"
                        type="submit"
                        form="filterForm"
                    >Применить</button>
                </div> */}
            </div>
        </div>
    )
}