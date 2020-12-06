import React from 'react'
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Form,
} from 'react-bootstrap'
import {
  tortise,
  white,
  flower,
  lightPurple,
  darkMagenta,
} from '../constants/Colors'

const Navbar4 = () => {
  return (
    <Navbar
      className='mb-5'
      bg={lightPurple}
      expand='lg'
      style={{
        backgroundColor: lightPurple,
        color: white,
      }}
    >
      <Navbar.Brand href='#home' className='liberation-sans-bold'>
        MEET THE TEACHERS
      </Navbar.Brand>
      <Navbar.Toggle className='navbar-dark ' aria-controls='toggle-control' />
      <Navbar.Collapse>
        <Nav
          className='mr-auto float-right liberation-sans'
          style={{ width: '100%', justifyContent: 'flex-end' }}
        >
          <Nav.Link style={{ color: white }} href='#home'>
            HOME
          </Nav.Link>
          <Nav.Link style={{ color: white }} href='#'>
            WHAT IS SQUAD?
          </Nav.Link>
          <Nav.Link style={{ color: white }} href='#'>
            MEET THE SQUAD
          </Nav.Link>
          <Nav.Link style={{ color: white }} href='#link'>
            MEET THE TEACHERS
          </Nav.Link>
          <Nav.Link style={{ color: white }} href='#'>
            AUDITION
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbar4
