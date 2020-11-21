import React from 'react'

// Components
import Navbar from './components/Navbar'

//Pagelets
import ThisIsSquad from './pagelets/1ThisIsSquad/ThisIsSquad'
import WhatIsSquad from './pagelets/2WhatIsSquad/WhatIsSquad'
import MeetTheSquad from './pagelets/3MeetTheSquad/MeetTheSquad'
import MeetTheTeachers from './pagelets/4MeetTheTeachers/MeetTheTeachers'
import ToAudition from './pagelets/5ToAudition/ToAudition'

function App() {
  return (
    <>
      <Navbar />
      <ThisIsSquad />
      <WhatIsSquad />
      <MeetTheSquad />
      <MeetTheTeachers />
      <ToAudition />
    </>
  )
}

export default App
