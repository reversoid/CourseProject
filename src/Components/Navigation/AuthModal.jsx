import React, { useEffect, useState } from "react"
import { registration } from '../../api/registration'
import { Loader } from "../Loader/Loader"



export const AuthModal = () => {
    let [login, setLogin] = useState('')
    let [password, setPassword] = useState('')

    let [info, setInfo] = useState()

    function showInfo(response){
        if(response.code===0){
            setInfo(<div className="text-success mt-1">Success</div>)

        }
        else{
            setInfo(<div className="text-danger mt-1">{response.message}</div>)
        }
    }

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

                                <input type="text"
                                    className="form-control mb-3"
                                    id="username"
                                    placeholder="Username"
                                    value={login}
                                    onChange={(event) => setLogin(event.target.value)} />

                                <input type="password"
                                    className="form-control mt-4"
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)} />

                                {info}
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                        <div className="socials d-flex align-items-center">
                            <div className="google auth-logo"></div>
                            <div className="facebook auth-logo"></div>
                        </div>
                        <div className="buttons">
                            <button type="button"
                                className="btn btn-warning me-3"
                                onClick={() => registration(login, password, showInfo)}>
                                Registration
                            </button>
                            <button type="button"
                            className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}