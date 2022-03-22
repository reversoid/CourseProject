import React from 'react'

import {Route, Routes, Link, Navigate} from 'react-router-dom'
import { Navigation } from './Components/Navigation/Navigation'
import {Profile} from './Components/Profile/Profile'
import {Feed} from './Components/Feed/Page/Feed'


function App() {
  return (
    <div className="App">
      <Navigation/>

      <Routes>
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='*' element={<Navigate to='/feed'/>}/>
      </Routes>
    </div>
  );
}

export default App;
