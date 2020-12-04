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
      bg={lightPurple}
      expand='lg'
      style={{
        backgroundColor: lightPurple,
        color: white,
      }}
    >
      <Navbar.Brand href='#home'>Meet the Teachers</Navbar.Brand>
      <Navbar.Toggle className='navbar-dark ' aria-controls='toggle-control' />
      <Navbar.Collapse>
        <Nav
          className='mr-auto float-right'
          style={{ width: '100%', justifyContent: 'flex-end' }}
        >
          <Nav.Link style={{ color: white }} href='#home'>
            Home
          </Nav.Link>
          <Nav.Link style={{ color: white }} href='#'>
            What is Squad?
          </Nav.Link>
          <Nav.Link style={{ color: white }} href='#'>
            Meet The Squad
          </Nav.Link>
          <Nav.Link style={{ color: white }} href='#link'>
            Meet The Teachers
          </Nav.Link>
          <Nav.Link style={{ color: white }} href='#'>
            Audition
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbar4
