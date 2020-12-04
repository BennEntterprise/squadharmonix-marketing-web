import React from 'react'
import './meetthesquad.css'

import ReactPlayer from 'react-player'

import HorizontalColorBand from '../../components/HorizontalColorBand'
import { Container, Row, Col } from 'react-bootstrap'
import { magenta, purple, teal } from '../../constants/Colors'

// Bring in Photos of the Performance squad
import _2Sydne from '../../images/performance-squad/2SydneTenor.jpg'
import _3Lauren from '../../images/performance-squad/3LaurenSoprano.jpg'
import _4Simone from '../../images/performance-squad/4SimoneMezzo.jpg'
import _5Elise from '../../images/performance-squad/5EliseSoprano.jpg'
import _6Lucy from '../../images/performance-squad/6LucyTenor.jpg'
import _7Maya from '../../images/performance-squad/7MayaAlto.jpg'
import _8Mischa from '../../images/performance-squad/8MischaAlto.jpg'
import _9Cameron from '../../images/performance-squad/9CameronAltoBeatboxer.jpg'
import _10Noah from '../../images/performance-squad/10NoahBass.jpg'

// Import Photos from Senior Squad
import _1sThalia from '../../images/senior-squad/_1sThaliaAlto.jpg'
import _2sSoraMezzon from '../../images/senior-squad/_2sSoraMezzo.jpg'
import _3sSophia from '../../images/senior-squad/_3sSophiealto.png'
import _4sOlivia from '../../images/senior-squad/_4sOliviaSoprano.jpg'
import _5sBlake from '../../images/senior-squad/_5sBlakeTenor.jpg'
import _6sZander from '../../images/senior-squad/_6sZanderSoprano.jpg'
import _7sConner from '../../images/senior-squad/_7sConnerAlto.png'
import _8sJiya from '../../images/senior-squad/_8sJiyaSoprano.jpg'

// Import Photos from Jr Squad
import _2jJade from '../../images/junior-squad/_2jJadeTenor.jpg'
import _3jSloane from '../../images/junior-squad/_3jSloaneSoprano.jpg'
const MeetTheSquad = () => {
  const WhenThePartyIsOver_BillieEilish =
    'https://www.youtube.com/watch?v=ems1qawgYy0'
  const ComeAlive_TheGreatestShowman =
    'https://www.youtube.com/watch?v=YgLloZrmhE0'
  const MakeAManOutOfYou_Mulan = 'https://www.youtube.com/watch?v=YgLloZrmhE0'

  return (
    <Container fluid id='meetthesquad' style={{ padding: '0', margin: '0' }}>
      <HorizontalColorBand color={magenta} height={'50px'} />
      <Row>
        <Col>
          <h3 className='text-center mt-1'>Performance Squad</h3>
        </Col>
      </Row>
      <Row>
        <Col xs='12' sm='12' md='12' lg='6' xl='6' className='gallery-side'>
          <div className='headshot-gallery-container'>
            <div className='headshots-wrapper'>
              <div className='headshot-row'>
                <div className='single-headshot-container'>
                  <img className='headshot' src={_2Sydne} alt='headshot' />
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
          <div className='academy-react-player'>
            <ReactPlayer
              controls
              url={WhenThePartyIsOver_BillieEilish}
              width='85%'
              height='100%'
            />
          </div>
        </Col>
      </Row>

      <HorizontalColorBand color={teal} height={'50px'} />
      {/* <div className='showcase-container'>
        <div className='react-player'>
          <ReactPlayer controls url={ComeAlive_TheGreatestShowman} />
        </div>
        <div className='headshot-gallery-container'>
          <h3>Senior Squad</h3>
          <div className='headshots-wrapper'>
            <div className='headshot-row'>
              <div className='single-headshot-container'>
                <img className='headshot' src={_1sThalia} alt='headshot' />
              </div>
              <div className='single-headshot-container'>
                <img className='headshot' src={_2sSoraMezzon} alt='headshot' />
              </div>
              <div className='single-headshot-container'>
                <img className='headshot' src={_3sSophia} alt='headshot' />
              </div>
              <div className='single-headshot-container'>
                <img className='headshot' src={_4sOlivia} alt='headshot' />
              </div>
            </div>
            <div className='headshot-row'>
              <div className='single-headshot-container'>
                <img className='headshot' src={_5sBlake} alt='headshot' />
              </div>
              <div className='single-headshot-container'>
                <img className='headshot' src={_6sZander} alt='headshot' />
              </div>
              <div className='single-headshot-container'>
                <img className='headshot' src={_7sConner} alt='headshot' />
              </div>
              <div className='single-headshot-container'>
                <img className='headshot' src={_8sJiya} alt='headshot' />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <HorizontalColorBand color={purple} height={'50px'} />
      {/* <div className='showcase-container'>
        <div className='headshot-gallery-container'>
          <h3>Junior Squad</h3>
          <div className='headshots-wrapper'>
            <div className='headshot-row'>
              <div className='single-headshot-container'>
                <img className='headshot' src={'#'} alt='sienna' />
              </div>
              <div className='single-headshot-container'>
                <img className='headshot' src={_2jJade} alt='headshot' />
              </div>
              <div className='single-headshot-container'>
                <img className='headshot' src={_3jSloane} alt='headshot' />
              </div>
              <div className='single-headshot-container'>
                <img className='headshot' src={'#'} alt='missing phoo' />
              </div>
              <div className='single-headshot-container'>
                <img className='headshot' src={'#'} alt='Olivia B' />
              </div>
            </div>
          </div>
        </div>
        <div className='react-player'>
          <ReactPlayer controls url={MakeAManOutOfYou_Mulan} />
        </div>
      </div> */}
    </Container>
  )
}
export default MeetTheSquad
