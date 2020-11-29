import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { HashLink as Link } from 'react-router-hash-link'
import './BannerPage.css'
import Syd from '../../images/harmonix-artist-page/SydneBillboard.jpg'

import FB from '../../images/social-assets/facebook-artist-good.png'
import TT from '../../images/social-assets/tiktok-artist-good.png'
import IG from '../../images/social-assets/instagram-artist-good.png'
import YTS from '../../images/social-assets/youtube-academy.png'
import YTRed from '../../images/social-assets/youtube-logo-on-trans(crop-scale).png'
import Spot from '../../images/social-assets/spotify-artist-good.png'
import iTunes from '../../images/social-assets/itunes-artist-good.png'
const BannerPage = () => {
  const YouTubeLink = 'https://www.youtube.com/squadharmonix'
  const SpotifyLink =
    'https://open.spotify.com/artist/60mJxBCIi3kLojVY7StenZ?si=Spfe6dPtSNew0qCb79_afA'
  const FacebookLink = 'https://www.facebook.com/squadharmonix/'
  const TikTokLink = 'https://www.tiktok.com/@squadharmonix'
  const InstagramLink = 'https://www.tiktok.com/@squadharmonix'
  return (
    <Container fluid id='banner-page-container'>
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
            <a href={FacebookLink}>
              <img src={FB} alt='facebook profile link' />
            </a>
            <a href={TikTokLink}>
              <img src={TT} alt='tictok profile link' />
            </a>
            <a href={InstagramLink}>
              <img src={IG} alt='instagram profile link' />
            </a>
          </div>
          <div id='banner-marquee'>
            <h4 className='purple-marquee font-h4 '>
              <strong>SQUAD HARMONIX</strong>
            </h4>
            <h1 className='font-h1 liberation-sans-bold'>HOLIDAY EP - DEBUT</h1>
            <h4 className='purple-marquee font-h4'>
              <strong className='font-h4'>YOUTUBE PREMIERE 11.29.20</strong>
            </h4>
            <div id='subscribe-btn'>
              <a className='font-h4 liberation-sans-bold' href={YouTubeLink}>
                <img src={YTRed} alt='subscribe to youtube' /> Subscribe on
                Youtube
              </a>
            </div>
          </div>
          <div id='banner-marquee-sub'>
            <p className='font-p liberation-sans-bold'>ALSO AVAILABLE ON: </p>
          </div>
          <div id='banner-listening-sources'>
            <a href={SpotifyLink}>
              <img src={Spot} alt='listen on spotify' />
            </a>
            <a href='https://music.apple.com/us/artist/squad-harmonix/1492981626'>
              <img src={iTunes} alt='listen on itunes' />
            </a>
          </div>
          <div id='banner-buttons'>
            <button className='font-p liberation-sans-bold'>
              <Link to='#about-us-container' className='neg-hashlink'>
                ABOUT US
              </Link>
            </button>

            <button className='font-p liberation-sans-bold'>
              <Link to='#members-container' className='neg-hashlink'>
                MEMBERS
              </Link>
            </button>

            <button className='font-p liberation-sans-bold'>
              <Link to='#press-container' className='neg-hashlink'>
                NEWS
              </Link>
            </button>
            <button className='font-p liberation-sans-bold'>
              <Link to='#merch-container' className='neg-hashlink'>
                MERCH
              </Link>
            </button>
          </div>
        </Col>
        <Col
          id='banner-photo-container'
          className='col-lg-pull-6 col-xl-pull-6 d-none d-sm-block'
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
