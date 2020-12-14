import React from 'react'
import './meetthesquad.scss'

import ReactPlayer from 'react-player'

import HorizontalColorBand from '../../components/HorizontalColorBand'
import { Container, Row, Col } from 'react-bootstrap'
import { magenta, purple, teal } from '../../constants/Colors'

// Bring in Photos of the Performance squad
import _1Johanna from '../../images/square headshots/PSquad - Johanna.jpg'
import _2Sydne from '../../images/square headshots/PSquad - Sydne.jpg'
import _3Lauren from '../../images/square headshots/PSquad - Lauren.jpg'
import _4Simone from '../../images/square headshots/PSquad - Simone.jpg'
import _5Elise from '../../images/square headshots/PSquad - Elise.jpg'
import _6Lucy from '../../images/square headshots/PSquad - Lucy.jpg'
import _7Maya from '../../images/square headshots/PSquad - Maya.jpg'
import _8Mischa from '../../images/square headshots/PSquad - Mischa.jpg'
import _9Cameron from '../../images/square headshots/PSquad - Cameron.jpg'
import _10Noah from '../../images/square headshots/PSquad - Noah.jpg'

// Import Photos from Senior Squad
import _1sThalia from '../../images/square headshots/Senior - Thalia.jpg'
import _2sSoraMezzon from '../../images/square headshots/Senior - Sora.jpg'
import _3sSophia from '../../images/square headshots/Senior - Sophie.png'
import _4sOlivia from '../../images/square headshots/Senior - Olivia.jpg'
import _5sBlake from '../../images/square headshots/Senior - Blake.jpg'
import _6sZander from '../../images/square headshots/Senior - Zander.jpg'
import _7sConner from '../../images/square headshots/Senior - Conner.png'
import _8sJiya from '../../images/square headshots/Senior - Jiya.jpg'

// Import Photos from Jr Squad
import _1jSiena from '../../images/square headshots/Junior - Siena.jpeg'
import _2jJade from '../../images/square headshots/Junior - Jade.jpg'
import _3jSloane from '../../images/square headshots/Junior - Sloane.jpg'
import _4jOlivia from '../../images/square headshots/Junior - Peace.jpg'
import _4jJess from '../../images/square headshots/Junior - Jess.jpg'

import ImgSpotlight from '../../images/graphics/stage light(trimmed).png'
import ImgWhiteShadow from '../../images/graphics/white shadow(trimmed).png'

const MeetTheSquad = () => {
  const WhenThePartyIsOver_BillieEilish =
    'https://www.youtube.com/watch?v=ems1qawgYy0'
  const ComeAlive_TheGreatestShowman =
    'https://www.youtube.com/watch?v=YgLloZrmhE0'
  const MakeAManOutOfYou_Mulan =
    'https://www.youtube.com/watch?v=c1OJ4VWSwz8&feature=youtu.be'

  return (
    <>
      <Container fluid id='meetthesquad' style={{ padding: '0', margin: '0' }}>
        <HorizontalColorBand color={magenta} height={'50px'} />
        <Row>
          <Col>
            <h3 className='text-center mt-1 font-h3 liberation-sans-bold'>
              PERFORMANCE SQUAD
            </h3>
          </Col>
        </Row>
        <Row>
          <Col xs='12' sm='12' md='12' lg='6' xl='6' className='gallery-side'>
            <div className='headshot-gallery-container'>
              <div className='headshots-wrapper'>
                <div className='headshot-row'>
                  <div className='single-headshot-container'>
                    <img className='headshot' src={_1Johanna} alt='headshot' />
                  </div>
                  <div className='single-headshot-container'>
                    <img className='headshot' src={_2Sydne} alt='headshot' />
                  </div>
                  <div className='single-headshot-container'>
                    <img className='headshot' src={_3Lauren} alt='headshot' />
                  </div>
                  <div className='single-headshot-container'>
                    <img className='headshot' src={_4Simone} alt='headshot' />
                  </div>
                  <div className='single-headshot-container'>
                    <img className='headshot' src={_5Elise} alt='headshot' />
                  </div>
                </div>
                <div className='headshot-row'>
                  <div className='single-headshot-container'>
                    <img className='headshot' src={_6Lucy} alt='headshot' />
                  </div>
                  <div className='single-headshot-container'>
                    <img className='headshot' src={_7Maya} alt='headshot' />
                  </div>
                  <div className='single-headshot-container'>
                    <img className='headshot' src={_8Mischa} alt='headshot' />
                  </div>
                  <div className='single-headshot-container'>
                    <img className='headshot' src={_9Cameron} alt='headshot' />
                  </div>
                  <div className='single-headshot-container'>
                    <img className='headshot' src={_10Noah} alt='headshot' />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs='12' sm='12' md='12' lg='6' xl='6' className='player-side'>
            <div className='stage-light-graphic'>
              <img src={ImgSpotlight} alt='spotlight' />
            </div>
            <div className='academy-react-player'>
              <ReactPlayer
                controls
                url={WhenThePartyIsOver_BillieEilish}
                width='85%'
                height='100%'
              />
            </div>
            <div className='stage-shadow-graphic'>
              <img src={ImgWhiteShadow} alt='spotlight' />
            </div>
          </Col>
        </Row>

        <HorizontalColorBand color={teal} height={'50px'} />
        <Row>
          <Col>
            <h3 className='text-center mt-1 font-h3 liberation-sans-bold'>
              SENIOR SQUAD
            </h3>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 12, order: 'last' }}
            sm={{ span: 12, order: 'last' }}
            md={{ span: 12, order: 'last' }}
            lg='6'
            xl='6'
            className='player-side'
          >
            <div className='stage-light-graphic'>
              <img src={ImgSpotlight} alt='spotlight' />
            </div>
            <div className='academy-react-player'>
              <ReactPlayer
                controls
                url={ComeAlive_TheGreatestShowman}
                width='85%'
                height='100%'
              />
            </div>
            <div className='stage-shadow-graphic'>
              <img src={ImgWhiteShadow} alt='spotlight' />
            </div>
          </Col>
          <Col xs='12' sm='12' md='12' lg='6' xl='6' className='gallery-side'>
            <div className='headshot-gallery-container'>
              <div className='headshots-wrapper'>
                <div className='headshot-row'>
                  <div className='single-headshot-container'>
                    <img className='headshot' src={_1sThalia} alt='headshot' />
                  </div>
                  <div className='single-headshot-container'>
                    <img
                      className='headshot'
                      src={_2sSoraMezzon}
                      alt='headshot'
                    />
                  </div>
                  <div className='single-headshot-container'>
                    <img
                      className='headshot'
                      src={_3sSophia}
                      alt='sophie headshot'
                    />
                  </div>
                  <div className='single-headshot-container'>
                    <img
                      className='headshot'
                      src={_4sOlivia}
                      alt='Olivia headshot'
                    />
                  </div>
                </div>
                <div className='headshot-row'>
                  <div className='single-headshot-container'>
                    <img
                      className='headshot'
                      src={_5sBlake}
                      alt='black headshot'
                    />
                  </div>
                  <div className='single-headshot-container'>
                    <img
                      className='headshot'
                      src={_6sZander}
                      alt='Zander headshot'
                    />
                  </div>
                  <div className='single-headshot-container'>
                    <img
                      className='headshot'
                      src={_7sConner}
                      alt='Conner headshot'
                    />
                  </div>
                  <div className='single-headshot-container'>
                    <img
                      className='headshot'
                      src={_8sJiya}
                      alt='Jiya headshot'
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <HorizontalColorBand color={purple} height={'50px'} />
        <Row>
          <Col>
            <h3 className='text-center mt-1 font-h3 liberation-sans-bold'>
              JUNIOR SQUAD
            </h3>
          </Col>
        </Row>
        <Row>
          <Col xs='12' sm='12' md='12' lg='6' xl='6' className='gallery-side'>
            <div className='headshot-gallery-container'>
              <div className='headshots-wrapper'>
                <div className='headshot-row'>
                  <div className='single-headshot-container'>
                    <img
                      className='headshot'
                      src={_1jSiena}
                      alt='headshot sienna'
                    />
                  </div>
                  <div className='single-headshot-container'>
                    <img
                      className='headshot'
                      src={_2jJade}
                      alt='headshot jade'
                    />
                  </div>
                  <div className='single-headshot-container'>
                    <img
                      className='headshot'
                      src={_3jSloane}
                      alt='headshot Sloane'
                    />
                  </div>
                  <div className='single-headshot-container'>
                    <img
                      className='headshot'
                      src={_4jOlivia}
                      alt='Olivia headshot'
                    />
                  </div>
                  <div className='single-headshot-container'>
                    <img
                      className='headshot'
                      src={_4jJess}
                      alt='headshot Jess'
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs='12' sm='12' md='12' lg='6' xl='6' className='player-side'>
            <div className='stage-light-graphic'>
              <img src={ImgSpotlight} alt='spotlight' />
            </div>
            <div className='academy-react-player'>
              <ReactPlayer
                controls
                url={MakeAManOutOfYou_Mulan}
                width='85%'
                height='100%'
              />
            </div>
            <div className='stage-shadow-graphic'>
              <img src={ImgWhiteShadow} alt='spotlight' />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default MeetTheSquad
