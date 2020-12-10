import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
const ButtonBox = () => {
  return (
    <Row>
      <Col xs='6' sm='6' md='6' lg='6' xl='6'>
        <div
          id='btn-group-academy'
          className='v-flex-container btn-group-sq magenta-outline'
        >
          <h3 className='font-h3 liberation-sans-bold'>SQUAD ACADEMY</h3>
          <div
            id='squad-nav-btns'
            className='v-flex-container box-navigation-buttons'
          >
            <a href='#whatissquad'>
              <button className='magenta-outline bg-grey liberation-sans-bold rounded'>
                WHAT IS SQUAD
              </button>
            </a>
            <a href='#meettheteachers'>
              <button className='magenta-outline bg-grey liberation-sans-bold rounded'>
                MEET THE TEACHERS
              </button>
            </a>
            <a href='#meetthesquad'>
              <button className='magenta-outline bg-grey liberation-sans-bold rounded'>
                MEET THE SQUAD
              </button>
            </a>
            <a href='#toaudition'>
              <button className='magenta-outline bg-grey liberation-sans-bold rounded'>
                AUDITION!
              </button>
            </a>
          </div>
        </div>
      </Col>
      <Col xs='6' sm='6' md='6' lg='6' xl='6'>
        <div
          id='btn-group-harmonix'
          className='v-flex-container btn-group-sq teal-outline'
        >
          <h3 className='font-h3 liberation-sans-bold'>
            SQUAD HARMONIX&trade;
          </h3>
          <div
            id='harmonix-nav-btns'
            className='v-flex-container box-navigation-buttons'
          >
            <a href='https://linktr.ee/squadharmonix'>
              <button className='teal-outline bg-grey liberation-sans-bold rounded'>
                MUSIC
              </button>
            </a>

            <HashLink to='/harmonix#about-us-container'>
              <button className='teal-outline bg-grey liberation-sans-bold rounded'>
                ABOUT
              </button>
            </HashLink>

            <HashLink to='/harmonix#members-container'>
              <button className='teal-outline bg-grey  liberation-sans-bold rounded'>
                MEMBERS
              </button>
            </HashLink>
            <HashLink to='/harmonix#press-container'>
              <button className='teal-outline bg-grey  liberation-sans-bold rounded'>
                NEWS
              </button>
            </HashLink>
            <HashLink to='/harmonix#merch-container'>
              <button className='teal-outline bg-grey  liberation-sans-bold rounded'>
                MERCH
              </button>
            </HashLink>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default ButtonBox
