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
import LJMABranding from '../../images/LJMABranding.jpg'
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
          ></iframe>
        </div>
        <div id='right-photo-padding'>
          {/* <img src={ImgElise} alt='pre-teen Elise smiling at camera' /> */}
        </div>
      </div>
      <div id='lja-footer'>
        <div id='ljma-branding'>
          <img
            src={LJMABranding}
            alt='Laura Jean Music Academy Branding'
            height='95px'
            width='425px'
          />
          <p>discover your inner artist</p>
        </div>
        <div id='lessons-section'>
          <div id='lessons-label'>
            <h6>
              <strong>Private Lessons: </strong>
            </h6>
          </div>
          <div id='lesson-types-pannel'>
            <LessonItem text='piano' />
            <LessonItem text='voice' />
            <LessonItem text='music theory' />
            <LessonItem text='beatboxing' />
            <LessonItem text='songwriting' />
            <LessonItem text='recording/mixing' />
            <LessonItem text='artist development' />
          </div>
          <div id='advert-bubble'>
            <p>Click here for more info</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ToAudition
