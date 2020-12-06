import React from 'react'
import './thisissquad.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import SocialIcon from '../../components/SocialIcon'
import { tortise, darkMagenta, magenta } from '../../constants/Colors'
import ButtonBox from '../../components/ButtonBox'
//Carousel Imgs
import Carousel1 from './carousel-imgs/Lauren this one takes priority.jpeg'
import Carousel2 from './carousel-imgs/mischa cameron.jpeg'
import Carousel3 from './carousel-imgs/National anthem.jpeg'

import ImgCameron from './banner-imgs/Cameron(trimmed).png' // cameron
import ImgLucy from './banner-imgs/Lucy(trimmed).png' // lucy
import ImgLauren from './banner-imgs/Lauren(trimmed).png' // lauren
import ImgMaya from './banner-imgs/Maya(trimmed).png' // maya
import ImgSydne from './banner-imgs/Sydne(trimmed).png' // sydne
import ImgSimone from './banner-imgs/Simone(trimmed).png' // simone

// Logos
import IgLogo from '../../images/icons/instagram-academy.png'
import YtLogo from '../../images/icons/youtube-academy.png'
import SpLogo from '../../images/icons/spotify-academy.png'
import TtLogo from '../../images/icons/tiktok-academy.png'
import FbLogo from '../../images/icons/facebook-academy.png'

const ThisIsSquad = () => {
  const imgHeight: string = '50px'
  const imgWidth: string = '50px'

  return (
    <>
      <Container fluid id='thisissquadmain'>
        <Row style={{ marginBottom: '0rem' }}>
          <Col xs='12' sm='12' md='12' lg='12' xl='12'>
            <Carousel>
              <Carousel.Item>
                <div>
                  <img
                    className='d-block w-100'
                    src={Carousel1}
                    alt='First slide'
                  />
                </div>
                <Carousel.Caption className='carousel-color-adjust'>
                  <h3>THIS IS SQUAD.</h3>
                  <p className='font-p'>
                    an inspiring learning community for dedicated vocalists ages
                    8-17
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={Carousel2}
                  alt='Third slide'
                />

                <Carousel.Caption>
                  <h3></h3>
                  <div className='rounded purple-highlight'>
                    <p className=''>ONLINE SINCE MAY!</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={Carousel3}
                  alt='Third slide'
                />

                {/* <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>And some third thing you want to "sell"</p>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <ButtonBox />
        <Row id='academy-cta-buttons'>
          <Col>
            <div className='v-flex-container ' id='cta-btn-group'>
              <button className='cta-btn teal-outline color-teal liberation-sans-bold'>
                CONTACT
              </button>
              <button className='cta-btn magenta-outline color-magenta liberation-sans-bold'>
                JOIN OUR MAILING LIST
              </button>
            </div>
          </Col>
        </Row>
        <Row id='social-icon-container'>
          <Col id='social-icon-set' className='h-flex-container '>
            <img
              className='social-icon'
              src={IgLogo}
              alt='Squad Harmonix instagram'
            />
            <img
              className='social-icon'
              src={YtLogo}
              alt='Squad harmonix youtube'
            />
            <img
              className='social-icon'
              src={SpLogo}
              alt='Squad harmonix spotify'
            />
            <img
              className='social-icon'
              src={TtLogo}
              alt='Squad harmonix TikTok'
            />
            <img
              className='social-icon'
              src={FbLogo}
              alt='Squad Harmonix Facebook'
            />
          </Col>
        </Row>
        <Row
          id='banner-row'
          style={{ width: '100%', margin: '0rem', padding: '0rem' }}
        >
          <Col
            xs='12'
            sm='12'
            md='12'
            lg='12'
            xl='12'
            style={{ width: '110%', margin: '0rem', padding: '0rem' }}
          >
            <div className='banner-img-container'>
              <img
                className='banner-headshot'
                src={ImgCameron}
                alt='cameron headshot'
              />
              <img
                className='banner-headshot'
                src={ImgLucy}
                alt='lucy headshot'
              />
              <img
                className='banner-headshot'
                src={ImgLauren}
                alt='lauren headshot'
              />
              <img
                className='banner-headshot'
                src={ImgMaya}
                alt='maya headshot'
              />
              <img
                className='banner-headshot'
                src={ImgSydne}
                alt='sydne headshot'
              />
              <img
                className='banner-headshot'
                src={ImgSimone}
                alt='simone headshot'
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ThisIsSquad
