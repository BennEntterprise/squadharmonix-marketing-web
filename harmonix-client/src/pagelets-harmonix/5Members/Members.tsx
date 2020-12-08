import React from 'react'
import './Members.css'
import { Container, Row, Col } from 'react-bootstrap'
import { NavHashLink as NavLink } from 'react-router-hash-link'

import IG from '../../images/icons/instagram-academy.png'

import SC from '../../images/social-assets/soundcloud-logo.png'
// Import Member Photos
// TODO:Get Joanna Photo
import JohannaImg from '../../images/ps/Johanna - Captain In Training(cropped).jpg'
import CameronImg from '../../images/ps/Cameron Alto_Beatboxer.jpg'
import SydneImg from '../../images/ps/Sydne Tenor.jpg'
import LaurenImg from '../../images/ps/Lauren Soprano.jpg'
import LucyImg from '../../images/ps/Lucy Tenor.jpg'
import MayaImg from '../../images/ps/Maya Alto.jpg'
import MischaImg from '../../images/ps/mischa Alto.jpg'
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
          <MemberHeadshot
            name={'JOHANNA'}
            voicePart={'TENOR'}
            imgSrc={JohannaImg}
            instaAnchor='https://instagram.com/jmzjohanna?igshid=7pnkk9jzbcqd'
            outline='magenta'
          />
          <MemberHeadshot
            name={'CAMERON'}
            voicePart={'BEATBOX/ALTO'}
            imgSrc={CameronImg}
            instaAnchor={
              'https://instagram.com/cameronthebeatboxer?igshid=jchlbum6jhmv'
            }
            outline={'teal'}
          />
          <MemberHeadshot
            name='SYDNE'
            voicePart='TENOR'
            imgSrc={SydneImg}
            instaAnchor='https://instagram.com/sydnerosemusic?igshid=1uh8sobvhycru'
            outline='purple'
          />
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
          <MemberHeadshot
            name='LAUREN'
            voicePart='SOPRANO'
            imgSrc={LaurenImg}
            instaAnchor='https://instagram.com/lauren_shay_music?igshid=4qx5hdffejgw'
            outline='teal'
          />
          <MemberHeadshot
            name='LUCY'
            voicePart='TENOR'
            imgSrc={LucyImg}
            instaAnchor='https://instagram.com/stella.lucy.music?igshid=5g22y5bgjy98'
            outline='purple'
          />
          <MemberHeadshot
            name='MAYA'
            voicePart='ALTO'
            imgSrc={MayaImg}
            instaAnchor='#' // Todo:  When removing this her photo sinks
            outline='magenta'
          />
          <MemberHeadshot
            name='MISCHA'
            voicePart='ALTO'
            imgSrc={MischaImg}
            instaAnchor='#'
            outline='teal'
          />
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

interface IMemberHeadshot {
  name: string
  voicePart: string
  imgSrc: any
  instaAnchor?: string
  outline: 'purple' | 'magenta' | 'teal'
}
const MemberHeadshot = (props: IMemberHeadshot) => {
  const { imgSrc, name, instaAnchor, voicePart, outline } = props
  const igVisibility = instaAnchor ? 'visible' : 'hidden'
  return (
    <div className='profile-container'>
      <div className='photo-container'>
        <img
          className={`artist-photo ${outline}-outline`}
          src={imgSrc}
          alt={`${name} headshot`}
        />
        <div className='social-container'>
          {instaAnchor && (
            <a className='social-anchor' href='#'>
              <img
                style={{ visibility: igVisibility }}
                className='instagram-link'
                src={IG}
                alt={`${name} instagram`}
              />
            </a>
          )}
        </div>
      </div>
      <h6 className='photo-title font-h6 liberation-sans-bold'>{name}</h6>
      <p className='font-p'>{voicePart}</p>
    </div>
  )
}

export default Members
