import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import SocialIcon from '../../components/SocialIcon'
import { tortise, darkMagenta, magenta } from '../../constants/Colors'
import './thisissquad.css'

//Carousel Imgs
import Carousel1 from './carousel-imgs/black6020x4020.png'
import Carousel2 from './carousel-imgs/mischa cameron.jpeg'
import Carousel3 from './carousel-imgs/National anthem.jpeg'

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
      <Container fluid>
        <Row style={{ marginBottom: '5rem' }}>
          <Col xs='12' sm='12' md='12' lg='12' xl='12'>
            <Carousel activeIndex={0}>
              <Carousel.Item>
                <div>
                  <img
                    className='d-block w-100'
                    src={Carousel1}
                    alt='First slide'
                  />
                </div>
                <Carousel.Caption>
                  <div id='btn-groups-artist-academy'>
                    <div id='btn-group-academy' className='magenta-outline'>
                      <h3>Squad&trade; Academy</h3>
                      <div id='squad-nav-btns' className='v-flex-container'>
                        <a href='#whatissquad'>
                          <button className='magenta-outline bg-grey'>
                            WHAT IS SQUAD
                          </button>
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
                          <button className='magenta-outline bg-grey'>
                            AUDITION!
                          </button>
                        </a>
                      </div>
                    </div>
                    <div id='btn-group-harmonix' className='teal-outline'>
                      <h3> Squad Harmonix&trade;</h3>
                      <div id='harmonix-nav-btns' className='v-flex-container'>
                        <a href='#music'>
                          <button className='teal-outline bg-grey'>
                            MUSIC
                          </button>
                        </a>
                        <a href='#about'>
                          <button className='teal-outline bg-grey'>
                            ABOUT
                          </button>
                        </a>
                        <a href=''>
                          <button className='teal-outline bg-grey'>
                            MEMBERS
                          </button>
                        </a>
                        <a href=''>
                          <button className='teal-outline bg-grey'>NEWS</button>
                        </a>
                        <a href=''>
                          <button className='teal-outline bg-grey'>
                            MERCH
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={Carousel2}
                  alt='Third slide'
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Ohhhh more awesomeness!</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={Carousel3}
                  alt='Third slide'
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>And some third thing you want to "sell"</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container fluid id='thisissquad'>
        <Row>
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
                an inspiring learning community for dedicated vocalists ages
                8-17
              </p>
              <div className='rounded purple-highlight'>
                <p className=''>ONLINE SINCE MAY!</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs='6' sm='6' md='6' lg='6' xl='6'>
            <div
              className='v-flex-container magenta-outline'
              id='btn-group-academy'
            >
              <h3>Squad&trade; Academy</h3>
              <div id='squad-nav-btns' className='v-flex-container'>
                <a href='#whatissquad'>
                  <button className='magenta-outline bg-grey'>
                    WHAT IS SQUAD
                  </button>
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
          </Col>
          <Col xs='6' sm='6' md='6' lg='6' xl='6'>
            <div
              className='v-flex-container teal-outline  '
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
          </Col>
        </Row>
        <Row id='flex-item-3'>
          <Col>
            <div className='v-flex-container ' id='cta-btn-group'>
              <button className='cta-btn teal-outline color-teal'>
                CONTACT
              </button>
              <button className='cta-btn magenta-outline color-magenta'>
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
    </>
  )
}

export default ThisIsSquad
