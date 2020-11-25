import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './BannerPage.css'
import Syd from '../../images/harmonix-artist-page/SydneBillboard.jpg'

import FB from '../../images/social-assets/facebook-artist-good.png'
import TT from '../../images/social-assets/tiktok-artist-good.png'
import IG from '../../images/social-assets/instagram-artist-good.png'
const BannerPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          id='banner-content-container'
          className='col-lg-push-6 col-xl-push-6'
          xs={12}
          sm={12}
          md={12}
          lg={{ order: 'last', span: 6, offset: 0 }}
          xl={{ order: 'last', span: 6, offset: 0 }}
        >
          <div id='banner-social-sites'>
            <img src={FB} alt='facebook logo' />
            <img src={TT} alt='facebook logo' />
            <img src={IG} alt='facebook logo' />
          </div>
          <div id='banner-marquee'></div>
          <div id='banner-marquee-sub'>
            <p>ALSO AVAILABLE ON: </p>
          </div>
          <div id='banner-listening-sources'></div>
          <div id='banner-buttons'>
            <button>ABOUT US</button>
            <button>MEMBERS</button>
            <button>NEWS</button>
            <button>MERCH</button>
          </div>
        </Col>
        <Col
          id='banner-photo-container'
          className='col-lg-pull-6 col-xl-pull-6'
          xs={12}
          sm={12}
          md={12}
          lg={{ order: 'first', span: 6, offset: 0 }}
          xl={{ order: 'first', span: 6, offset: 0 }}
        >
          <img id='banner-img' src={Syd} alt='Sydne in chistmas garb' />
        </Col>
      </Row>
    </Container>
  )
}

export default BannerPage
