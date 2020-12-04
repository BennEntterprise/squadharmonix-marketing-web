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
      <Navbar.Brand href='#home'>Meet the Squad</Navbar.Brand>
      <Navbar.Toggle
        className='navbar-dark'
        aria-controls='navbar-meet-squad'
      />
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

export default Navbar3
