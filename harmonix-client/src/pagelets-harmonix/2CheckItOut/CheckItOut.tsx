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
          <h2
            id='checkout-heading'
            className=' font-h2 color-teal liberation-sans-bold'
          >
            Check Out:
          </h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={6} xl={6}>
          <div className='player-container'>
            <h5 className='font-h5 liberation-sans-bold'>CALIFORNIA WINTER</h5>
            <ReactPlayer
              width='90%'
              heigth='90%'
              controls
              url={YTCaliforniaWinter}
            />
          </div>
        </Col>
        <Col xs={12} md={12} lg={6} xl={6}>
          <div className='player-container'>
            <h5 className='font-h5 liberation-sans-bold'>PARTY IN THE USA</h5>
            <ReactPlayer
              width='90%'
              heigth='90%'
              controls
              url={YTPartyInTheUSA}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3
            id='quarantine-heading'
            className='font-h3 color-purple liberation-sans-bold'
          >
            QUARANTINE SERIES:
          </h3>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={12} lg={6} xl={6}>
          <div className='player-container'>
            <h5 className='font-h5 liberation-sans-bold'>
              SIMPLY THE BEST (FROM "SCHITTS CREEK")
            </h5>
            <ReactPlayer
              width='90%'
              heigth='90%'
              controls
              url={YTSimplyTheBest}
            />
          </div>
        </Col>{' '}
        <Col xs={12} md={12} lg={6} xl={6}>
          <div className='player-container'>
            <h5 className='font-h5 liberation-sans-bold'>
              STAND UP (FEAT. INTONENATION)
            </h5>
            <ReactPlayer width='90%' heigth='90%' controls url={YTStandUp} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3
            id='quarantine-heading'
            className='font-h3 color-teal liberation-sans-bold'
          >
            MAKEUP TUTORIALS
          </h3>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={12} lg={6} xl={6}>
          <div className='player-container'>
            <h5 className='font-h5 liberation-sans-bold'>
              REINDEER LOOK - SYDNE ROSE
            </h5>
            <ReactPlayer width='90%' heigth='90%' controls url={YTReindeer} />
          </div>
        </Col>{' '}
        <Col xs={12} md={12} lg={6} xl={6}>
          <div className='player-container'>
            <h5 className='font-h5 liberation-sans-bold'>
              ELF LOOK - STELLA LUCY
            </h5>
            <ReactPlayer width='90%' heigth='90%' controls url={YTElf} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default CheckItOut
