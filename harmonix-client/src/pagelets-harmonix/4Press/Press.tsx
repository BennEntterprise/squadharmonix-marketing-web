import React from 'react'
import './Press.css'
import { NavHashLink } from 'react-router-hash-link'

//Social Icons
import IconFB from '../../images/social-assets/facebook-artist-good.png'
import IconIG from '../../images/social-assets/instagram-artist-good.png'
import IconTikTok from '../../images/social-assets/tiktok-artist-good.png'
import IconMail from '../../images/social-assets/mail-artist-good.png'

import { Container, Row, Col } from 'react-bootstrap'
const Press = () => {
  //Social Pages
  const SquadHarmonixFBPage = 'https://www.facebook.com/squadharmonix'
  const SquadHarmonixIGPage = 'https://twitter.com/SquadHarmonix'
  // Media Articles
  const ThePulseLink =
    'https://podcast.acaville.org/blog/2020/10/26/squad-harmonix-and-intonenation/'
  const OnTheSpotLink = 'https://youtu.be/97n_7yUP79M'
  const InspireMoreLink =
    'https://www.inspiremore.com/squad-harmonix-and-intonenation-stand-up/'
  const BroadwayWorldLink =
    'https://www.broadwayworld.com/bwwmusic/article/VIDEO-Squad-Harmonix-And-InToneNation-Covers-Cynthia-Erivos-Stand-Up-20200928'

  // Social Media Links
  const EugeneLevyTwitter =
    'https://twitter.com/Realeugenelevy/status/1291634892355170304?s=20'
  const DekeSharonFB =
    'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGmOpNiLmATc%26feature%3Dyoutu.be%26fbclid%3DIwAR0hA1RwMqkHWCA8qDxIy_q3odWpVN2OB-QxFS42EuFLFBtHv1k7XPRzJSA&h=AT3leL-AOG01aK73r_WKJcP4Fh7aAfH6HaXWKU4388BqK9DJo5Hj3PrrpLHiD5vJ8J-sYYJB0NoDtOcuLl-jP2HXBGauQ-s-Qu5TcFSnCcct_YrOekiBIpiiahp5WRHZfM5ksOJIUQ&s=1'

  const ChromeoFB =
    'https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutu.be%2FNhMLRzCHBtc&h=AT0nDEVZ5fD2Dzo5qgIxU1ZAb9aubAAj48XbCAsXv30WebKsDGtiaaVCKve54RCgaAsjJrQW1TwhHVfEreGty7wSjNyjYRlYi0Q-EjygHSGrnult6BYnxLC0f33UxxY7NEfnrBGG3Q&s=1'

  const SQuadHarmonixHallmark = 'https://fb.watch/1SC8sBuE5-/'
  const AcaVilleRadioTwitter =
    'https://twitter.com/AcavilleRadio/status/1328035035841130496?s=20'
  const SomeGoodNewsTwitter =
    'https://twitter.com/somegoodnews/status/1248587809197359106?s=20'
  const SomeGoodNewsYouTube = 'http://www.youtube.com/watch?v=Eg08rJGKjtA'
  const SquadHarmonixDrums = 'http://www.youtube.com/watch?v=Yg8dZ9ImXPw'
  return (
    <Container fluid id='press-container'>
      <NavHashLink to='#press-container'></NavHashLink>
      <Row>
        <Col>
          <h1
            className='font-jumbo liberation-sans-bold'
            style={{ textAlign: 'left', marginLeft: '10%' }}
          >
            Press
          </h1>
        </Col>
      </Row>
      <Row>
        <Col
          id='purple-bar'
          xs='1'
          sm='1'
          md='1'
          lg='1'
          xl='1'
          className='bg-magenta margin-0 padding-0'
          style={{ width: '10%' }}
        ></Col>
        <Col className='padding-0 margin-0'>
          {/* <ul className='undecorated-item'> */}
          <li className='undecorated-list-item'>
            <span className='press-release-date font-underline'>
              Oct 25, 2020:
            </span>
            <a className='undecorated-item' href={ThePulseLink}>
              &#8195;The Pulse: Squad Harmonix and InToneNation [Podcast
              Interview]
            </a>
          </li>
          <li className='undecorated-list-item'>
            <span className='press-release-date font-underline'>
              Oct 2, 2020:{' '}
            </span>
            <a className='undecorated-item' href={OnTheSpotLink}>
              &#8195;OnTheSpot: Squad Harmonix Interview - Stand Up, Activisim
              and Positive Impact [Video]
            </a>
          </li>
          <li className='undecorated-list-item'>
            <span className='press-release-date font-underline'>
              Oct 6, 2020:
            </span>
            <a className='undecorated-item' href={InspireMoreLink}>
              &#8195;InspireMore: A Cappella Groups Come Together and "Stand Up"
              for Change in Moving Performance
            </a>
          </li>
          <li className='undecorated-list-item'>
            <span className='press-release-date font-underline'>
              Sept 28, 2020:
            </span>
            <a className='undecorated-item' href={BroadwayWorldLink}>
              &#8195;Broadway World: Squad Harmonix and InToneNation Covers
              Cynthia Ervivo's 'Stand Up'
            </a>
          </li>
          {/* </ul> */}
        </Col>
      </Row>
      <Row>
        <Col id='social-media-appearances'>
          <h4> Social Media Appearances</h4>

          <li className='undecorated-list-item'>
            <a href={EugeneLevyTwitter}>
              Schitt's Creek's Eugene Levy Thinks the Future Looks "awefullly
              bright".
            </a>
          </li>
          <li className='undecorated-list-item'>
            <a href={ChromeoFB}>
              Chromeo shouts out Squad Harmonix on Facebook
            </a>
          </li>
          <li className='undecorated-list-item'>
            <a href={DekeSharonFB}>
              Squad harmonix charms Deke Sharon with a Disney Medley
            </a>
          </li>
          <li className='undecorated-list-item'>
            <a href={SQuadHarmonixHallmark}>
              Squad harmonix pospt abut being featured on The Hallmark Channel
            </a>
          </li>
          <li className='undecorated-list-item'>
            <a href={AcaVilleRadioTwitter}>AcaVille Radio on Twitter</a>
          </li>
          <li className='undecorated-list-item'>
            <a href={SomeGoodNewsTwitter}>
              We were featured on John Krasinski's (Twitter link){' '}
              <em>Some Good News</em>{' '}
            </a>
          </li>
          <li className='undecorated-list-item'>
            <a href={SomeGoodNewsYouTube}>
              <em>Some Good News [YouTube Video Link]</em>
            </a>
          </li>
          <li className='undecorated-list-item'>
            <a href={SquadHarmonixDrums}>
              <em>Squad Harmonix and The Dru</em>
            </a>
          </li>
        </Col>
      </Row>
      <h3 style={{ margin: '3% auto', fontSize: '2.5rem' }}>Follow Us</h3>
      <Row id='follow-us'>
        <a href={SquadHarmonixFBPage}>
          <img
            className='follow-us-icon'
            src={IconFB}
            alt='follow on facebook for more'
          />
        </a>
        <a href='https://www.tiktok.com/@squadharmonix'>
          <img
            className='follow-us-icon'
            src={IconTikTok}
            alt='follow on tiktok'
          />
        </a>
        <a href={SquadHarmonixIGPage}>
          <img
            className='follow-us-icon'
            src={IconIG}
            alt='follow on instagram'
          />
        </a>
        <a href='MAILTO:info@squadharmonix.com?subject=GetOnTheMailingList&body=Please%20Put%20Me%20On%20Your%20Mailing%20List!'>
          <img
            className='follow-us-icon'
            src={IconMail}
            alt='join our mailing list'
          />
        </a>
      </Row>
    </Container>
  )
}

export default Press
