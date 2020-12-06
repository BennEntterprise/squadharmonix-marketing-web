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
          <h3 className='font-h3 liberation-sans-bold'>SQUAD&trade; ACADEMY</h3>
          <div id='squad-nav-btns' className='v-flex-container'>
            <a href='#whatissquad'>
              <button className='magenta-outline bg-grey liberation-sans'>
                WHAT IS SQUAD
              </button>
            </a>
            <a href='#meettheteachers'>
              <button className='magenta-outline bg-grey liberation-sans'>
                MEET THE TEACHERS
              </button>
            </a>
            <a href='#meetthesquad'>
              <button className='magenta-outline bg-grey liberation-sans'>
                MEET THE SQUAD
              </button>
            </a>
            <a href='#toaudition'>
              <button className='magenta-outline bg-grey liberation-sans'>
                AUDITION!
              </button>
            </a>
          </div>
        </div>
      </Col>
      <Col xs='6' sm='6' md='6' lg='6' xl='6'>
        <div className='v-flex-container teal-outline' id='btn-group-harmonix'>
          <h3 className='font-h3 liberation-sans-bold'>
            SQUAD HARMONIX&trade;
          </h3>
          <div id='harmonix-nav-btns' className='v-flex-container'>
            <a href='3'>
              <button className='teal-outline bg-grey liberation-sans'>
                MUSIC
              </button>
            </a>
            <a href='#'>
              <button className='teal-outline bg-grey liberation-sans'>
                ABOUT
              </button>
            </a>
            <a href='#'>
              <button className='teal-outline bg-grey  liberation-sans'>
                MEMBERS
              </button>
            </a>
            <a href='#'>
              <button className='teal-outline bg-grey  liberation-sans'>
                NEWS
              </button>
            </a>
            <a href='#'>
              <button className='teal-outline bg-grey  liberation-sans'>
                MERCH
              </button>
            </a>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default ButtonBox
