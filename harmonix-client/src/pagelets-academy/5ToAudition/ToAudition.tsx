import React, { useState } from 'react'
import './toaudition.css'
import { darkMagenta } from '../../constants/Colors'
import { Container, ListGroupItem } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import LessonItem from '../../components/LessonItem/LessonItem'
import ImgBlake from '../../images/contact/BlakeContactPage.jpg'
import ImgElise from '../../images/contact/EliseContactPage.jpg'
import LJMABranding from '../../images/logos/LJMA Black(trimmed).png'
import Eighths from '../../images/icons/eighth note circle clip art.png'
function ToAudition() {
  return (
    <Container fluid id='toaudition'>
      <div id='main-container'>
        <div id='left-photo-padding'>
          {/* <img src={ImgBlake} alt='pre-teen blake crossing his arms smiling' /> */}
        </div>
        <div id='form-container'>
          <iframe
            src='//us18.list-manage.com/contact-form?u=5862c03408605c39fa217f490&form_id=f86c10beda6e78b9f11053178c4220c7'
            title='Mailchimp signup form'
            style={{ border: 'none', width: '100%', height: '150vw' }}
          >
            Oops your popup blocker is preventing you from seeing our contact
            form. Please unblock us or send an email directly to
            info@squadharmonix.com with your questions/concerns.
          </iframe>
        </div>
        <div id='right-photo-padding'>
          {/* <img src={ImgElise} alt='pre-teen Elise smiling at camera' /> */}
        </div>
      </div>
      <div id='footer'>
        <div id='footer-left'>
          <div id='ljma-branding'>
            <img
              id='ljma-img'
              src={LJMABranding}
              alt='Laura Jean Music Academy Branding'
            />
            <p className='liberation-sans font-mini'>
              discover your inner artist.
            </p>
          </div>
        </div>
        <div id='footer-right'>
          <div id='lessons-label'>
            <p className='liberation-sans-bold font-mini'>
              <strong> Private Lessons: </strong>
            </p>
          </div>
          <div id='lessons-section'>
            <div id='lesson-types-pannel'>
              <p className='liberation-sans font-mini'>
                piano, voice, music theory,
              </p>
              <p className='liberation-sans font-mini'>
                beat-boxing, songwriting,
              </p>
              <p className='liberation-sans font-mini'>recording/mixing</p>
              <p
                className='liberation-sans font-mini'
                style={{ lineHeight: '0rem' }}
              >
                artist development
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ToAudition
