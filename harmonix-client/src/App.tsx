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
import CheckItOut from './pagelets-harmonix/2CheckItOut/CheckItOut'
import AboutUs from './pagelets-harmonix/3AboutUs/AboutUs'
import Press from './pagelets-harmonix/4Press/Press'
import Members from './pagelets-harmonix/5Members/Members'
import Merch from './pagelets-harmonix/6Merch/Merch'
import Contact from './pagelets-harmonix/7Contact/Contact'
import Typefaces from './constants/Typefaces'
import HorizontalGreyLine from './components/HorizontalGreyLine'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/typefaces'>
          <Switch>
            <Typefaces />
          </Switch>
        </Route>
        <Route path='/tech-debt-todo'>
          <TechDebt />
        </Route>
        <Route exact path={['/academy']}>
          <ThisIsSquad />
          <Navbar2 />
          <WhatIsSquad />
          {/*
          <Navbar3 />
          <MeetTheSquad />
          <Navbar4 />
          <MeetTheTeachers />
          <Navbar5 />
          <ToAudition /> */}
        </Route>
        <Route exact path={['/harmonix', '/home', '/']}>
          <BannerPage />
          <CheckItOut />
          <AboutUs />
          <HorizontalGreyLine />
          <Press />
          <HorizontalGreyLine />
          <Members />
          <HorizontalGreyLine />
          <Merch />
          <Contact />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
