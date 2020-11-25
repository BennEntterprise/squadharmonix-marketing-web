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
import ThisIsSquad from './pagelets/1ThisIsSquad/ThisIsSquad'
import WhatIsSquad from './pagelets/2WhatIsSquad/WhatIsSquad'
import MeetTheSquad from './pagelets/3MeetTheSquad/MeetTheSquad'
import MeetTheTeachers from './pagelets/4MeetTheTeachers/MeetTheTeachers'
import ToAudition from './pagelets/5ToAudition/ToAudition'

import { magenta, teal, purple } from './constants/Colors'
import BannerPage from './pagelets/harmonix-site/1BannerPage/BannerPage'

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
