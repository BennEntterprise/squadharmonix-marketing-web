import React from 'react'
import './Members.css'
import { Container, Row, Col } from 'react-bootstrap'

import IG from '../../images/social-assets/instagram-artist-good.png'
import SC from '../../images/social-assets/soundcloud-logo.png'
// Import Member Photos
// TODO:Get Joanna Photo
import Joanna from '../../images/ps/Johanna - Captain In Training(cropped).jpg'
import Cameron from '../../images/ps/Cameron Alto_Beatboxer.jpg'
import Sydne from '../../images/ps/Sydne Tenor.jpg'
import Lauren from '../../images/ps/Lauren Soprano.jpg'
import Lucy from '../../images/ps/Lucy Tenor.jpg'
import Maya from '../../images/ps/Maya Alto.jpg'
import Mischa from '../../images/ps/mischa Alto.jpg'
import Noah from '../../images/ps/Noah Bass.jpg'
import Simone from '../../images/ps/Simone Mezzo.jpg'
import Elise from '../../images/ps/Elise Soprano 2.jpg'
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
              <img className='artist-photo' src={Joanna} alt='johanna' />
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
