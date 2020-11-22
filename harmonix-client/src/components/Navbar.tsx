import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import SquadHarmonixBrandBanner from '../images/HarmonixBranding.jpg'

import { charcoal } from '../constants/Colors'
const nb = () => {
  return (
    <Navbar
      style={{ backgroundColor: charcoal, color: 'white' }}
      bg={charcoal}
      expand='sm'
    >
      <Navbar.Brand href='#home'>
        <img
          src={SquadHarmonixBrandBanner}
          alt='squad harmonics banner'
          height='50px'
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto float-right'>
          <Nav.Link href='/tech-debt-todo'>Tech Debt/Todo</Nav.Link>
          <Nav.Link style={{ color: 'white' }} href='/#home'>
            HOME
          </Nav.Link>
          <Nav.Link style={{ color: 'white' }} href='/#squadacademy'>
            SQUAD ACADEMY
          </Nav.Link>
          <Nav.Link style={{ color: 'white' }} href='#squadharmonix'>
            SQUAD HARMONIX&trade;
          </Nav.Link>
          <Nav.Link style={{ color: 'white' }} href='#ljma'>
            LAURA JEAN MUSIC ACADEMY <em>(coming soon)</em>
          </Nav.Link>
          <Nav.Link style={{ color: 'white' }} href='#contact'>
            CONTACT
          </Nav.Link>
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
