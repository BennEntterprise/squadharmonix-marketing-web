import React from 'react'

// Navigation
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Navbar3 from './components/Navbar3'
import Navbar4 from './components/Navbar4'
import Navbar5 from './components/Navbar5'
import TechDebt from './components/TechDebt'

//Pagelets
import ThisIsSquad from './pagelets-academy/1ThisIsSquad/ThisIsSquad'
import WhatIsSquad from './pagelets-academy/2WhatIsSquad/WhatIsSquad'
import MeetTheSquad from './pagelets-academy/3MeetTheSquad/MeetTheSquad'
import MeetTheTeachers from './pagelets-academy/4MeetTheTeachers/MeetTheTeachers'
import ToAudition from './pagelets-academy/5ToAudition/ToAudition'

import { magenta, teal, purple } from './constants/Colors'
import BannerPage from './pagelets-harmonix/1BannerPage/BannerPage'

function App() {
  const bandThickness = `1rem`
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/tech-debt-todo'>
          <TechDebt />
        </Route>
        <Route exact path={['/academy', '/home', '/']}>
          <ThisIsSquad />
          <Navbar2 />
          <WhatIsSquad />
          <Navbar3 />
          <MeetTheSquad />

          <Navbar4 />
          <MeetTheTeachers />
          <Navbar5 />
          <ToAudition />
        </Route>
        <Route exact path='/harmonix'>
          <BannerPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
