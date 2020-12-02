import React from 'react'
import './Members.css'
import { Container, Row, Col } from 'react-bootstrap'
import { NavHashLink as NavLink } from 'react-router-hash-link'

import IG from '../../images/icons/instagram-academy.png'

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
    <Container id='members-container'>
      <NavLink to='#members-container'></NavLink>
      <Row>
        <Col>
          <h1
            className='font-jumbo liberation-sans-bold'
            style={{ textAlign: 'left', margin: '1.5rem auto' }}
          >
            MEMBERS
          </h1>
        </Col>
      </Row>
      <Row className='member-row'>
        <Col
          xs='12'
          sm='12'
          md='12'
          lg='12'
          xl='12'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className='profile-container'>
            <div className='photo-container '>
              <img
                className='artist-photo magenta-outline'
                src={Joanna}
                alt='johanna'
              />
              <div
                className='social-container'
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  position: 'relative',
                  right: '15%',
                }}
              >
                <img className='instagram-link' src={IG} alt='instagram link' />
                <img
                  className='soundcloud-link'
                  src={SC}
                  alt='soundcloud link'
                />
              </div>
            </div>
            <h6 className='photo-title liberation-sans-bold font-h6 '>
              JOHANNA
            </h6>
            <p className='font-p'>TENOR</p>
          </div>

          <div className='profile-container'>
            <div className='photo-container'>
              <img
                className='artist-photo teal-outline'
                src={Cameron}
                alt='cameron'
              />
              <div className='social-container'>
                <img className='instagram-link' src={IG} alt='instagram link' />
              </div>
            </div>
            <h6 className='photo-title font-h6 liberation-sans-bold'>
              CAMERON
            </h6>
            <p className='font-p'>BEATBOX/ALTO</p>
          </div>

          <div className='profile-container'>
            <div className='photo-container'>
              <img
                className='artist-photo purple-outline'
                src={Sydne}
                alt='sydne'
              />
              <div className='social-container'>
                <img className='instagram-link' src={IG} alt='instagram link' />
                <img
                  className='soundcloud-link'
                  src={SC}
                  alt='soundcloud link'
                />
              </div>
            </div>
            <h6 className='photo-title font-h6 liberation-sans-bold'>SYDNE</h6>
            <p className='font-p liberation-sans'>TENOR</p>
          </div>
        </Col>
      </Row>
      <Row className='member-row'>
        <Col
          xs='12'
          sm='12'
          md='12'
          lg='12'
          xl='12'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className='profile-container'>
            <div className='photo-container '>
              <img
                className='artist-photo teal-outline'
                src={Lauren}
                alt='lauren'
              />
              <div className='social-container'>
                <img className='instagram-link' src={IG} alt='instagram link' />
                <img
                  className='soundcloud-link'
                  src={SC}
                  alt='soundcloud link'
                />
              </div>
            </div>
            <h6 className='photo-title font-h6 liberation-sans-bold'>LAUREN</h6>
            <p className='font-p liberation-sans'>SOPRANO</p>
          </div>

          <div className='profile-container'>
            <div className='photo-container'>
              <img
                className='artist-photo purple-outline'
                src={Lucy}
                alt='lucy'
              />
              <div className='social-container'>
                <img className='instagram-link' src={IG} alt='instagram link' />
                <img
                  className='soundcloud-link'
                  src={SC}
                  alt='soundcloud link'
                />
              </div>
            </div>
            <h6 className='photo-title font-h6 liberation-sans-bold'>LUCY</h6>
            <p className='font-p liberation-sans'>TENOR</p>
          </div>

          <div className='profile-container'>
            <div className='photo-container'>
              <img
                className='artist-photo magenta-outline'
                src={Maya}
                alt='MAYA'
              />
              <div className='social-container'>
                <img
                  style={{ visibility: 'hidden' }}
                  className='instagram-link'
                  src={IG}
                  alt='instagram link'
                />
                <img
                  style={{ visibility: 'hidden' }}
                  className='soundcloud-link'
                  src={SC}
                  alt='soundcloud link'
                />
              </div>
            </div>
            <h6 className='photo-title font-h6 liberation-sans-bold'>MAYA</h6>
            <p className='font-p liberation-sans'>ALTO</p>
          </div>

          <div className='profile-container'>
            <div className='photo-container'>
              <img
                className='artist-photo teal-outline'
                src={Mischa}
                alt='MISCHA'
              />
              <div className='social-container'>
                <img className='instagram-link' src={IG} alt='instagram link' />
                <img
                  className='soundcloud-link'
                  src={SC}
                  alt='soundcloud link'
                />
              </div>
            </div>
            <h6 className='photo-title font-h6 liberation-sans-bold'>MISCHA</h6>
            <p className='font-p liberation-sans'>ALTO</p>
          </div>
        </Col>
      </Row>
      <Row className='member-row'>
        <Col
          xs='12'
          sm='12'
          md='12'
          lg='12'
          xl='12'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className='profile-container'>
            <div className='photo-container'>
              <img
                className='artist-photo magenta-outline'
                src={Noah}
                alt='NOAH'
              />
              <div className='social-container'>
                {/* <img className='instagram-link' src={IG} alt='instagram link' /> */}
                <img
                  className='soundcloud-link'
                  src={SC}
                  alt='soundcloud link'
                />
              </div>
            </div>
            <h6 className='photo-title font-h6 liberation-sans-bold'>NOAH</h6>
            <p className='font-p'>BASS/BEATBOXER</p>
          </div>{' '}
          <div className='profile-container'>
            <div className='photo-container'>
              <img
                className='artist-photo teal-outline'
                src={Simone}
                alt='SIMONE'
              />
              <div className='social-container'>
                {/* <img className='instagram-link' src={IG} alt='instagram link' /> */}
                <img
                  className='soundcloud-link'
                  src={SC}
                  alt='soundcloud link'
                />
              </div>
            </div>
            <h6 className='photo-title font-h6 liberation-sans-bold'>SIMONE</h6>
            <p className='font-p'>MEZZO</p>
          </div>{' '}
          <div className='profile-container'>
            <div className='photo-container'>
              <img
                className='artist-photo  purple-outline'
                src={Elise}
                alt='ELISE'
              />
              <div className='social-container'>
                <img className='instagram-link' src={IG} alt='instagram link' />
                {/* <img
                  className='soundcloud-link'
                  src={SC}
                  alt='soundcloud link'
                /> */}
              </div>
            </div>
            <h6 className='photo-title font-h6 liberation-sans-bold'>ELISE</h6>
            <p className='font-p'>SOPRANO</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Members
