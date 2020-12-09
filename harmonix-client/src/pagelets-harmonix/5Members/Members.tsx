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
import NoahImg from '../../images/ps/Noah Bass.jpg'
import SimoneImg from '../../images/ps/Simone Mezzo.jpg'
import EliseImg from '../../images/ps/Elise Soprano 2.jpg'
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
            soundCloudAnchor='#'
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
            soundCloudAnchor='#'
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
            soundCloudAnchor='#'
            outline='teal'
          />
          <MemberHeadshot
            name='LUCY'
            voicePart='TENOR'
            imgSrc={LucyImg}
            instaAnchor='https://instagram.com/stella.lucy.music?igshid=5g22y5bgjy98'
            soundCloudAnchor='#'
            outline='purple'
          />
          <MemberHeadshot
            name='MAYA'
            voicePart='ALTO'
            imgSrc={MayaImg}
            outline='magenta'
          />
          <MemberHeadshot
            name='MISCHA'
            voicePart='ALTO'
            imgSrc={MischaImg}
            instaAnchor='https://instagram.com/mischa.h.music?igshid=wfqg5e5x49ug'
            soundCloudAnchor='#'
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
          <MemberHeadshot
            name='NOAH'
            voicePart='BASS/BEATBOXER'
            imgSrc={NoahImg}
            soundCloudAnchor='#'
            outline='magenta'
          />
          <MemberHeadshot
            name='SIMONE'
            voicePart='MEZZO'
            imgSrc={SimoneImg}
            soundCloudAnchor='#'
            outline='teal'
          />
          <MemberHeadshot
            name='ELISE'
            voicePart='SOPRANO'
            imgSrc={EliseImg}
            instaAnchor='https://instagram.com/elise.c.sings?igshid=1iqrn09g3wuee'
            outline='purple'
          />
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
  soundCloudAnchor?: string
  outline: 'purple' | 'magenta' | 'teal'
}
const MemberHeadshot = (props: IMemberHeadshot) => {
  const {
    imgSrc,
    name,
    instaAnchor,
    soundCloudAnchor,
    voicePart,
    outline,
  } = props
  const igVisibility = !!instaAnchor ? 'visible' : 'collapse'
  const scVisibility = !!soundCloudAnchor ? 'visible' : 'collapse'
  console.log(`${name} should have ig: ${igVisibility} and sc: ${scVisibility}`)
  return (
    <div className='profile-container'>
      <div className='photo-container'>
        <img
          className={`artist-photo ${outline}-outline`}
          src={imgSrc}
          alt={`${name} headshot`}
        />
        <div className='socials-container'>
          {instaAnchor && (
            <a className='social-anchor' href={instaAnchor}>
              <img
                style={{ visibility: igVisibility }}
                className='instagram-link'
                src={IG}
                alt={`${name} instagram`}
              />
            </a>
          )}
          {soundCloudAnchor && (
            <a className='social-anchor' href={soundCloudAnchor}>
              <img
                style={{ visibility: scVisibility }}
                className='soundcloud-link'
                src={SC}
                alt={`${name} soundcloud`}
              />
            </a>
          )}
        </div>
      </div>
      <h6 className='photo-name font-h6 liberation-sans-bold'>{name}</h6>
      <p className='photo-voice-part '>{voicePart}</p>
    </div>
  )
}

export default Members
