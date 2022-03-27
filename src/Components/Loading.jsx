import React from 'react'

export const Loading = () => {
    return (
        <div className="spinner-border ms-4" role="status" style={{ "width": "1.5rem", "height": '1.5rem' }}>
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}