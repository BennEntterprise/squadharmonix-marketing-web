import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavHashLink } from 'react-router-hash-link'
import './AboutUs.css'
// Bring In Banners
import Maya from '../../images/aboutus/Maya.png' // 1 Maya
import Mischa from '../../images/aboutus/Mischa.png' // 2 Mischa
import Noah from '../../images/aboutus/Noah.png' // 3 Noah
import Elise from '../../images/aboutus/Elise.png' // 4 Elise
import Simone from '../../images/aboutus/Simone.png' // 5 Simone
import Cameron from '../../images/aboutus/Cameron.png' // 6 Cameron
import Sydne from '../../images/aboutus/Sydne.png' // 7 Sydne
import Lauren from '../../images/aboutus/Lauren.png' // 8 Lauren
import Lucy from '../../images/aboutus/Lucy.png' // 9 Lucy

import BannerL from '../../images/harmonix-artist-page/Banner L.png'
import BannerR from '../../images/harmonix-artist-page/Banner R.png'
const AboutUs = () => {
  return (
    <Container fluid id='about-us-container'>
      <NavHashLink to='#about-us-container'></NavHashLink>
      <Row id='bout-banner'>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div id='banner-headshots-container'>
            <img className='aboutus-headshot' src={Maya} alt='Maya headshot' />
            <img
              className='aboutus-headshot'
              src={Mischa}
              alt='Mischa headshot'
            />
            <img className='aboutus-headshot' src={Noah} alt='Noah headshot' />
            <img
              className='aboutus-headshot'
              src={Elise}
              alt='Elise headshot'
            />
            <img
              className='aboutus-headshot'
              src={Simone}
              alt='Simone headshot'
            />
            <img
              className='aboutus-headshot'
              src={Cameron}
              alt='Cameron headshot'
            />
            <img
              className='aboutus-headshot'
              src={Sydne}
              alt='Sydne headshot'
            />
            <img
              className='aboutus-headshot'
              src={Lauren}
              alt='Lauren headshot'
            />
            <img className='aboutus-headshot' src={Lucy} alt='Lucy headshot' />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div id='about-us-text'>
            <h1
              id='about-us-heading'
              className='font-jumbo liberation-sans-bold'
            >
              ABOUT US
            </h1>
            <div id='more-info-bubble' style={{ display: 'none' }}>
              <p className='font-p liberation-sans'>
                CLICK HERE FOR SQUAD ACADEMY&trade;
              </p>
            </div>
            <h6 className='font-h6 liberation-sans'>
              Blending together vibrant, positive energy with a refreshing take
              on popular tunes, <strong>Squad Harmonix</strong> is an all-kids a
              cappella performance group based in Los Angeles, California. Squad
              was formed in 2019 as an a cappella training academy with an
              emphasis on performance and recording, and has released several
              videos which have gained international attention and the
              recognition of major recording artists and television producers
              over the past years. In early 2020, Squad was faced with the
              challenge of a global pandemic and segued into a virtual
              performance group where the young artists have taken the
              initiative to develop the skills necessary to accomplish the same
              level of professionalism from the safety of their homes. Before
              the pandemic, Squad had taken to perform on notable stages in the
              Los Angeles area, including the Hollywood Palladium and Disney
              Land in Anaheim.
              <br />
              <br />
              In 2020, Squad gained the attention and praise of Schitt’s Creek
              Writer and actor Eugene Levy with their arrangement of Tina
              Turner's “Simply The Best” inspired by the show, and was featured
              as an intro on John Krasinki’s popular quarantine series, Some
              Good News. Squad emphasizes the importance of collaboration and
              has worked together with *various producers and other groups such
              as InToneNation, with whom they released a song in 2020 dedicated
              to the Black Lives Matter movement and the lives lost to police
              brutality. Squad hopes to continue to make an impact on the
              greater community with their music, throughout the pandemic and
              beyond. They have released music on Spotify, Apple Music, iTunes,
              and all other streaming platforms, and their videos can be found
              on YouTube.
            </h6>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs
