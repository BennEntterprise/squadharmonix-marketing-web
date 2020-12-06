import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ButtonBox = () => {
  return (
    <Row>
      <Col xs='6' sm='6' md='6' lg='6' xl='6'>
        <div
          className='v-flex-container magenta-outline'
          id='btn-group-academy'
        >
          <h3>Squad&trade; Academy</h3>
          <div id='squad-nav-btns' className='v-flex-container'>
            <a href='#whatissquad'>
              <button className='magenta-outline bg-grey'>WHAT IS SQUAD</button>
            </a>
            <a href='#meettheteachers'>
              <button className='magenta-outline bg-grey'>
                MEET THE TEACHERS
              </button>
            </a>
            <a href='#meetthesquad'>
              <button className='magenta-outline bg-grey'>
                MEET THE SQUAD
              </button>
            </a>
            <a href='#toaudition'>
              <button className='magenta-outline bg-grey'>AUDITION!</button>
            </a>
          </div>
        </div>
      </Col>
      <Col xs='6' sm='6' md='6' lg='6' xl='6'>
        <div className='v-flex-container teal-outline' id='btn-group-harmonix'>
          <h3> Squad Harmonix&trade;</h3>
          <div id='harmonix-nav-btns' className='v-flex-container'>
            <a href='#music'>
              <button className='teal-outline bg-grey'>MUSIC</button>
            </a>
            <a href='#about'>
              <button className='teal-outline bg-grey'>ABOUT</button>
            </a>
            <a href=''>
              <button className='teal-outline bg-grey'>MEMBERS</button>
            </a>
            <a href=''>
              <button className='teal-outline bg-grey'>NEWS</button>
            </a>
            <a href=''>
              <button className='teal-outline bg-grey'>MERCH</button>
            </a>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default ButtonBox
