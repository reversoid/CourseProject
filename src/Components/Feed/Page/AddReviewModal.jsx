import React, { useCallback } from "react";
import { DropZone } from "./DropZone";

export const AddReviewModal = () => {
    const onDrop = useCallback(acceptedFiles => {
        // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
        console.log(acceptedFiles);
      }, []);

    return (
        <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content bg-dark">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add new review</h5>
                        <button type="button" className="btn-close bg-light " data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container m-auto d-flex justify-content-center flex-column">
                            <input type="text" placeholder="Title" className="form-control mb-3"/>
                            <textarea className="form-control" name="" id="" cols="30" rows="10" placeholder="Review itself"></textarea>
                            <DropZone onDrop={onDrop} accept={"image/*"} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}