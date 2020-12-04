import React from 'react'
import './whatissquad.css'
import { Container, Row, Col } from 'react-bootstrap'
import LessonItem from '../../components/LessonItem/LessonItem'
function WhatIsSquad() {
  return (
    <>
      <Container fluid id='whatissquad'>
        <Row>
          <Col className='justify-content-center'>
            <div id='grid-wis'>
              <div id='grid-h1'>
                <div className='LadderItemGraphic'>
                  <h6 className='font-h6 liberation-sans-bold bg-magenta '>
                    WHO WE ARE
                  </h6>
                </div>
              </div>
              <div id='grid-b1'>
                <div className='LadderItemText'>
                  <p className='font-mini liberation-sans'>
                    Squad Harmonix is the very first online A Cappella training
                    academy for advanced young vocalists. It is a vocal team, a
                    group and community of talented kids all working and
                    supporting each other to be the best they can be. Think Pro
                    Soccer, but for Voice.
                  </p>
                </div>
              </div>

              <div id='grid-h2'>
                <div className='LadderItemGraphic'>
                  <h6 className='font-h6 liberation-sans-bold bg-purple'>
                    WHAT WE DO
                  </h6>
                </div>
              </div>
              <div id='grid-b2'>
                <div className='LadderItemText'>
                  <p className='font-mini liberation-sans'>
                    Students meet every Saturday from 3.30-6.30 online via Zoom
                    and learn harmony, sight reading, music theory, stage
                    presence, and beatboxing (optional). Additionally, students
                    will learn industry techniques to film and record their
                    parts, resulting in professionally produced music videos
                    promoted on Youtube. (Recorded and filmed remotely at home).
                    Our music is available on Spotify, iTunes and all other
                    online streaming platforms. (Our debut holiday album is
                    being released Nov 29th 2020 and full album being released
                    early next year!)
                  </p>
                  <p className='font-mini liberation-sans'>
                    For advanced students, training also includes: Songwriting,
                    ProTools Recording/Mixing, Artist Development, and Music
                    Business and private lessons are offered through our parent
                    company Laura Jean Music Academy.
                  </p>
                  <p className='font-mini liberation-sans'>
                    Eventually we hope to return to training in person and
                    perform weekly live shows however our Online Program has
                    become so popular with our members that we will be
                    continuing the Saturday classes ongoing with the option to
                    train in person for those living in Los Angeles who have
                    reached Senior and Performance Level.
                  </p>
                </div>
              </div>

              <div id='grid-h5'>
                <div className='LadderItemGraphic'>
                  <h6 className='font-h6 liberation-sans-bold bg-teal'>
                    TRAINING LEVELS
                  </h6>
                </div>
              </div>
              <div id='grid-b3'>
                <div className='LadderItemText'>
                  <p className='font-mini liberation-sans'>
                    Levels are based on proficiency in sight reading,
                    harmonization, and vocal training, and are{' '}
                    <strong>
                      <u>NOT</u>
                    </strong>{' '}
                    determined by student's age.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id='grid-bar-container'>
              <div id='grid-item-bar-container-magenta'>
                <div className='bar bg-magenta'>
                  <h5 className='font-h5 liberation-sans-bold bar-header'>
                    JUNIOR SQUAD&trade;
                  </h5>
                  <ul>
                    <li>3 hrs/week online training</li>
                    <li>beginner music theory</li>
                    <li>beginner sight reading</li>
                    <li>eligigble for 1-2 videos per semester</li>
                  </ul>
                </div>
              </div>
              <div id='grid-item-bar-container-purple'>
                <div className='bar bg-purple'>
                  <h5 className='font-h5 liberation-sans-bold bar-header'>
                    SENIOR SQUAD&trade;
                  </h5>
                  <ul>
                    <li>3 hrs/week online traingin including:</li>
                    <ul>
                      <li>ProTools recording/mixing</li>
                      <li>intermediate music theory</li>
                      <li>intermediate sight reading</li>
                    </ul>
                    <li>eligigble for 2+ videos per semester</li>
                  </ul>
                </div>
              </div>
              <div id='grid-item-bar-container-teal'>
                <div className='bar bg-teal'>
                  <h5 className='font-h5 liberation-sans-bold bar-header'>
                    PERFORMANCE SQUAD&trade;
                  </h5>
                  <ul>
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
            </div>
          </Col>
        </Row>
        <Row style={{ margin: '0rem auto' }}>
          <Col>
            <div id='OfferingSetContainer'>
              <h5 className='font-h5 liberation-sans-bold text-center'>
                Suplemental classes are offered to help students accelerate
                their training including:
              </h5>
              <div id='LessonSetContainer'>
                <LessonItem text='MUSIC THEORY' />
                <LessonItem text='SIGHT SINGING' />
                <LessonItem text='HARMONY' />
                <LessonItem text='BEATBOXING' />
                <LessonItem text='VOICE LESSONS' />
                <LessonItem text='MIXING/RECORDING' />
                <LessonItem text='SONG WRITING' />
                <LessonItem text='PIANO LESSONS' />
              </div>
              <button id='private-lesson-button'>
                Click Here for More Info on Private Lessons
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default WhatIsSquad
