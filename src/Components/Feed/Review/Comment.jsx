import React, { useEffect } from "react"
import { Editor } from "draft-js"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { EditorState } from "draft-js"
import RichTextEditor from "./RichTextEditor"


export const Comment = (props) => {
    return (

        <div className="comment d-flex flex-row mt-4">
            <div className="comment-img me-4"></div>
            <div className="comment-content d-flex flex-column">
                <div className="comment-username fw-bold">
                    {props.comment.username}
                </div>
                <div className="comment-text">
                    {props.comment.text}
                </div>
            </div>
        </div>
    )
}