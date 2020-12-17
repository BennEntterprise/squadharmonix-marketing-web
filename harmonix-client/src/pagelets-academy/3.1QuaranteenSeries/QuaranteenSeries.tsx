import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReactPlayer from 'react-player'
const QuaranteenSeries = () => {
  const LinkSomeGoodNewsYouTube = 'http://www.youtube.com/watch?v=Eg08rJGKjtA'

  return (
    <>
      <Container fluid id='quaranteen-series'>
        <Row>
          <Col xs='12' sm='12' md='12' lg='12' xl='12'>
            <h3 className='text-center font-h2 liberation-sans-bold'>
              SOME GOOD NEWS
            </h3>
          </Col>
        </Row>
        <Row>
          <Col xs='12' sm='12' md='12' lg='12' xl='12'>
            <div className='academy-react-player'>
              <ReactPlayer
                controls
                url={LinkSomeGoodNewsYouTube}
                width='85%'
                height='100%'
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default QuaranteenSeries
