import React from 'react'
import { NavHashLink } from 'react-router-hash-link'
import { Container, Row, Col } from 'react-bootstrap'
// Import Images of Merch
import ImgBlanket from '../../images/merch/Blanket.jpg'
import ImgBlueLegging from '../../images/merch/BlueLegging.jpg'
import ImgPhoneCase from '../../images/merch/IphoneCase.jpg'
import ImgMug from '../../images/merch/Mug.jpg'
import ImgPinkT from '../../images/merch/PinkT.jpg'
import ImgPurpleHoodie from '../../images/merch/PurpleHoodie.jpg'

import './Merch.css'
const Merch = () => {
  const PinkTLink =
    'https://teespring.com/stores/squadharmonix/collection/unisex-men-s-t-shirts?page=1'
  const PurpleHoodieLink =
    'https://teespring.com/stores/squadharmonix/collection/hoodies-sweatshirts?page=1'
  const BlueLeggingLink =
    'https://teespring.com/stores/squadharmonix/collection/women-s-athletic?page=1'
  const MugLink =
    'https://teespring.com/stores/squadharmonix/collection/mugs?page=1'
  const IphoneCaseLink =
    'https://teespring.com/stores/squadharmonix/collection/phone-cases?page=1'
  const BlanketLink =
    'https://teespring.com/stores/squadharmonix/collection/bedding?page=1'
  return (
    <Container fluid id='merch-container'>
      <NavHashLink to='#merch-container'></NavHashLink>
      <Row id='merch-header'>
        <h1
          className='font-h1 liberation-sans-bold'
          style={{ textAlign: 'left', margin: '2rem auto', width: '100%;' }}
        >
          Merch
        </h1>
      </Row>
      <Row className='merch-row'>
        <Col xs='12' sm='12' md='6' lg='4' xl='4'>
          <div className='merch-item-container'>
            <div>
              <a href={PinkTLink}>
                <img
                  className='merch-item-photo'
                  src={ImgPinkT}
                  alt='pink t-shirt'
                />
              </a>
            </div>
            <div className='merch-item-title liberation-sans-bold'>
              <p>T-Shirts</p>
            </div>
            <div className='merch-item-price'>
              <p>from $15.99</p>
            </div>
          </div>
        </Col>
        <Col xs='12' sm='12' md='6' lg='4' xl='4'>
          <div className='merch-item-container'>
            <div>
              <a href={PurpleHoodieLink}>
                <img
                  className='merch-item-photo'
                  src={ImgPurpleHoodie}
                  alt='hoodies'
                />
              </a>
            </div>
            <div className='merch-item-title  liberation-sans-bold'>
              <p>Sweaters</p>
            </div>
            <div className='merch-item-price'>
              <p>from $30.00</p>
            </div>
          </div>
        </Col>
        <Col xs='12' sm='12' md='6' lg='4' xl='4'>
          <div className='merch-item-container'>
            <div>
              <a href={BlueLeggingLink}>
                <img
                  className='merch-item-photo'
                  src={ImgBlueLegging}
                  alt='womens athletic'
                />
              </a>
            </div>
            <div className='merch-item-title  liberation-sans-bold'>
              <p>Women's Athletic</p>
            </div>
            <div className='merch-item-price'>
              <p>$32.50</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='merch-row'>
        <Col xs='12' sm='12' md='6' lg='4' xl='4'>
          <div className='merch-item-container'>
            <div>
              <a href={MugLink}>
                <img className='merch-item-photo' src={ImgMug} alt='mugs' />
              </a>
            </div>
            <div className='merch-item-title  liberation-sans-bold'>
              <p>Mugs</p>
            </div>
            <div className='merch-item-price'>
              <p>from $25.99</p>
            </div>
          </div>
        </Col>
        <Col xs='12' sm='12' md='6' lg='4' xl='4'>
          <div className='merch-item-container'>
            <div>
              <a href={BlanketLink}>
                <img
                  className='merch-item-photo'
                  src={ImgBlanket}
                  alt='blankets'
                />
              </a>
            </div>
            <div className='merch-item-title  liberation-sans-bold'>
              <p>Blankets</p>
            </div>
            <div className='merch-item-price'>
              <p>$45.00</p>
            </div>
          </div>
        </Col>
        <Col xs='12' sm='12' md='6' lg='4' xl='4'>
          <div className='merch-item-container'>
            <div>
              <a href={IphoneCaseLink}>
                <img
                  className='merch-item-photo'
                  src={ImgPhoneCase}
                  alt='phone cases'
                />
              </a>
            </div>
            <div className='merch-item-title  liberation-sans-bold'>
              <p>Phone Cases</p>
            </div>
            <div className='merch-item-price'>
              <p>$7.99</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href='https://teespring.com/stores/squadharmonix?page=1'>
            <div id='btn-more-merch'>
              <p> SEE MORE {'>'} </p>
            </div>
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default Merch
