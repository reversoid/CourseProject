import React from "react"

export const Comment = () => {
    return (

        <div className="comment d-flex flex-row mt-4">
            <div className="comment-img me-4"></div>
            <div className="comment-content d-flex flex-column">
                <div className="comment-username fw-bold">
                    George Makarena
                </div>
                <div className="comment-text">
                    I TOTALLY AGREE WITH YOU Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur hic atque deserunt voluptas quos amet ipsa voluptatum natus tempore nisi? Blanditiis tenetur cum accusamus facilis. Sint quaerat suscipit maiores voluptatem?
                </div>
            </div>
        </div>
    )
}