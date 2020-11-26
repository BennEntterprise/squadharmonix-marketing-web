import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Members.css'

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
          <h1>MEMBERS</h1>
        </Col>
      </Row>
      <Row className='member-row'>
        <div className='profile-container'>
          <div className='photo-container'>
            <img className='artist-photo' src={'#'} alt='johanna' />
          </div>
          <div className='social-container'>
            <img className='instagram-link' src={IG} alt='instagram link' />
            <img className='soundcloud-link' src={SC} alt='soundcloud link' />
          </div>
          <p className='photo-title'>JOHANNA</p>
          <p>*lieutenant*</p>
        </div>

        <div className='profile-container'>
          <div className='photo-container'>
            <img className='artist-photo' src={Cameron} alt='cameron' />
          </div>
          <div className='social-container'>
            <img className='instagram-link' src={IG} alt='instagram link' />
            <img className='soundcloud-link' src={SC} alt='soundcloud link' />
          </div>
          <p className='photo-title'>CAMERON</p>
        </div>

        <div className='profile-container'>
          <div className='photo-container'>
            <img className='artist-photo' src={Sydne} alt='sydne' />
          </div>
          <div className='social-container'>
            <img className='instagram-link' src={IG} alt='instagram link' />
            <img className='soundcloud-link' src={SC} alt='soundcloud link' />
          </div>
          <p className='photo-title'>SYDNE</p>
        </div>
      </Row>
      <Row className='member-row'>
        <div className='profile-container'>
          <div className='photo-container'>
            <img className='artist-photo' src={Lauren} alt='lauren' />
          </div>
          <div className='social-container'>
            <img className='instagram-link' src={IG} alt='instagram link' />
            <img className='soundcloud-link' src={SC} alt='soundcloud link' />
          </div>
          <p className='photo-title'>LAUREN</p>
        </div>{' '}
        <div className='profile-container'>
          <div className='photo-container'>
            <img className='artist-photo' src={Lucy} alt='lucy' />
          </div>
          <div className='social-container'>
            <img className='instagram-link' src={IG} alt='instagram link' />
            <img className='soundcloud-link' src={SC} alt='soundcloud link' />
          </div>
          <p className='photo-title'>LUCY</p>
        </div>{' '}
        <div className='profile-container'>
          <div className='photo-container'>
            <img className='artist-photo' src={Maya} alt='MAYA' />
          </div>
          <div className='social-container'>
            <img className='instagram-link' src={IG} alt='instagram link' />
            <img className='soundcloud-link' src={SC} alt='soundcloud link' />
          </div>
          <p className='photo-title'>MAYA</p>
        </div>{' '}
        <div className='profile-container'>
          <div className='photo-container'>
            <img className='artist-photo' src={Mischa} alt='MISCHA' />
          </div>
          <div className='social-container'>
            <img className='instagram-link' src={IG} alt='instagram link' />
            <img className='soundcloud-link' src={SC} alt='soundcloud link' />
          </div>
          <p className='photo-title'>MISCHA</p>
        </div>
      </Row>
      <Row className='member-row'>
        <div className='profile-container'>
          <div className='photo-container'>
            <img className='artist-photo' src={Noah} alt='NOAH' />
          </div>
          <div className='social-container'>
            <img className='instagram-link' src={IG} alt='instagram link' />
            <img className='soundcloud-link' src={SC} alt='soundcloud link' />
          </div>
          <p className='photo-title'>NOAH</p>
        </div>{' '}
        <div className='profile-container'>
          <div className='photo-container'>
            <img className='artist-photo' src={Simone} alt='SIMONE' />
          </div>
          <div className='social-container'>
            <img className='instagram-link' src={IG} alt='instagram link' />
            <img className='soundcloud-link' src={SC} alt='soundcloud link' />
          </div>
          <p className='photo-title'>SIMONE</p>
        </div>{' '}
        <div className='profile-container'>
          <div className='photo-container'>
            <img className='artist-photo' src={Elise} alt='ELISE' />
          </div>
          <div className='social-container'>
            <img className='instagram-link' src={IG} alt='instagram link' />
            <img className='soundcloud-link' src={SC} alt='soundcloud link' />
          </div>
          <p className='photo-title'>ELISE</p>
        </div>
      </Row>
    </Container>
  )
}

export default Members
