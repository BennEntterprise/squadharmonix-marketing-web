import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './AboutUs.css'
// Bring In Banners
import BannerL from '../../images/harmonix-artist-page/Banner L.png'
import BannerR from '../../images/harmonix-artist-page/Banner R.png'

const AboutUs = () => {
  return (
    <Container fluid id='about-us-container'>
      <Row>
        <Col>
          <img id='banner-l' src={BannerL} />
          <img id='banner-r' src={BannerR} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 id='about-us-heading'>ABOUT US</h2>
          <div id='about-us-text'>
            <p>
              Blending together vibrant, positive energy with a refreshing take
              on popular tunes, Squad Harmonix is an all-kids a cappella
              performance group based in Los Angeles, California. Squad was
              formed in 2019 as an a cappella training academy with an emphasis
              on performance and recording, and has released several videos
              which have gained international attention and the recognition of
              major recording artists and television producers over the past
              years. In early 2020, Squad was faced with the challenge of a
              global pandemic and segued into a virtual performance group where
              the young artists have taken the initiative to develop the skills
              necessary to accomplish the same level of professionalism from the
              safety of their homes. Before the pandemic, Squad had taken to
              perform on notable stages in the Los Angeles area, including the
              Hollywood Palladium and Disney Land in Anaheim.
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
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs
