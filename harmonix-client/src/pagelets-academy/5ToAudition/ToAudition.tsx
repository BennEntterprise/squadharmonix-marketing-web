import React, { useState } from 'react'
import './toaudition.css'
import { darkMagenta } from '../../constants/Colors'
import { Container, ListGroupItem } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import LessonItem from '../../components/LessonItem'
import ImgBlake from '../../images/contact/BlakeContactPage.jpg'
import ImgElise from '../../images/contact/EliseContactPage.jpg'
import LJMABranding from '../../images/LJMABranding.jpg'
function ToAudition() {
  // Set up the form state
  const [parentName, setParentName] = useState('')
  const [studentName, setStudentName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('Audition Info')
  const [message, setMessage] = useState('')
  const [wantsNewsletter, setWantsNewsletter] = useState(true)

  const handleFormChange = (e: any) => {
    switch (e.target.name) {
      case 'parentName':
        setParentName(e.target.value)
        break
      case 'studentName':
        setStudentName(e.target.value)
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
      case 'subscribe':
        break
      default:
        console.error(`No case handled for ${e.target.name}`)
    }
  }
  const toggleCheck = () => {
    if (wantsNewsletter) {
      setWantsNewsletter(false)
    } else {
      setWantsNewsletter(true)
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    axios
      .post('/academy-contact-form-submit', {
        parentName,
        studentName,
        email,
        subject,
        message,
        wantsNewsletter,
      })
      .then((res: any) => console.info(res))
      .catch((err: any) => console.error(err))
    setParentName('')
    setStudentName('')
    setEmail('')
    setSubject('Subject: Audition Info')
    setMessage('')
  }

  return (
    <Container fluid id='toaudition'>
      <div id='main-container'>
        <div id='left-photo-padding'>
          {/* <img src={ImgBlake} alt='pre-teen blake crossing his arms smiling' /> */}
        </div>
        <div id='form-container'>
          <Form onChange={(e) => handleFormChange(e)} onSubmit={handleSubmit}>
            <Form.Label>
              <p
                style={{
                  border: `2px solid ${darkMagenta}`,
                  fontSize: '14px',
                  padding: '10px 3px',
                }}
              >
                Please submit the following the receive an audition packet and
                information:
              </p>
            </Form.Label>
            <Form.Group controlId='formBasicParentName'>
              <Form.Control
                name='parentName'
                type='parentName'
                placeholder='Parent Name'
              />
            </Form.Group>
            <Form.Group controlId='formBasicStudentName'>
              <Form.Control
                name='studentName'
                type='studentName'
                placeholder='Student Name'
              />
            </Form.Group>
            <Form.Group controlId='formBasicContactEmail'>
              <Form.Control
                name='email'
                type='contactEmail'
                placeholder='Contact Email'
              />
            </Form.Group>
            <Form.Group controlId='formBasicSubject'>
              <Form.Control
                name='subject'
                type='subject'
                placeholder='Subject: Audition Info'
              />
            </Form.Group>
            <Form.Group controlId='formBasicMesage'>
              <Form.Control
                as='textarea'
                rows={3}
                name='message'
                type='message'
                placeholder='Message'
              />
            </Form.Group>
            <Form.Group controlId='formBasicCheckbox' id='subscribe-group'>
              <Form.Check
                name='subscribe'
                checked={wantsNewsletter}
                type='checkbox'
                label='Subscribe to our newsletter'
                onChange={toggleCheck}
              />
            </Form.Group>
            <Button variant='primary' type='submit' style={{}}>
              Submit
            </Button>
          </Form>
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
