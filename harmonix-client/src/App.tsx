import React from 'react'

import Navbar from './components/Navbar'

//Pagelets
import Home from './pagelets/Home'
import SquadAcademy from './pagelets/SquadAcademy'
import SquadHarmonix from './pagelets/SquadHarmonix'
import LauraJeanMusicAcademy from './pagelets/LauraJeanMusicAcademy'
import Contact from './pagelets/Contact'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <header className='App-header'>
        <Home />
        <SquadAcademy />
        <SquadHarmonix />
        <LauraJeanMusicAcademy />
        <Contact />
      </header>
    </div>
  )
}

export default App
