import React from 'react'

// Navigation
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import TechDebt from './components/TechDebt'

//Pagelets
import ThisIsSquad from './pagelets/1ThisIsSquad/ThisIsSquad'
import WhatIsSquad from './pagelets/2WhatIsSquad/WhatIsSquad'
import MeetTheSquad from './pagelets/3MeetTheSquad/MeetTheSquad'
import MeetTheTeachers from './pagelets/4MeetTheTeachers/MeetTheTeachers'
import ToAudition from './pagelets/5ToAudition/ToAudition'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/tech-debt'>
          <TechDebt />
        </Route>
        <Route exact path='/'>
          <ThisIsSquad />
          <WhatIsSquad />
          <MeetTheSquad />
          <MeetTheTeachers />
          <ToAudition />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
