import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SocialIcon from '../../components/SocialIcon'
import { tortise, darkMagenta, magenta } from '../../constants/Colors'
import './thisissquad.css'

// Logos
import IgLogo from '../../images/social-assets/instagram-logo-on-trans.jpg'
import YtLogo from '../../images/social-assets/youtube-logo-on-trans.png'
import SpLogo from '../../images/social-assets/spotify-logo-on-trans.jpg'
import TtLogo from '../../images/social-assets/TikTok-logo-on-trans.png'
import FbLogo from '../../images/social-assets/Facebook-logo-on-trans.png'

const ThisIsSquad = () => {
  const imgHeight: string = '50px'
  const imgWidth: string = '50px'

  return (
    <Container fluid id='thisissquad'>
      <Row id='flex-item-1'>
        <Col
          className='squad-headline-container'
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <div id='headline-text'>
            <h1 id='headliner'>THIS IS SQUAD</h1>
            <p id='sub-headliner'>
              an inspiring learning community for dedicated vocalists ages 8-17
            </p>
            <div className='rounded purple-highlight'>
              <p className=''>ONLINE SINCE MAY!</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row
        id='flex-item-2'
        className='h-flex-container'
        style={{ justifyContent: 'center' }}
      >
        <div
          className='v-flex-container magenta-outline mr-5 ml-5'
          id='btn-group-academy'
        >
          <h3>Squad&trade; Academy</h3>
          <div id='squad-nav-btns' className='v-flex-container'>
            <a href='#whatissquad'>
              <button className='magenta-outline bg-grey'>WHAT IS SQUAD</button>
            </a>
            <a href='#meettheteachers'>
              <button className='magenta-outline bg-grey'>
                MEET THE TEACHERS
              </button>
            </a>
            <a href='#meetthesquad'>
              <button className='magenta-outline bg-grey'>
                MEET THE SQUAD
              </button>
            </a>
            <a href='#toaudition'>
              <button className='magenta-outline bg-grey'>AUDITION!</button>
            </a>
          </div>
        </div>

        <div
          className='v-flex-container teal-outline mr-5 ml-5 '
          id='btn-group-harmonix'
        >
          <h3> Squad Harmonix&trade;</h3>
          <div id='harmonix-nav-btns' className='v-flex-container'>
            <a href='#music'>
              <button className='teal-outline bg-grey'>MUSIC</button>
            </a>
            <a href='#about'>
              <button className='teal-outline bg-grey'>ABOUT</button>
            </a>
            <a href=''>
              <button className='teal-outline bg-grey'>MEMBERS</button>
            </a>
            <a href=''>
              <button className='teal-outline bg-grey'>NEWS</button>
            </a>
            <a href=''>
              <button className='teal-outline bg-grey'>MERCH</button>
            </a>
          </div>
        </div>
      </Row>
      <Row id='flex-item-3'>
        <Col>
          <div className='v-flex-container ' id='cta-btn-group'>
            <button
              className='teal-outline'
              style={{ backgroundColor: tortise }}
            >
              CONTACT
            </button>
            <button
              className='magenta-outline'
              style={{ backgroundColor: darkMagenta }}
            >
              JOIN OUR MAILING LIST
            </button>
          </div>
        </Col>
      </Row>
      <Row id='flex-item-4'>
        <Col id='social-icon-set' className='h-flex-container '>
          <img className='social-icon' src={IgLogo} alt='' />
          <img className='social-icon' src={YtLogo} alt='' />
          <img className='social-icon' src={SpLogo} alt='' />
          <img className='social-icon' src={TtLogo} alt='' />
          <img className='social-icon' src={FbLogo} alt='' />
        </Col>
      </Row>
    </Container>
  )
}

export default ThisIsSquad