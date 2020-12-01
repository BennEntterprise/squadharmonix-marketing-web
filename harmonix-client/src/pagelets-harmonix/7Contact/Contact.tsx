import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './Contact.css'
import axios from 'axios'
import { flower } from '../../constants/Colors'

import { Container, Row, Col } from 'react-bootstrap'
//Import Images
import ImgContact1 from '../../images/artist-contact/Sydne Contact.png'
import ImgContact2 from '../../images/artist-contact/Simone Contact.png'
import ImgContact3 from '../../images/artist-contact/Maya Contact.png'
import ImgContact4 from '../../images/artist-contact/Lucy Contact.png'
import ImgContact5 from '../../images/artist-contact/Lauren Contact.png'
import HorizontalColorBand from '../../components/HorizontalColorBand'
const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [confirmation, setConfirmation] = useState(false)
  const [sendError, setSendError] = useState(false)
  const handleFormChange = (e: any) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value)
        break
      case 'email':
        setEmail(e.target.value)
        break
      case 'subject':
        setSubject(e.target.value)
        break
      case 'message':
        setMessage(e.target.value)
        break
      default:
        console.log('Unhandled update')
        return
    }
  }

  const submitContactForm = (e: any) => {
    e.preventDefault()
    console.log('Submitting form')
    axios
      .post('/artist-contact-form-submit', {
        name,
        email,
        subject,
        message,
      })
      .then((res: any) => {
        console.log(res)
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
      })
      .catch((err) => {
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
        console.log(err)
      })
  }

  return (
    <Container fluid id='contact-container'>
      <Row>
        <Col>
          <div id='contact-header-banner'>
            <img className='contact-image' src={ImgContact1} alt='artist' />
            <img className='contact-image' src={ImgContact2} alt='artist' />
            <img className='contact-image' src={ImgContact3} alt='artist' />
            <img className='contact-image' src={ImgContact4} alt='artist' />
            <img className='contact-image' src={ImgContact5} alt='artist' />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs='12' sm='12' md='12' lg='12' xl='12'>
          <iframe
            src='//us18.list-manage.com/contact-form?u=5862c03408605c39fa217f490&form_id=f86c10beda6e78b9f11053178c4220c7'
            title='Mailchimp signup form'
            style={{ border: 'none', width: '100%', height: '100vw' }}
          ></iframe>
        </Col>
      </Row>
      {/*
       <Row>
        <Col>
          <div >
           
            <form
              id='artist-contact-form'
              onChange={(e: any) => handleFormChange(e)}
              style={{ width: '50%' }}
            >
              <h1 className='font-juumbo  liberation-sans-bold'>CONTACT</h1>
              <p className=' liberation-sans-bold'>
                Let us know of any inquiries or requests here.
              </p>
              <input
                className='form-input  liberation-sans-bold rounded'
                placeholder='Name:'
                name='name'
                type='text'
              />
              <input
                className='form-input  liberation-sans-bold rounded'
                placeholder='Email:'
                name='email'
                type='email'
              />
              <input
                className='form-input  liberation-sans-bold rounded'
                placeholder='Subject:'
                name='subject'
                type='text'
              />
              <textarea
                className='form-input  liberation-sans-bold rounded'
                placeholder='Message:'
                name='message'
                rows={4}
                style={{ height: '8rem' }}
              ></textarea>
              {sendError && (
                <p style={{ color: 'red' }}>
                  OOPS There was an error sending your message. Please try again
                  later
                </p>
              )}
              {confirmation && (
                <p style={{ color: 'green' }}>
                  You Message was sent successfully! We'll get in touch soon!
                </p>
              )}
              <button
                className='rounded liberation-sans-bold m-auto'
                type='submit'
                value='submit'
                onClick={(e) => submitContactForm(e)}
              >
                SEND
              </button>
            </form>
          </div>
        </Col>
      </Row>
    */}
    </Container>
  )
}

export default Contact
