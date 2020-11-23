import React from 'react'
import './whatissquad.css'
import { Container } from 'react-bootstrap'
import LessonItem from '../../components/LessonItem'
function WhatIsSquad() {
  return (
    <Container fluid id='whatissquad'>
      <div id='LadderItemsContainer'>
        <div className='LadderItem'>
          <div className='LadderItemGraphic'>
            <p className='bg-magenta'>Who We Are</p>
          </div>
          <div className='LadderItemText'>
            <p>
              Squad Harmonix is the very first online A Cappella training
              academy for advanced young vocalists. It is a vocal team, a group
              and community of talented kids all working and supporting each
              other to be the best they can be. Think Pro Soccer, but for Voice.
            </p>
          </div>
        </div>
        <div className='LadderItem'>
          <div className='LadderItemGraphic'>
            <p className='bg-purple'>What We Do</p>
          </div>
          <div className='LadderItemText'>
            <p>
              Students meet every Saturday from 3.30-6.30 online via Zoom and
              learn harmony, sight reading, music theory, stage presence, and
              beatboxing (optional). Additionally, students will learn industry
              techniques to film and record their parts, resulting in
              professionally produced music videos promoted on Youtube.
              (Recorded and filmed remotely at home). Our music is available on
              Spotify, iTunes and all other online streaming platforms. (Our
              debut holiday album is being released Nov 29th 2020 and full album
              being released early next year!)
            </p>
            <p>
              For advanced students, training also includes: Songwriting,
              ProTools Recording/Mixing, Artist Development, and Music Business
              and private lessons are offered through our parent company Laura
              Jean Music Academy.
            </p>
            <p>
              Eventually we hope to return to training in person and perform
              weekly live shows however our Online Program has become so popular
              with our members that we will be continuing the Saturday classes
              ongoing with the option to train in person for those living in Los
              Angeles who have reached Senior and Performance Level.
            </p>
          </div>
        </div>
        <div className='LadderItem'>
          <div className='LadderItemGraphic'>
            <p className='bg-teal'> Training Levels</p>
          </div>
          <div className='LadderItemText'>
            <p>
              Levels are based on proficiency in sight reading, harmonization,
              and vocal training, and are{' '}
              <strong>
                <u>NOT</u>
              </strong>{' '}
              determined by student's age.
            </p>
          </div>
        </div>
      </div>

      <div className='' id='BarChartContainer'>
        <div className='BarContainer bg-magenta'>
          <h3 className='BarContainer-header'>Junior Squad&trade;</h3>
          <ul className='BarContainerText'>
            <li>3 hrs/week online training</li>
            <li>beginner music theory</li>
            <li>beginner sight reading</li>
            <li>eligigble for 1-2 videos per semester</li>
          </ul>
        </div>
        <div className='BarContainer  bg-purple'>
          <h3 className='BarContainer-header'>Senior Squad&trade;</h3>
          <ul className='BarContainerText'>
            <li>3 hrs/week online traingin including:</li>
            <ul>
              <li>ProTools recording/mixing</li>
              <li>intermediate music theory</li>
              <li>intermediate sight reading</li>
            </ul>
            <li>eligigble for 2+ videos per semester</li>
          </ul>
        </div>
        <div className='BarContainer bg-teal'>
          <h3 className='BarContainer-header '>Performance Squad&trade;</h3>
          <ul className='BarContainerText'>
            <li>Promoted on official artist page</li>
            <li>4 hrs/we online training including:</li>
            <ul>
              <li>songwriting</li>
              <li>music business</li>
              <li>ProTools reccording/mixing</li>
              <li>Advanced music theory</li>
            </ul>
            <li>3+ videos per semester</li>
            <li>Featured on professionally produced songs</li>
          </ul>
          <p>
            <em>*eligible for</em>
          </p>
          <div id='GraphButton'>
            <p>Laura Jean Music Academy Artist Development Program</p>
          </div>
        </div>
      </div>

      <div className='' id='OfferingSetContainer'>
        <h6>
          Suplemental classes are offered to help students accelerate their
          training including:
        </h6>
        <div id='LessonSetContainer'>
          <LessonItem text='music theory' />
          <LessonItem text='sight singing' />
          <LessonItem text='harmony' />
          <LessonItem text='beatboxing' />
          <LessonItem text='voicelessons' />
          <LessonItem text='mixing/recording' />
          <LessonItem text='songwriting' />
          <LessonItem text='piano lessons' />
        </div>
        <button id='private-lesson-button'>
          Click Here for More Info on Private Lessons
        </button>
      </div>
    </Container>
  )
}

export default WhatIsSquad
