import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import SquadHarmonixBrandBanner from '../images/squad-2020-website-logo(trimmed).png'

import { charcoal } from '../constants/Colors'
import { Link } from 'react-router-dom'
const nb = () => {
  return (
    <Navbar
      style={{ backgroundColor: charcoal, color: 'white', width: '100%' }}
      bg={charcoal}
      expand='lg'
    >
      <Navbar.Brand href='/'>
        <img
          src={SquadHarmonixBrandBanner}
          alt='squad harmonics banner'
          width='100px'
        />
      </Navbar.Brand>
      <Navbar.Toggle className='navbar-dark' aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav
          className='mr-auto float-right'
          style={{
            width: '100%',
            justifyContent: 'flex-end',
          }}
        >
          {/* <Nav.Link href='/tech-debt-todo'>Tech Debt/Todo</Nav.Link> */}
          <Nav.Link style={{ color: 'white' }}>
            <Link style={{ color: 'white' }} to='/'>
              HOME
            </Link>
          </Nav.Link>
          <Nav.Link style={{ color: 'white' }}>
            <Link style={{ color: 'white' }} to='/academy'>
              SQUAD ACADEMY
            </Link>
          </Nav.Link>
          <Nav.Link style={{ color: 'white' }}>
            <Link style={{ color: 'white' }} to='/harmonix'>
              SQUAD HARMONIX&trade;
            </Link>
          </Nav.Link>
          <Nav.Link
            href='https://laurajeanmusicacademy.com'
            style={{ color: 'white' }}
          >
            LAURA JEAN MUSIC ACADEMY
          </Nav.Link>
          <Nav.Link style={{ color: 'white' }}>
            <Link style={{ color: 'white' }} to='/contact'>
              CONTACT
            </Link>
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
