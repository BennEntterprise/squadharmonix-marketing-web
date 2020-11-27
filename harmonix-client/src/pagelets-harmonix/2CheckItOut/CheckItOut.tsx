import React from 'react'
import ReactPlayer from 'react-player'
import { Container, Row, Col } from 'react-bootstrap'
import './CheckItOut.css'

const CheckItOut = () => {
  const YTCaliforniaWinter = 'http://www.youtube.com/watch?v=t3R2pb-gs4Q'
  const YTPartyInTheUSA = 'http://www.youtube.com/watch?v=tQan2ssifQI'
  const YTSimplyTheBest = 'http://www.youtube.com/watch?v=1KuUd3mrm_g'
  const YTStandUp = 'http://www.youtube.com/watch?v=dwxiiQB0hZ4'
  const YTReindeer = 'http://www.youtube.com/watch?v=zp4rMTpnYqg'
  const YTElf = 'https://www.youtube.com/watch?v=epbtYesY8vw'
  return (
    <Container>
      <Row>
        <Col>
          <h2 className='checkout-heading'> Check Out:</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={6} xl={6}>
          <div className='player-container'>
            <ReactPlayer
              width='100%'
              heigth='100%'
              controls
              url={YTCaliforniaWinter}
            />
          </div>
        </Col>
        <Col xs={12} md={12} lg={6} xl={6}>
          <ReactPlayer
            width='100%'
            heigth='100%'
            controls
            url={YTPartyInTheUSA}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className='checkout-heading'>QUARANTINE SERIES:</h2>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={12} lg={6} xl={6}>
          <div className='player-container'>
            <ReactPlayer
              width='100%'
              heigth='100%'
              controls
              url={YTSimplyTheBest}
            />
          </div>
        </Col>{' '}
        <Col xs={12} md={12} lg={6} xl={6}>
          <div className='player-container'>
            <ReactPlayer width='100%' heigth='100%' controls url={YTStandUp} />
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={12} lg={6} xl={6}>
          <div className='player-container'>
            <ReactPlayer width='100%' heigth='100%' controls url={YTReindeer} />
          </div>
        </Col>{' '}
        <Col xs={12} md={12} lg={6} xl={6}>
          <div className='player-container'>
            <ReactPlayer width='100%' heigth='100%' controls url={YTElf} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default CheckItOut
