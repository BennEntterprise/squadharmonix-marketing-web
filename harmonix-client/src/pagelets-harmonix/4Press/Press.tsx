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
        <NavHashLink to='#press-container'></NavHashLink>
        <div id='grid-header-item'>
          <h1 className='font-jumbo liberation-sans-bold'>Press</h1>
        </div>
        <div id='grid-cartoon-item'>
          <img src={KidsCartoon} alt='cartoon image of squad harmonix' />
        </div>
        <div id='grid-piece-item'>
          <div id='purple-bar'> </div>
          <div id='press-list'>
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
                &#8195;InspireMore: A Cappella Groups Come Together and "Stand
                Up" for Change in Moving Performance
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
          </div>
        </div>
        <div id='grid-inquiry-item'>
          <a href='MAILTO:brittany@gramophone.media'>
            <h5
              className='font-h5 libration-san-bold'
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Click Here for Press Inquiries
            </h5>
            <img src={LogoBowler} alt='brittany bowler logo' width='40%' />
            <p
              className='font-mini liberation-sans-bold'
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Brittany
              <br /> Bowler
            </p>
            <p
              className='font-mini liberation-sans-bold'
              style={{ fontSize: '0.5rem' }}
            >
              brittany
              <br />
              @gramophone.media
            </p>
          </a>
        </div>
        <Container fluid id='grid-imgs-item'>
          <Row>
            <Col xs='4' sm='4' md='4' lg='4' xl='4' className='social-column'>
              <a href={LinkEugeneLevyTwitter}>
                <img
                  src={ImgEugeneLevy}
                  className='social-media-img'
                  alt='Eugene Levy Tweet'
                />
              </a>
              <a href={LinkDekeSharonFB}>
                <img
                  src={ImgDekeSharon}
                  className='social-media-img'
                  alt='Deke Sharon Facebook post'
                />
              </a>
              <a href={LinkAcaVilleRadioTwitter}>
                <img
                  src={ImgAcaVille}
                  className='social-media-img'
                  alt='Acaville Video on youtube'
                />
              </a>
            </Col>

            <Col xs='4' sm='4' md='4' lg='4' xl='4' className='social-column'>
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
            <Col xs='4' sm='4' md='4' lg='4' xl='4' className='social-column'>
              <a href={LinkSomeGoodNewsTwitter}>
                <img
                  src={ImgSGN}
                  className='social-media-img'
                  alt='Some Good News Squad Harmonix Segment'
                />
              </a>

              <ReactPlayer
                controls
                url='https://youtube.com/watch?v=Eg08rJGKjtA'
                height='20%'
                width='100%'
                style={{ margin: '0.5rem 0', padding: '0' }}
              ></ReactPlayer>
              <ReactPlayer
                controls
                url='https://youtube.com/watch?v=Yg8dZ9ImXPw'
                height='auto'
                width='100%'
                style={{ margin: '0.5rem 0', padding: '0' }}
              ></ReactPlayer>
            </Col>
          </Row>
        </Container>
        <div id='grid-altfol-item' className='d-block d-sm-none'>
          <h5
            className='font-h5 liberation-sans-bold'
            style={{ margin: '3% auto' }}
          >
            Follow Us
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
            Follow Us
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

      {/* <Container fluid id='press-container'>
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
                &#8195;InspireMore: A Cappella Groups Come Together and "Stand
                Up" for Change in Moving Performance
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
        <h2
          className='font-h2 liberation-sans-bold'
          style={{ margin: '3% auto' }}
        >
          Follow Us
        </h2>
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
      </Container> */}
    </>
  )
}

export default Press
