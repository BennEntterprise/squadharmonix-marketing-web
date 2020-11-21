import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './thisissquad.css'

const ThisIsSquad = () => {
  return (
    <Container fluid id='thisissquad'>
      <Row>
        <Col
          className='squad-headline-container'
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <div id='headline-text'>
            <h1>THIS IS SQUAD</h1>
            <p>
              an inspiring learning community for dedicated vocalists ages 8-17
            </p>
            <p className='magenta-highlight'>ONLINE SINCE MAY!</p>
          </div>
        </Col>
      </Row>
      <Row>
        <div className='btn-group-container'>
          <div className='btn-group magenta-outline' id='btn-group-academy'>
            <div className='trio-1'>
              <h3>Squad&trade; Academy</h3>
            </div>
            <div className='trio-2'>
              <button className='btnn magenta-outline'>WHAT IS SQUAD</button>
              <button className='btnn magenta-outline'>
                MEET THE TEACHERS
              </button>
              <button className='btnn magenta-outline'>MEET THE SQUAD</button>
              <button className='btnn magenta-outline'>AUDITION!</button>
            </div>
            <div className='trio-3'></div>
          </div>
          <div className='btn-group ' id='btn-group-harmonix'>
            <div className='trio-1'>
              <h3>Squad Harmonix&trade;</h3>
            </div>
            <div className='trio-2'>
              <button className='btnn teal-outline'>MUSIC</button>
              <button className='btnn teal-outline'>ABOUT</button>
              <button className='btnn teal-outline'>MEMBERS</button>
              <button className='btnn teal-outline'>NEWS</button>
              <button className='btnn teal-outline'>MERCH</button>
            </div>
            <div className='trio-3'></div>
          </div>
        </div>
      </Row>
      <Row>
        <Col>
          <div className='btn-group' id='cta-btn-group'>
            <button>CONTACT</button>
            <button>JOIN OUR MAILING LIST</button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ThisIsSquad
