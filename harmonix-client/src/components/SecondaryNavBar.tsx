import React from 'react'
import { HashLink } from 'react-router-hash-link'
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Form,
} from 'react-bootstrap'
import { tortise, white, flower } from '../constants/Colors'

interface ISecondaryNavBar {
  title: string
  color: string
  style?: any
}
const SecondaryNavBar = (props: ISecondaryNavBar) => {
  const { color } = props
  return (
    <Navbar
      bg={color}
      expand='lg'
      className='sticky'
      style={{
        width: ' 100%',
        backgroundColor: color,
        color: white,
        position: 'sticky',
        top: '0px',
        zIndex: 10,
        ...props.style,
      }}
    >
      <Navbar.Brand href='#home' className='liberation-sans-bold'>
        {props.title}
      </Navbar.Brand>
      <Navbar.Toggle className='navbar-dark' aria-controls='basic-navbar-nav' />
      <Navbar.Collapse>
        <Nav
          className='mr-auto float-right liberation-sans'
          style={{
            width: '100%',
            justifyContent: 'flex-end',
          }}
        >
          <Nav.Link>
            <HashLink
              to='/academy#thisissquadmain'
              style={{ textDecoration: 'none', color: white }}
            >
              HOME
            </HashLink>
          </Nav.Link>
          <Nav.Link>
            <HashLink
              to='/academy#whatissquad'
              style={{ textDecoration: 'none', color: white }}
            >
              WHAT IS SQUAD?
            </HashLink>
          </Nav.Link>
          <Nav.Link>
            <HashLink
              to='/academy#meetthesquad'
              style={{ textDecoration: 'none', color: white }}
            >
              MEET THE SQUAD
            </HashLink>
          </Nav.Link>
          <Nav.Link>
            <HashLink
              to='/academy#meettheteachers'
              style={{ textDecoration: 'none', color: white }}
            >
              MEET THE TEACHERS
            </HashLink>
          </Nav.Link>
          <Nav.Link>
            <HashLink
              to='/academy#toaudition'
              style={{ textDecoration: 'none', color: white }}
            >
              AUDITION
            </HashLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default SecondaryNavBar
