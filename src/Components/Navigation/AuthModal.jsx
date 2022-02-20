import React from "react"


export const AuthModal = () => {
    return (
        <div className="modal fade" id="authModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Authorization</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="login-form">
                            <label htmlFor="form" className="mb-3">Login or create a new account</label>
                            <form id="form">
                                <input type="text" className="form-control mb-3" id="username" placeholder="Username" />
                                <input type="password" className="form-control mt-4" id="password" placeholder="Password"></input>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                        <div className="socials d-flex align-items-center">
                            <div className="google auth-logo"></div>
                            <div className="facebook auth-logo"></div>
                        </div>
                        <div className="buttons">
                            <button type="button" className="btn btn-warning me-3">Registration</button>
                            <button type="button" className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}