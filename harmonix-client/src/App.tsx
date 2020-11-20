import React from 'react'
import './App.css'

import { Container, Row, Col } from 'react-bootstrap'

import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <header className='App-header'>
        <Container id='home'>
          <Row>
            <Col
              xs={1}
              sm={2}
              md={12}
              lg={6}
              xl={4}
              style={{ border: '1px solid red' }}
            >
              <div className='academy-buttons-container'>
                <h6>Squad &trade; Academy</h6>
                <button className='squad-btn'>WHAT IS SQUAD?</button>
                <button>MEET THE TEACHERS</button>
                <button>MEET THE SQUAD</button>
                <button>AUDITION!</button>
                <div className='flex-item red'></div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container id='squadacademy'></Container>
        <Container id='squadharmonix'></Container>
        <Container id='ljma'></Container>
        <Container id='contact'></Container>
      </header>
    </div>
  )
}

export default App
