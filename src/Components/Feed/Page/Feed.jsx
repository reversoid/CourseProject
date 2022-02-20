import React from 'react'
import {Filter} from '../Filter/Filter'
import {Review} from '../Review/Review'
import {Navigation} from '../../Navigation/Navigation'

export const Feed = () => {
    return (
        <>
            <Navigation/>
            <section className='container-xxl text-light main-section'>
                <h1 className='py-3'>Reviews</h1>
                <div className="row">
                    <div className="col-9">
                        {/* Make for loop */}
                        <Review />
                    </div>
                    <div className="col-3">
                        <Filter />
                    </div>
                </div>
            </section>
        </>
    );
}
