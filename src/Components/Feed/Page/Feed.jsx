import React, { useEffect, useState } from 'react'
import { Filter } from '../Filter/Filter'
import { Review } from '../Review/Review'
import { Navigation } from '../../Navigation/Navigation'
import './styles.css'
import { AddReviewModal } from './AddReviewModal'
import { DropZone } from './DropZone'
import { getPosts } from '../../../api/getPosts'
export const Feed = () => {
    let [posts, setPosts] = useState(new Array)

    useEffect(()=>{
        getPosts().then((response)=>{setPosts(response)})
    }, [])
    return (
        <>
            <Navigation />
            <section className='container-xxl text-light main-section'>
                <div className="toolbar">
                    <h1 className='py-3'>Reviews</h1>
                    <div className="add-btn ms-3" data-bs-toggle="modal" data-bs-target="#addModal"></div>
                    <AddReviewModal/>
                </div>

                <div className="row">
                    <div className="col-md-12 col-lg-9">
                        {/* Make for loop */}
                        {posts.map((post, index) => {return <Review post={post} key={index}/>})}                        
                    </div>
                    <div className="col-lg-3 d-none d-lg-block">
                        <Filter />
                    </div>
                </div>
            </section>
        </>
    );
}
