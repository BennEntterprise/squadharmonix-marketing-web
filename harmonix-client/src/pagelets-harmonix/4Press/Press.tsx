import React from 'react'
import './Press.css'
import { NavHashLink } from 'react-router-hash-link'
import { Container, Row, Col } from 'react-bootstrap'
import ReactPlayer from 'react-player'

//Social Icons
import IconFB from '../../images/icons/facebook-academy.png'
import IconTikTok from '../../images/icons/tiktok-academy.png'
import IconIG from '../../images/icons/instagram-academy.png'
import IconMail from '../../images/icons/mailinglist-academy(trimmed).png'

// Press Icons
import KidsCartoon from '../../images/all kids.png'
import LogoBowler from '../../images/logos/gramophone meddia(trimmed).webp'

// Social Snippets
import ImgEugeneLevy from '../../images/press/2.3.1 Eugene Levy.png'
import ImgDekeSharon from '../../images/press/2.3.2 Deke Sharon.png'
import ImgChromeo from '../../images/press/2.3.3 Chromeo.png'
import ImgHallmark from '../../images/press/2.3.4 Hallmark.png'
import ImgAcaVille from '../../images/press/2.3.5 AcaVille.png'
import ImgSGN from '../../images/press/2.3.6 Some Good News.png'
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
  const LinkEugeneLevyTwitter =
    'https://twitter.com/Realeugenelevy/status/1291634892355170304?s=20'
  const LinkDekeSharonFB =
    'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGmOpNiLmATc%26feature%3Dyoutu.be%26fbclid%3DIwAR0hA1RwMqkHWCA8qDxIy_q3odWpVN2OB-QxFS42EuFLFBtHv1k7XPRzJSA&h=AT3leL-AOG01aK73r_WKJcP4Fh7aAfH6HaXWKU4388BqK9DJo5Hj3PrrpLHiD5vJ8J-sYYJB0NoDtOcuLl-jP2HXBGauQ-s-Qu5TcFSnCcct_YrOekiBIpiiahp5WRHZfM5ksOJIUQ&s=1'

  const LinkChromeoFB =
    'https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutu.be%2FNhMLRzCHBtc&h=AT0nDEVZ5fD2Dzo5qgIxU1ZAb9aubAAj48XbCAsXv30WebKsDGtiaaVCKve54RCgaAsjJrQW1TwhHVfEreGty7wSjNyjYRlYi0Q-EjygHSGrnult6BYnxLC0f33UxxY7NEfnrBGG3Q&s=1'

  const LinkSQuadHarmonixHallmark = 'https://fb.watch/1SC8sBuE5-/'
  const LinkAcaVilleRadioTwitter =
    'https://twitter.com/AcavilleRadio/status/1328035035841130496?s=20'
  const LinkSomeGoodNewsTwitter =
    'https://twitter.com/somegoodnews/status/1248587809197359106?s=20'
  const LinkSomeGoodNewsYouTube = 'http://www.youtube.com/watch?v=Eg08rJGKjtA'
  const LinkSquadHarmonixDrums = 'http://www.youtube.com/watch?v=Yg8dZ9ImXPw'
  return (
    <>
      <Container fluid id='press-container'>
        <div id='cartoon-item' style={{ width: '100%' }}>
          <img src={KidsCartoon} alt='cartoon image of squad harmonix' />
        </div>
        <Container fluid id='press-container-grid'>
          <NavHashLink to='#press-container'></NavHashLink>
          <div id='grid-header-item'>
            <h1 className='font-jumbo liberation-sans-bold'>PRESS</h1>
          </div>

          <PressItem date='' href='' text='' />

          <div id='grid-piece-item'>
            <div id='press-list'>
              <li className='undecorated-list-item'>
                <span className='press-release-date font-underline'>
                  Sept 28, 2020:
                </span>
                <a className='undecorated-item' href={BroadwayWorldLink}>
                  &#8195;Broadway World: Squad Harmonix and InToneNation Covers
                  Cynthia Ervivo's 'Stand Up'
                </a>
              </li>
              <li className='undecorated-list-item'>
                <span className='press-release-date font-underline'>
                  Oct 2, 2020:{' '}
                </span>
                <a className='undecorated-item' href={OnTheSpotLink}>
                  &#8195;OnTheSpot: Squad Harmonix Interview - Stand Up,
                  Activisim and Positive Impact [Video]
                </a>
              </li>
              <li className='undecorated-list-item'>
                <span className='press-release-date font-underline'>
                  Oct 6, 2020:
                </span>
                <a className='undecorated-item' href={InspireMoreLink}>
                  &#8195;InspireMore: A Cappella Groups Come Together and "Stand
                  Up" for Change in Moving Performance
                </a>
              </li>
              <li className='undecorated-list-item'>
                <span className='press-release-date font-underline'>
                  Oct 25, 2020:
                </span>
                <a className='undecorated-item' href={ThePulseLink}>
                  &#8195;The Pulse: Squad Harmonix and InToneNation [Podcast
                  Interview]
                </a>
              </li>
            </div>
          </div>
          <div id='grid-inquiry-item'>
            <a href='MAILTO:brittany@gramophone.media'>
              <h6
                className='font-h6 libration-san-bold'
                style={{ textDecoration: 'none', color: 'black' }}
              >
                CLICK HERE FOR PRESS INQUIRIES
              </h6>
              <img
                src={LogoBowler}
                alt='brittany bowler logo'
                width='20%'
                className=' d-none d-md-inline'
              />
              <p
                className='font-mini liberation-sans-bold d-none d-lg-block'
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  marginBottom: '0',
                }}
              >
                Brittany Bowler
              </p>
              <p
                className='font-p liberation-sans-bold d-none d-lg-inline'
                style={{ fontSize: '1rem', marginTop: '0.50rem' }}
              >
                brittany@gramophone.media
              </p>
            </a>
          </div>
          <Container fluid id='grid-imgs-item'>
            <Row>
              <Col
                xs='12'
                sm='6'
                md='4'
                lg='4'
                xl='4'
                className='social-column'
              >
                <a href={LinkEugeneLevyTwitter}>
                  <img
                    src={ImgEugeneLevy}
                    className='social-media-img'
                    alt='Eugene Levy Tweet'
                  />
                </a>
                <ReactPlayer
                  controls
                  url='https://youtube.com/watch?v=Eg08rJGKjtA'
                  height='20%'
                  width='100%'
                  style={{ margin: '0.5rem 0', padding: '0' }}
                ></ReactPlayer>
                <a href={LinkAcaVilleRadioTwitter}>
                  <img
                    src={ImgAcaVille}
                    className='social-media-img'
                    alt='Acaville Video on youtube'
                  />
                </a>
              </Col>

              <Col
                xs='12'
                sm='6'
                md='4'
                lg='4'
                xl='4'
                className='social-column'
              >
                <a href={LinkChromeoFB}>
                  <img
                    src={ImgChromeo}
                    className='social-media-img'
                    alt='Chromeo facebook post'
                  />
                </a>
                <a href={LinkSQuadHarmonixHallmark}>
                  <img
                    src={ImgHallmark}
                    className='social-media-img'
                    alt='Squad harmonix facebook post mentioning hallmark'
                  />
                </a>
              </Col>
              <Col
                xs='12'
                sm='6'
                md='4'
                lg='4'
                xl='4'
                className='social-column'
              >
                <a href={LinkSomeGoodNewsTwitter}>
                  <img
                    src={ImgSGN}
                    className='social-media-img'
                    alt='Some Good News Squad Harmonix Segment'
                  />
                </a>

                <a href={LinkDekeSharonFB}>
                  <img
                    src={ImgDekeSharon}
                    className='social-media-img'
                    alt='Deke Sharon Facebook post'
                  />
                </a>

                {/* <ReactPlayer
                  controls
                  url='https://youtube.com/watch?v=Yg8dZ9ImXPw'
                  height='auto'
                  width='100%'
                  style={{ margin: '0.5rem 0', padding: '0' }}
                ></ReactPlayer> */}
              </Col>
            </Row>
          </Container>
          <div id='grid-altfol-item' className='d-block d-sm-none'>
            <h5
              className='font-h5 liberation-sans-bold'
              style={{ margin: '3% auto' }}
            >
              FOLLOW US
            </h5>
            <div>
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
              <a href='https://squadharmonix.us18.list-manage.com/subscribe?u=5862c03408605c39fa217f490&id=6eb6e8947f'>
                <img
                  className='follow-us-icon'
                  src={IconMail}
                  alt='join our mailing list'
                />
              </a>
            </div>
          </div>
          <div id='grid-follow-item' className='d-none d-sm-flex'>
            <h5
              className='font-h5 liberation-sans-bold'
              style={{ margin: '3% auto' }}
            >
              FOLLOW US
            </h5>
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
            <a href='https://squadharmonix.us18.list-manage.com/subscribe?u=5862c03408605c39fa217f490&id=6eb6e8947f'>
              <img
                className='follow-us-icon'
                src={IconMail}
                alt='join our mailing list'
              />
            </a>
          </div>
        </Container>
      </Container>
    </>
  )
}

interface IPressItem {
  date: string
  href: string
  text: string
}
const PressItem = (props: IPressItem) => {
  return (
    <li className='undecorated-list-item'>
      <span className='press-release-date font-underline'>{props.date}:</span>
      <a className='undecorated-item' href={props.href}>
        &#8195;{props.text}
      </a>
    </li>
  )
}

export default Press
