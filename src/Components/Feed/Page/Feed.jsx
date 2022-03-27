import React, { useEffect, useState, useContext } from 'react'
import { Filter } from '../Filter/Filter'
import { Review } from '../Review/Review'
import './styles.css'
import { AddReviewModal } from './AddReviewModal'
import { DropZone } from './DropZone'
import { getPosts } from '../../../api/getPosts'
import { getCurrentUserData } from '../../../api/getCurrentUserData'
import { useQueryParam } from '../../../hooks/useQueryParam'
import { Loading } from '../../Loading'


export const Feed = (props) => {
    let [loading, setLoading] = useState(false)
    let [search, setSearch] = useQueryParam('search') || false

    // posts array, my id and filters states
    let [posts, setPosts] = useState(new Array())
    const [id, setId] = useState(1)

    let [filters, setFilters] = useQueryParam("filter") || false;

    
    // at the start we get posts and current user if logged in
    useEffect(() => {
        getCurrentUserData().then((response) => {
            if (!response) { return }
            setId(response.id)
        })
        let allFilters = {
            ...(props.search.search && { pattern: props.search.search }),
            ...filters
        }
        getPosts(allFilters, setLoading).then((response) => {
            setPosts([]);
            setPosts(response);
        })
    }, [filters, props.search.search])

    let [mobileFilters, setMobileFilters] = useState('d-none')
    let [mobileFiltersArrow, setMobileFiltersArrow] = useState('')

    let [navigate, setNavigate] = useState('')

    let [btnDeleteSearch, setBtnDeleteSearch] = useState(<><button
        onClick={() => {
            props.search.setSearch('')
        }}
        className="btn btn-warning rounded-pill d-inline-block shadow-none mb-2">Remove search</button> <br /></>)

    let [btnDeleteFilter, setBtnDeleteFilter] = useState(<button
        onClick={() => {
            setFilters('')
        }}
        className="btn btn-warning rounded-pill d-inline-block shadow-none">Remove filters&nbsp;</button>)

    return (
        <>
            <section className='container-xxl text-light main-section'>
                <div className="toolbar container-fluid">
                    <div className="py-3 w-100 mb-2">
                        <h1 className='d-inline-block mb-0'>Reviews</h1>
                        {loading?<Loading/>:''}
                    </div>


                    <div className="add-btn ms-3" data-bs-toggle="modal" data-bs-target="#addModal"></div>
                    <AddReviewModal />
                </div>
                <div className="container-fluid mb-3 d-flex align-items-start flex-column d-lg-none">
                    <div className='d-flex justify-content-center'>
                        <h3 className='d-inline-block text-start mb-3'>Filters</h3>
                        <div className={"down-arrow ms-3 " + mobileFiltersArrow} onClick={() => {
                            if (mobileFilters) {
                                setMobileFilters('')
                                setMobileFiltersArrow('rotated')
                            }
                            else {
                                setMobileFilters('d-none')
                                setMobileFiltersArrow('')

                            }
                        }}></div>
                    </div>


                    <div className={"d-block d-lg-none col-6 mx-auto col-md-6 col-12 " + mobileFilters}>
                        <Filter filters={filters} setFilters={setFilters} />
                    </div>
                </div>

                <div className="interaction container-fluid mb-3">
                    {props.search.search?btnDeleteSearch:''}
                    
                    {filters?btnDeleteFilter:''}
                </div>

                <div className="row">
                    <div className="col-md-12 col-lg-9">
                        {posts ? posts.map((post, index) => { return <Review post={post} key={index} currentId={id} /> }) : ''}
                    </div>
                    <div className="col-lg-3 d-none d-lg-block">
                        <Filter filters={filters} setFilters={setFilters} />
                    </div>
                </div>
            </section>
        </>
    );
}
