import React from 'react'
import './thisissquad.scss'
import { Container, Row, Col } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'
import SocialIcon from '../../components/SocialIcon'
import { tortise, darkMagenta, magenta, teal } from '../../constants/Colors'
import ButtonBox from '../../components/ButtonBox'
//Carousel Imgs
import Carousel1 from './carousel-imgs/National anthem.jpeg'
import Carousel2 from './carousel-imgs/Lauren this one takes priority.jpeg'
import Carousel3 from './carousel-imgs/mischa cameron.jpeg'
import Carousel4 from './carousel-img/Party in USA.png'

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

interface ICarouselBannerCopy {
  heading?: string
  subHeading?: string
  tidbit?: string
  textAlignment?: 'left' | 'right' | 'center'
}
const CarouselBannerCopy = (props: ICarouselBannerCopy) => {
  let floatVal: 'left' | 'right' | 'none'
  switch (props.textAlignment) {
    case 'left':
      floatVal = 'left'
      break
    case 'right':
      floatVal = 'right'
      break
    default:
      floatVal = 'none'
      break
  }

  return (
    <div className='carousel-banner-copy'>
      <h1 style={{ textAlign: props.textAlignment }}>{props.heading}</h1>
      <h6 style={{ textAlign: props.textAlignment }}>{props.subHeading}</h6>
      {props.tidbit && (
        <p
          style={{
            textAlign: props.textAlignment,
            zIndex: 1,
            float: floatVal,
          }}
        >
          {props.tidbit}
        </p>
      )}
    </div>
  )
}

const ThisIsSquad = () => {
  const imgHeight: string = '50px'
  const imgWidth: string = '50px'

  return (
    <>
      <Container fluid id='thisissquadmain'>
        <Row style={{ marginBottom: '0rem' }}>
          <Col
            xs='12'
            sm='12'
            md='12'
            lg='12'
            xl='12'
            style={{ paddingLeft: '0%', paddingRight: '0px' }}
          >
            <Carousel>
              <Carousel.Item>
                <div id='carousel-img-1' className='carousel-img'></div>
                <CarouselBannerCopy
                  heading={'THIS IS SQUAD.'}
                  subHeading={
                    'an inspiring learning community for dedicated vocalists agess 8-17'
                  }
                  tidbit={'ONLINE SINCE MAY!'}
                  textAlignment='left'
                />
                <Carousel.Caption className='carousel-caption-a'></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div id='carousel-img-2' className='carousel-img'></div>
                <CarouselBannerCopy
                  heading={'Find your passion.'}
                  subHeading='Shape your musical experience with our many A Cappella training programs, from voice to music theory to beatboxing.'
                  tidbit='ONLINE SINCE MAY!'
                  textAlignment='right'
                />
                <Carousel.Caption className='carousel-caption-a'></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div id='carousel-img-3' className='carousel-img'></div>
                <CarouselBannerCopy
                  heading='Share the screen.'
                  subHeading='Take part in collaborative projects that bring us back together in an otherwise distant world.'
                  tidbit='ONLINE SINCE MAY!'
                  textAlignment='left'
                />
                <Carousel.Caption className='carousel-caption-a'></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div id='carousel-img-4' className='carousel-img'></div>
                <CarouselBannerCopy />
                <Carousel.Caption className='carousel-caption-a'></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 10, offset: 1 }}
            md={{ span: 10, offset: 1 }}
            lg={{ span: 10, offset: 1 }}
            xl={{ span: 10, offset: 1 }}
          >
            <ButtonBox />
          </Col>
        </Row>
        <Row id='academy-cta-buttons'>
          <Col>
            <div className='v-flex-container ' id='cta-btn-group'>
              <button className='cta-btn teal-outline color-teal liberation-sans-bold'>
                <HashLink
                  to='#toaudition'
                  style={{ textDecoration: 'none', color: teal }}
                >
                  CONTACT
                </HashLink>
              </button>
              <button className='cta-btn magenta-outline color-magenta liberation-sans-bold'>
                <a
                  href='https://squadharmonix.us18.list-manage.com/subscribe?u=5862c03408605c39fa217f490&id=6eb6e8947f'
                  style={{ textDecoration: 'none', color: magenta }}
                >
                  JOIN OUR MAILING LIST
                </a>
              </button>
            </div>
          </Col>
        </Row>
        <Row id='social-icon-container'>
          <Col id='social-icon-set' className='h-flex-container '>
            <a href='https://instagram.com/squadharmonix'>
              <img
                className='social-icon'
                src={IgLogo}
                alt='Squad Harmonix instagram'
              />
            </a>
            <a href='https://youtube.com/squadharmonix'>
              <img
                className='social-icon'
                src={YtLogo}
                alt='Squad harmonix youtube'
              />
            </a>
            <a href='https://open.spotify.com/artist/60mJxBCIi3kLojVY7StenZ?si=3qGIirU4SKCFQQM1JcsPyg'>
              <img
                className='social-icon'
                src={SpLogo}
                alt='Squad harmonix spotify'
              />
            </a>
            <a href='https://www.tiktok.com/@squadharmonix'>
              <img
                className='social-icon'
                src={TtLogo}
                alt='Squad harmonix TikTok'
              />
            </a>
            <a href='https://www.facebook.com/squadharmonix'>
              <img
                className='social-icon'
                src={FbLogo}
                alt='Squad Harmonix Facebook'
              />
            </a>
          </Col>
        </Row>
        <div id='banner-row'>
          <div className='banner-img-container'>
            <img
              className='banner-headshot'
              src={ImgCameron}
              alt='cameron headshot'
            />
            <img className='banner-headshot' src={ImgLucy} alt='lucy shot' />
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
        </div>
      </Container>
    </>
  )
}

export default ThisIsSquad
