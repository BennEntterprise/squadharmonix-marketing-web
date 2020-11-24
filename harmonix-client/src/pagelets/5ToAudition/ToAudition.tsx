import React from 'react'
import './toaudition.css'
import { darkMagenta } from '../../constants/Colors'
import { Container, ListGroupItem } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap'
import Navbar from '../../components/Navbar'
import LessonItem from '../../components/LessonItem'
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
          <Form>
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
              <Form.Control type='parentName' placeholder='Parent Name' />
            </Form.Group>
            <Form.Group controlId='formBasicStudentName'>
              <Form.Control type='studentName' placeholder='Student Name' />
            </Form.Group>
            <Form.Group controlId='formBasicContactEmail'>
              <Form.Control type='contactEmail' placeholder='Contact Email' />
            </Form.Group>
            <Form.Group controlId='formBasicSubject'>
              <Form.Control
                type='subject'
                placeholder='Subject: Audition Info'
              />
            </Form.Group>
            <Form.Group controlId='formBasicMesage'>
              <Form.Control type='message' placeholder='Student Name' />
            </Form.Group>
            <Form.Group controlId='formBasicCheckbox' id='subscribe-group'>
              <Form.Check type='checkbox' label='Subscribe to our newsletter' />
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
