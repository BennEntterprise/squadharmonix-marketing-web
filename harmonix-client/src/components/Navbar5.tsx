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
      <Navbar.Brand href='#home'>To Audition</Navbar.Brand>
      <Nav className='mr-auto'>
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
    </Navbar>
  )
}

export default Navbar5
