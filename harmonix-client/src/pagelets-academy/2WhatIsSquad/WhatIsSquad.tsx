import React from 'react'
import './whatissquad.css'
import { HashLink } from 'react-router-hash-link'
import { Container, Row, Col } from 'react-bootstrap'
import LessonItem from '../../components/LessonItem/LessonItem'

import ImgLJMA from '../../images/logos/LJMA Black(trimmed).png'
function WhatIsSquad() {
  return (
    <>
      <Container fluid id='whatissquad'>
        <Row>
          <Col className='justify-content-center'>
            <div id='grid-wis'>
              <div id='grid-h1'>
                <div className='LadderItemGraphic'>
                  <h5 className='font-p liberation-sans-bold bg-magenta '>
                    WHO WE ARE
                  </h5>
                </div>
              </div>
              <div id='grid-b1'>
                <div className='LadderItemText'>
                  <h5 className='font-h5 liberation-sans'>
                    Squad Harmonix is the very first online A Cappella training
                    academy for advanced young vocalists. It is a vocal team, a
                    group and community of talented kids all working and
                    supporting each other to be the best they can be. Think Pro
                    Soccer, but for Voice.
                  </h5>
                </div>
              </div>

              <div id='grid-h2'>
                <div className='LadderItemGraphic'>
                  <h5 className='font-h5 liberation-sans-bold bg-purple'>
                    WHAT WE DO
                  </h5>
                </div>
              </div>
              <div id='grid-b2'>
                <div className='LadderItemText'>
                  <h5 className='font-h5 liberation-sans'>
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
                  </h5>
                  <h5 className='font-h5 liberation-sans'>
                    For advanced students, training also includes: Songwriting,
                    ProTools Recording/Mixing, Artist Development, and Music
                    Business and private lessons are offered through our parent
                    company Laura Jean Music Academy.
                  </h5>
                  <h5 className='font-h5 liberation-sans'>
                    Eventually we hope to return to training in person and
                    perform weekly live shows however our Online Program has
                    become so popular with our members that we will be
                    continuing the Saturday classes ongoing with the option to
                    train in person for those living in Los Angeles who have
                    reached Senior and Performance Level.
                  </h5>
                </div>
              </div>

              <div id='grid-h3'>
                <div className='LadderItemGraphic'>
                  <h5 className='font-h5 liberation-sans-bold bg-teal'>
                    TRAINING LEVELS
                  </h5>
                </div>
              </div>
              <div id='grid-b3'>
                <div className='LadderItemText'>
                  <h5 className='font-h5 liberation-sans'>
                    Levels are based on proficiency in sight reading,
                    harmonization, and vocal training, and are{' '}
                    <strong>
                      <u>NOT</u>
                    </strong>{' '}
                    determined by student's age.
                  </h5>
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
                  <ul className='font-h6 liberation-sans'>
                    <li>3 hrs/week online training</li>
                    <li>Beginner music theory</li>
                    <li>Beginner sight reading</li>
                    <li>Eligible for 1-2 videos per semester</li>
                  </ul>
                </div>
              </div>
              <div id='grid-item-bar-container-purple'>
                <div className='bar bg-purple'>
                  <h5 className='font-h5 liberation-sans-bold bar-header'>
                    SENIOR SQUAD&trade;
                  </h5>
                  <ul className='font-h6 liberation-sans'>
                    <li>3 hrs/week online training including:</li>
                    <ul>
                      <li>ProTools recording/mixing</li>
                      <li>intermediate music theory</li>
                      <li>intermediate sight reading</li>
                    </ul>
                    <li>eligible for 2+ videos per semester</li>
                  </ul>
                </div>
              </div>
              <div id='grid-item-bar-container-teal'>
                <div className='bar bg-teal'>
                  <h5 className='font-h5 liberation-sans-bold bar-header'>
                    PERFORMANCE SQUAD&trade;
                  </h5>
                  <ul className='font-h6 liberation-sans'>
                    <li>Promoted on official artist page</li>
                    <li>4 hrs/week online training including:</li>
                    <ul>
                      <li>songwriting</li>
                      <li>music business</li>
                      <li>ProTools recording/mixing</li>
                      <li>advanced music theory</li>
                    </ul>
                    <li>3+ videos per semester</li>
                    <li>Featured on professionally produced songs</li>
                  </ul>
                  <p>
                    <em>*ELIGIBLE FOR</em>
                  </p>
                  <div id='ljma-cutout'>
                    <a
                      href='https://laurajeanmusicacademy.com'
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      <img src={ImgLJMA} alt='ljma logo' />
                      <p
                        className='font-mini liberation-sans-bold'
                        style={{ color: 'black', textAlign: 'center' }}
                      >
                        ARTIST DEVELOPMENT PROGRAM
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ margin: '0rem auto' }}>
          <Col>
            <div id='OfferingSetContainer'>
              <h6 className='font-h6 liberation-sans-bold text-center'>
                SUPPLEMENTAL CLASSES ARE OFFERED TO HELP STUDENTS ACCELERATE
                THEIR TRAINING INCLUDING:
              </h6>
              <div id='LessonSetContainer'>
                <LessonItem text='MUSIC THEORY' />
                <LessonItem text='SIGHT-SINGING' />
                <LessonItem text='HARMONY' />
                <LessonItem text='BEATBOXING' />
                <LessonItem text='VOICE LESSONS' />
                <LessonItem text='MIXING/RECORDING' />
                <LessonItem text='SONGWRITING' />
                <LessonItem text='PIANO LESSONS' />
              </div>
              <a
                href='https://laurajeanmusicacademy.com'
                style={{ width: '90%', padding: '0' }}
              >
                <button id='private-lesson-button'>
                  <img
                    src={ImgLJMA}
                    alt='laura jean music academy logo'
                    className='d-none d-md-block'
                    style={{ width: 'auto', maxHeight: '100px' }}
                  />
                  <p className='font-p liberation-sans-bold'>
                    CLICK HERE FOR MORE INFO ON PRIVATE LESSONS
                  </p>
                </button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default WhatIsSquad
