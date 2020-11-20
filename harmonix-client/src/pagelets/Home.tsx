import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
  return (
    <Container id='home'>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          style={{ border: '1px solid red' }}
        ></Col>
      </Row>
    </Container>
  )
}
export default Home
