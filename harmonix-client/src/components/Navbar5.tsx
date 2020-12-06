import React from 'react'
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Form,
} from 'react-bootstrap'
import { tortise, white, flower } from '../constants/Colors'

const Navbar5 = () => {
  return (
    <Navbar
      bg={tortise}
      expand='lg'
      style={{
        backgroundColor: tortise,
        color: white,
      }}
    >
      <Navbar.Brand href='#home' className='liberation-sans-bold'>
        TO AUDITION
      </Navbar.Brand>

      <Navbar.Toggle className='navbar-dark' aria-controls='final navbar' />
      <Navbar.Collapse>
        <Nav className='mr-auto liberation-sans'>
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
            MEET THE TEACHERS{' '}
          </Nav.Link>
          <Nav.Link style={{ color: white }} href='#'>
            AUDITION
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbar5
