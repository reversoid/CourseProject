import React from 'react'
import { Feed } from './Components/Feed/Page/Feed.jsx';
import { Profile } from './Components/Profile/Profile.jsx';
import {Route, Routes, Link, Navigate} from 'react-router-dom'
import { Navigation } from '../../Navigation/Navigation'

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
