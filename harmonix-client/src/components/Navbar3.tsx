import React from 'react'
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Form,
} from 'react-bootstrap'
import { tortise, white, flower, lightPurple } from '../constants/Colors'

const Navbar3 = () => {
  return (
    <Navbar
      bg={flower}
      expand='lg'
      style={{
        backgroundColor: flower,
        color: white,
      }}
    >
      <Navbar.Brand href='#home' className='liberation-sans-bold'>
        MEET THE SQUAD
      </Navbar.Brand>
      <Navbar.Toggle
        className='navbar-dark'
        aria-controls='navbar-meet-squad'
      />
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
          <Nav.Link style={{ color: white }} href='#'>
            Meet The Teachers
          </Nav.Link>
          <Nav.Link style={{ color: white }} href='#'>
            AUDITION
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbar3
