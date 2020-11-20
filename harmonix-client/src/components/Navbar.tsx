import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
const nb = () => {
  return (
    <Navbar bg='light' color='white' expand='sm'>
      <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto float-right'>
          <Nav.Link href='#home'>HOME</Nav.Link>
          <Nav.Link href='#squadacademy'>SQUAD ACADEMY</Nav.Link>
          <Nav.Link href='#squadharmonix'>SQUAD HARMONIX&trade;</Nav.Link>
          <Nav.Link href='#ljma'>
            LAURA JEAN MUSIC ACADEMY <em>(coming soon)</em>
          </Nav.Link>
          <Nav.Link href='#contact'>CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default nb

// Abstraction: Dropdown Menus
/* 
<NavDropdown title='Dropdown' id='basic-nav-dropdown'>
  <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
  <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
  <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
  <NavDropdown.Divider />
  <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
</NavDropdown> 
 */

// Abstraction: Wrap the entire thing as collapsable
//
//
//
