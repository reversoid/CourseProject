import React, { useEffect, useState } from 'react'
import { Filter } from '../Filter/Filter'
import { Review } from '../Review/Review'
import { Navigation } from '../../Navigation/Navigation'
import './styles.css'
import { AddReviewModal } from './AddReviewModal'
import { DropZone } from './DropZone'
import { getPosts } from '../../../api/getPosts'
import { getCurrentUserData } from '../../../api/getCurrentUserData'
import { Navigate } from 'react-router-dom'
import {useQueryParam} from '../../../hooks/useQueryParam'

export const Feed = (props) => {

    // posts array, my id and filters states
    let [posts, setPosts] = useState([])
    const [id, setId] = useState(1)
    let [filters, setFilters] = useQueryParam("filter") || [];
    // at the start we get posts and current user if logged in
    useEffect(() => {
        getCurrentUserData().then((response) => {
            if (!response) { return }
            setId(response.id)
        })
        getPosts(filters).then((response) => { setPosts(response) })
    }, [])

    // when the filter value is changed we get posts with this filter
    useEffect(() => {
        getPosts(filters).then((response) => { setPosts(response) })
    }, [filters])

    let [mobileFilters, setMobileFilters] = useState('d-none')
    let [mobileFiltersArrow, setMobileFiltersArrow] = useState('')

    let [navigate, setNavigate] = useState('')
    return (
        <>
            <section className='container-xxl text-light main-section'>
                <div className="toolbar container-fluid">
                    <h1 className='py-3 w-100'>Reviews</h1>
                    <div className="add-btn ms-3" data-bs-toggle="modal" data-bs-target="#addModal"></div>
                    <AddReviewModal />
                </div>
                <div className="container-fluid mb-3 d-flex align-items-start flex-column d-lg-none">
                    <div className='d-flex justify-content-center'>
                        <h3 className='d-inline-block text-start mb-3'>Filters</h3>
                        <div className={"down-arrow ms-3 "+mobileFiltersArrow} onClick={()=>{
                            if (mobileFilters){
                                setMobileFilters('')
                                setMobileFiltersArrow('rotated')
                            }
                            else{
                                setMobileFilters('d-none')
                                setMobileFiltersArrow('')

                            }
                        }}></div>
                    </div>
                    
                    
                    <div className={"d-block d-lg-none col-6 mx-auto col-md-6 col-12 "+mobileFilters}>
                        <Filter filters={filters} setFilters={setFilters} />
                    </div>
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
