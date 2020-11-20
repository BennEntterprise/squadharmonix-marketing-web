import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './css/thisissquad.css'

const ThisIsSquad = () => {
  return (
    <Container id='thisissquad'>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <h1
            style={{
              textAlign: 'center',
            }}
          >
            <h1>THIS IS SQUAD</h1>
            <div className='btn-group' id='btn-group-academy'>
              <button style={{ fontSize: '12px' }}>WHAT IS SQUAD</button>
            </div>
          </h1>
        </Col>
      </Row>
    </Container>
  )
}

export default ThisIsSquad
