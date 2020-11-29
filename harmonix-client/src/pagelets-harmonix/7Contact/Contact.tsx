import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './Contact.css'
import axios from 'axios'
import { flower } from '../../constants/Colors'
//Import Images
import ImgContact1 from '../../images/artist-contact/contact1.jpg'
import ImgContact2 from '../../images/artist-contact/contact2.jpg'
import ImgContact3 from '../../images/artist-contact/contact3.jpg'
import ImgContact4 from '../../images/artist-contact/contact4.jpg'
import ImgContact5 from '../../images/artist-contact/contact5.jpg'
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
    <div id='contact-container'>
      {/* <div id='contact-header-banner'>
        <img src={ImgContact1} alt='artist' />
        <img src={ImgContact2} alt='artist' />
        <img src={ImgContact3} alt='artist' />
        <img src={ImgContact4} alt='artist' />
        <img src={ImgContact5} alt='artist' />
      </div> */}
      <HorizontalColorBand
        color={flower}
        height='50px'
        style={{ marginBottom: '4rem' }}
      />
      <form id='artist-contact-form' onChange={(e: any) => handleFormChange(e)}>
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
        ></textarea>
        {sendError && (
          <p style={{ color: 'red' }}>
            OOPS There was an error sending your message. Please try again later
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
  )
}

export default Contact
