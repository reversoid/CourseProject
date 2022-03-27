import React from 'react'
import {Route, Routes, Link, Navigate} from 'react-router-dom'
import { Navigation } from './Components/Navigation/Navigation'
import {Profile} from './Components/Profile/Profile'
import {Feed} from './Components/Feed/Page/Feed'
import { useQueryParam } from './hooks/useQueryParam'
function App() {
  let [search, setSearch] = useQueryParam('search') || []

  return (
    <div className="App">
      <Navigation search={{search, setSearch}}/>
      <Routes>
        <Route path='/feed' element={<Feed search={{search, setSearch}}/>}/>
        <Route path='/profile' element={<Profile search={{search, setSearch}}/>}/>
        <Route path='*' element={<Navigate to='/feed'/>}/>
      </Routes>
    </div>
  );
}

export default App;
