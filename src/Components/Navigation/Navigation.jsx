import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {AuthModal} from './AuthModal'
import './styles.css'
import {getCurrentUserData} from '../../api/getCurrentUserData'
export const Navigation = () => {
  let [navigate, setNavigate] = useState()
  const [profileArea, setProfileArea] = useState(
    <div className="text-primary" data-bs-toggle="modal" data-bs-target="#authModal">Sign in</div>
  )
  useEffect(() => {
    getCurrentUserData().then((res) => {
      if (res) {
        setProfileArea(
          <Link to={'/profile'} className="text-decoration-none text-light">
            {/* <div className="profile-link">
              <div className="profile-img me-2"></div>
              <div className="me-2">
                {res.username}
              </div>
            </div> */}
            Profile
          </Link>)
      }
    })
  }, [])
  return (
    // <nav className='container-xxl bg-dark'>
    //   <Link className="text-light" to={'/feed'}><div className="logo me-4" /></Link>
    //   <input type="text" className='form-control search shadow-none d-none d-lg-inline-block' placeholder='Search for reviews' />
    //   <div className='text-light d-none d-lg-inline-block'>
    //     <span className="category-item fs-5">Films</span>
    //     <span className="category-item fs-5">Games</span>
    //     <span className="category-item fs-5">Books</span>
    //     <span className="category-item fs-5">All</span>
    //   </div>
    //   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   {/* MODAL BUTTON OR PROFILE LINK*/}
    //   <div className="text-light d-none d-lg-inline-block">
    //     {profileArea}
    //     <AuthModal />
    //   </div>
    // </nav>

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
                <AuthModal/>
              </div>
            </li>

            <li className="nav-item d-flex align-items-center">

            </li>

          </ul>
          <form className="d-flex ms-lg-4 ms-0 ms-lg-1 align-items-center flex-row mt-lg-0 mt-2">
            <input className="form-control me-lg-2 me-3 shadow-none" type="search" placeholder="Search for reviews" aria-label="Search" />
            <button class="btn btn-warning shadow-none ms-1" type="submit">Search</button>
          </form>        


        </div>
      </div>
    </nav>

  )
}