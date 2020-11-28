import React from 'react'
import './Members.css'
import { Container, Row, Col } from 'react-bootstrap'

import IG from '../../images/social-assets/instagram-artist-good.png'
import SC from '../../images/social-assets/soundcloud-logo.png'
// Import Member Photos
// TODO:Get Joanna Photo
import Cameron from '../../images/performance-squad/9CameronAltoBeatboxer.jpg'
import Sydne from '../../images/performance-squad/2SydneTenor.jpg'
import Lauren from '../../images/performance-squad/3LaurenSoprano.jpg'
import Lucy from '../../images/performance-squad/6LucyTenor.jpg'
import Maya from '../../images/performance-squad/7MayaAlto.jpg'
import Mischa from '../../images/performance-squad/8MischaAlto.jpg'
import Noah from '../../images/performance-squad/10NoahBass.jpg'
import Simone from '../../images/performance-squad/4SimoneMezzo.jpg'
import Elise from '../../images/performance-squad/5EliseSoprano.jpg'
const Members = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1
            className='font-jumbo liberation-sans-bold'
            style={{ textAlign: 'center' }}
          >
            MEMBERS
          </h1>
        </Col>
      </Row>
      <Row className='member-row'>
        <Col
          xs='12'
          sm='12'
          md='6'
          lg='4'
          xl='4'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className='profile-container'>
            <div className='photo-container'>
              <img className='artist-photo' src={'#'} alt='johanna' />
            </div>
            <div className='social-container'>
              <img className='instagram-link' src={IG} alt='instagram link' />
              <img className='soundcloud-link' src={SC} alt='soundcloud link' />
            </div>
            <p className='photo-title font-h4 liberation-sans-bold'>JOHANNA</p>
            <p>*lieutenant*</p>
          </div>
        </Col>
        <Col
          xs='12'
          sm='12'
          md='6'
          lg='4'
          xl='4'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className='profile-container'>
            <div className='photo-container'>
              <img className='artist-photo' src={Cameron} alt='cameron' />
              <div className='social-container'>
                <img className='instagram-link' src={IG} alt='instagram link' />
                <img
                  className='soundcloud-link'
                  src={SC}
                  alt='soundcloud link'
                />
              </div>
            </div>
            <p className='photo-title font-h4 liberation-sans-bold'>CAMERON</p>
          </div>
        </Col>
        <Col
          xs='12'
          sm='12'
          md='6'
          lg='4'
          xl='4'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className='profile-container'>
            <div className='photo-container'>
              <img className='artist-photo' src={Sydne} alt='sydne' />
              <div className='social-container'>
                <img className='instagram-link' src={IG} alt='instagram link' />
                <img
                  className='soundcloud-link'
                  src={SC}
                  alt='soundcloud link'
                />
              </div>
            </div>
            <p className='photo-title font-h4 liberation-sans-bold'>SYDNE</p>
          </div>
        </Col>
      </Row>
      <Row className='member-row'>
        <Col
          xs='12'
          sm='12'
          md='6'
          lg='3'
          xl='3'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className='profile-container'>
            <div className='photo-container'>
              <img className='artist-photo' src={Lauren} alt='lauren' />
              <div className='social-container'>
                <img className='instagram-link' src={IG} alt='instagram link' />
                <img
                  className='soundcloud-link'
                  src={SC}
                  alt='soundcloud link'
                />
              </div>
            </div>
            <p className='photo-title font-h4 liberation-sans-bold'>LAUREN</p>
          </div>{' '}
        </Col>
        <Col
          xs='12'
          sm='12'
          md='6'
          lg='3'
          xl='3'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className='profile-container'>
            <div className='photo-container'>
              <img className='artist-photo' src={Lucy} alt='lucy' />
              <div className='social-container'>
                <img className='instagram-link' src={IG} alt='instagram link' />
                <img
                  className='soundcloud-link'
                  src={SC}
                  alt='soundcloud link'
                />
              </div>
            </div>
            <p className='photo-title font-h4 liberation-sans-bold'>LUCY</p>
          </div>{' '}
        </Col>
        <Col
          xs='12'
          sm='12'
          md='6'
          lg='3'
          xl='3'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className='profile-container'>
            <div className='photo-container'>
              <img className='artist-photo' src={Maya} alt='MAYA' />
              <div className='social-container'>
                <img className='instagram-link' src={IG} alt='instagram link' />
                <img
                  className='soundcloud-link'
                  src={SC}
                  alt='soundcloud link'
                />
              </div>
            </div>
            <p className='photo-title font-h4 liberation-sans-bold'>MAYA</p>
          </div>{' '}
        </Col>

        <Col
          xs='12'
          sm='12'
          md='6'
          lg='3'
          xl='3'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className='profile-container'>
            <div className='photo-container'>
              <img className='artist-photo' src={Mischa} alt='MISCHA' />
              <div className='social-container'>
                <img className='instagram-link' src={IG} alt='instagram link' />
                <img
                  className='soundcloud-link'
                  src={SC}
                  alt='soundcloud link'
                />
              </div>
            </div>
            <p className='photo-title font-h4 liberation-sans-bold'>MISCHA</p>
          </div>
        </Col>
      </Row>
      <Row className='member-row'>
        <Col
          xs='12'
          sm='12'
          md='6'
          lg='4'
          xl='4'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className='profile-container'>
            <div className='photo-container'>
              <img className='artist-photo' src={Noah} alt='NOAH' />
              <div className='social-container'>
                <img className='instagram-link' src={IG} alt='instagram link' />
                <img
                  className='soundcloud-link'
                  src={SC}
                  alt='soundcloud link'
                />
              </div>
            </div>
            <p className='photo-title font-h4 liberation-sans-bold'>NOAH</p>
          </div>{' '}
        </Col>
        <Col
          xs='12'
          sm='12'
          md='6'
          lg='4'
          xl='4'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className='profile-container'>
            <div className='photo-container'>
              <img className='artist-photo' src={Simone} alt='SIMONE' />
              <div className='social-container'>
                <img className='instagram-link' src={IG} alt='instagram link' />
                <img
                  className='soundcloud-link'
                  src={SC}
                  alt='soundcloud link'
                />
              </div>
            </div>
            <p className='photo-title font-h4 liberation-sans-bold'>SIMONE</p>
          </div>{' '}
        </Col>
        <Col
          xs='12'
          sm='12'
          md='6'
          lg='4'
          xl='4'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className='profile-container'>
            <div className='photo-container'>
              <img className='artist-photo' src={Elise} alt='ELISE' />
              <div className='social-container'>
                <img className='instagram-link' src={IG} alt='instagram link' />
                <img
                  className='soundcloud-link'
                  src={SC}
                  alt='soundcloud link'
                />
              </div>
            </div>
            <p className='photo-title font-h4 liberation-sans-bold'>ELISE</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Members
