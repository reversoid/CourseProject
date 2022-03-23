import React, { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { AuthModal } from './AuthModal'
import './styles.css'
import { fullTextSearch } from '../../api/fullTextSearch'
import { getCurrentUserData } from '../../api/getCurrentUserData'
export const Navigation = () => {

  const [profileArea, setProfileArea] = useState(
    <div className="text-primary" data-bs-toggle="modal" data-bs-target="#authModal">Sign in</div>
  )

  let [searchField, setSearchField] = useState('')
  useEffect(() => {
    getCurrentUserData().then((res) => {
      if (res) {
        setProfileArea(
          <Link to={'/profile'} className="text-decoration-none text-light">
            Profile
          </Link>)
      }
    })
  }, [])
  return (
    <nav className="navbar container-xxl navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="text-light" to={'/feed'}><div className="logo" /></Link>
        <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ms-4 d-flex">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Films</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Games</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Books</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">All</a>
            </li>
            <li className="nav-item">
              <div className="nav-link" role="button">{profileArea}
                <AuthModal />
              </div>
            </li>

            <li className="nav-item d-flex align-items-center">

            </li>

          </ul>
          <form className="d-flex ms-lg-4 ms-0 ms-lg-1 align-items-center flex-row mt-lg-0 mt-2"
            onSubmit={(event) => {
              fullTextSearch({ pattern: searchField }).then((res) => {
                console.log(res);
                // <Navigate to={'/profile'}/>
              })
              event.preventDefault()
            }}
          >
            <input className="form-control me-lg-2 me-3 shadow-none"
              type="search"
              placeholder="Search for reviews"
              aria-label="Search"
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)}
            />
            <button className="btn btn-warning shadow-none ms-1" type="submit">Search</button>
          </form>


        </div>
      </div>
    </nav>

  )
}