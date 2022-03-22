import React, { useEffect, useState } from "react"

export const Tag = (props) => {
    // if editable then show cross and make cursor pointer on tag
    // function deleteTag(){
    //     console.log(props);
    //     if (!(props.tags && props.setTags)) {
    //         return
    //     }
    //     // let tags = props.tags

    //     // tags.splice(props.id, 1)
        
    //     props.setTags(tags)
    // }
    return (
        <div className={"tag bg-primary text-dark mx-1 my-1 d-inline-flex flex-row bg-secondary"}>
            <span className="tag-container">
                #{props.tag}
            </span>
            {/* MAKE CROSS LATER */}
            {/* <div className={"cross ms-3"}
                onClick={()=>{
                    if (!(props.tags && props.setTags)) {
                        console.log('no!');
                        return
                    }
                    let tags = props.tags
                    tags.splice(props.id, 1)                    
                    props.setTags(tags)
                    console.log('TAGS',props.tags);
                }}
            ></div> */}
        </div>
    )
}