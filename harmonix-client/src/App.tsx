import React from 'react'
import './App.css'

import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Test Deployment</h1>
        <h2>Test Merging Pattern</h2>
        <Container>
          <Row>
            <Col
              xs={1}
              sm={2}
              md={12}
              lg={6}
              xl={4}
              style={{ border: '1px solid red' }}
            >
              <div className='flexbox'>
                <div className='flex-item green'></div>
                <div className='flex-item blue'></div>
                <div className='flex-item red'></div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default App
