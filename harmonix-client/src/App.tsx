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
      <ThisIsSquad />
      <WhatIsSquad />
      <MeetTheSquad />
      <MeetTheTeachers />
      <Contact />
    </>
  )
}

export default App
