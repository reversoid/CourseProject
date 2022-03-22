import React, { useState } from "react"
import { Tag } from '../../Feed/Review/Tag'
import './styles.css'

export const Filter = (props) => {
    let [tag, setTag] = useState('')
    let [tags, setTags] = useState([])

    // CHECKBOX STATES
    let [filmsChecked, setFilmsChecked] = useState(false)
    let [gamesChecked, setGamesChecked] = useState(false)
    let [booksChecked, setBooksChecked] = useState(false)
    let [musicChecked, setMusicChecked] = useState(false)

    // DATE STATES
    let [fromDate, setFromDate] = useState('')
    let [toDate, setToDate] = useState('')

    return (
        <div className="filters">
            <h4 className="text-center py-3 pb-4">Filters</h4>

            <div className="">
                {/* <span className="text-center w-100">Date</span> */}
                <div action="" className="d-flex flex-column" onSubmit={(e) => {
                    e.preventDefault()
                }}>
                    <label htmlFor="form-check" className="text-warning ms-2">Category</label>
                    <div className="form-check mt-1 mb-3" id="form-check">
                        <div className="d-block">
                            <label htmlFor="films">Films</label>
                            <input type="checkbox"
                                className="form-check-input mx-1 shadow-none"
                                id="films"
                                checked={filmsChecked}
                                onChange={() => setFilmsChecked(!filmsChecked)}
                            />
                        </div>

                        <div className="d-block">
                            <label htmlFor="games">Games</label>
                            <input type="checkbox"
                                className="form-check-input mx-1 shadow-none"
                                id="games"
                                checked={gamesChecked}
                                onChange={() => setGamesChecked(!gamesChecked)}
                            />
                        </div>

                        <div className="d-block">
                            <label htmlFor="books">Books</label>
                            <input type="checkbox"
                                className="form-check-input mx-1 shadow-none"
                                id="books"
                                checked={booksChecked}
                                onChange={(e) => setBooksChecked(!booksChecked)}
                            />
                        </div>

                        <div className="d-block">
                            <label htmlFor="music">Music</label>
                            <input type="checkbox"
                                className="form-check-input mx-1 shadow-none"
                                id="films"
                                checked={musicChecked}
                                onChange={(e) => setMusicChecked(!musicChecked)}
                            />
                        </div>

                    </div>


                    {/* DATE SECTION */}
                    <div className="d-block row w-100" id="dateBlock">
                        <label htmlFor="dateFrom" className="ms-2 text-warning">From</label>

                        <div className="col-8 m-auto mt-1">
                            {/* FROM DATE */}
                            <input type="date"
                                name=""
                                id="dateFrom"
                                className="form-control bg-secondary text-light border-0 ps-2 shadow-none mb-2"
                                value={fromDate}
                                onChange={(e) => setFromDate(e.target.value)}
                            />
                        </div>
                        <label htmlFor="dateTo" className="ms-2 text-warning">To</label>

                        <div className="col-8 m-auto mt-1">
                            {/* TO DATE */}
                            <input type="date"
                                name="" id="dateTo"
                                className="form-control bg-secondary text-light border-0 ps-2 shadow-none"
                                value={toDate}
                                onChange={(e) => setToDate(e.target.value)}
                            />
                        </div>

                    </div>
                    <form action=""
                        className="d-flex align-items-center justify-content-center mt-3"
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
                    </form>
                    <div className="d-flex flex-direction-row mx-2 mb-2 mt-1" style={{ 'flexWrap': 'wrap', 'overflowX': 'auto' }}>
                        {tags ? tags.map((tag, index) => <Tag tag={tag} key={index + 10000} id={index + 10000} tags={tags} setTags={setTags} />) : ''}
                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-warning mb-3 shadow-none"
                        onClick={() => {
                            props.setFilters({
                                filmsChecked,
                                gamesChecked,
                                booksChecked,
                                musicChecked,
                                fromDate,
                                toDate,
                                tags
                            })
                        }}
                    >Применить</button>
                </div>
            </div>
        </div>
    )
}