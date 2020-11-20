import React from 'react'

// Components
import Navbar from './components/Navbar'

//Pagelets
import ThisIsSquad from './pagelets/ThisIsSquad'
import WhatIsSquad from './pagelets/WhatIsSquad'
import MeetTheSquad from './pagelets/MeetTheSquad'
import MeetTheTeachers from './pagelets/MeetTheTeachers'
import Contact from './pagelets/ToAudition'

function App() {
  return (
    <>
      <Navbar />
      <header className='App-header'>
        <div className='container'>
          <div className='row'>
            <div className='col'></div>
          </div>
        </div>
        <ThisIsSquad />
        <WhatIsSquad />
        <MeetTheSquad />
        <MeetTheTeachers />
        <Contact />
      </header>
    </>
  )
}

export default App
