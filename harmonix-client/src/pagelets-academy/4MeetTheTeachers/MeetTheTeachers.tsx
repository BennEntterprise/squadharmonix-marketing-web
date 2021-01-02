import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HorizontalColorBand from '../../components/HorizontalColorBand'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import './meettheteachers.css'

import Annie from '../../images/square headshots/teachers/Teachers - Annie.jpg'
import Christina from '../../images/square headshots/teachers/Teachers - Christina.jpg'
import Johanna from '../../images/square headshots/teachers/Teachers - Johanna.jpg'
import Laura from '../../images/square headshots/teachers/Teachers - Laura.jpg'
import Matt from '../../images/square headshots/teachers/Teachers - Matt.jpg'
import Parker from '../../images/square headshots/teachers/Teachers - Parker.jpg'

import teacherData, { ITeacherProfile } from './teachers'
import teachersData from './teachers'

const TeacherCard = (props: ITeacherProfile) => {
  return (
    <div className='teacher-profile'>
      <HorizontalColorBand
        className={`mb-4 bg-${props.bannerColor}`}
        height='30px'
        color={`--var(${props.bannerColor})`}
        style={{ width: '100%', marginBottom: '50px' }}
      />
      <img
        src={props.photo}
        className='teacher-photo-l'
        alt={`${props.name} profile photo`}
      />
      <p className='bio-text font-p liberation-sans'>
        <strong>{props.name}</strong> (<em>{props.title}</em>)
        <span
          className='bio-slug liberation-sans font-p'
          dangerouslySetInnerHTML={{ __html: props.bio }}
        ></span>
      </p>
    </div>
  )
}

function MeetTheTeachers() {
  // Identify Screen Size
  const screenIsSmallerThan992 = useMediaQuery('(max-width:992px)')

  // When Needed, use helper function to reorder teacher data.
  let arrangedTeachers

  const colorOrderLG = [
    'flower',
    'tortise',
    'lightpurple',
    'tortise',
    'lightpurple',
    'flower',
  ]
  const colorOrderSM = [
    'flower',
    'tortise',
    'lightpurple',
    'tortise',
    'lightpurple',
    'flower',
  ]

  // Describes the Order of the Data
  let staticOrder = ['Laura', 'Matt', 'Annie', 'Parker', 'Johanna', 'Christina']
  let takeFirstLG = [0, 1, 2]
  let takeSecondLG = [3, 4, 5]
  let takeFirstSM = [0, 3, 1]
  let takeSecondSM = [4, 2, 5]

  return (
    <Container fluid id='meettheteachers'>
      <Row>
        <Col xs='12' sm='12' md='12' lg='6' xl='6'>
          <div className='teachers-container'>
            {screenIsSmallerThan992
              ? takeFirstSM.map((id: number, i: number) => (
                  <TeacherCard
                    name={teacherData[id].name}
                    title={teacherData[id].title}
                    bio={teacherData[id].bio}
                    photo={teacherData[id].photo}
                    bannerColor={colorOrderSM[i]}
                  />
                ))
              : takeFirstLG.map((id: number, i: number) => (
                  <TeacherCard
                    name={teacherData[id].name}
                    title={teacherData[id].title}
                    bio={teacherData[id].bio}
                    photo={teacherData[id].photo}
                    bannerColor={colorOrderLG[i]}
                  />
                ))}
          </div>
        </Col>
        <Col xs='12' sm='12' md='12' lg='6' xl='6'>
          <div className='teachers-container'>
            {screenIsSmallerThan992
              ? takeSecondSM.map((id: number, i: number) => (
                  <TeacherCard
                    name={teacherData[id].name}
                    title={teacherData[id].title}
                    bio={teacherData[id].bio}
                    photo={teacherData[id].photo}
                    bannerColor={colorOrderSM[i + 3]}
                  />
                ))
              : takeSecondLG.map((id: number, i: number) => (
                  <TeacherCard
                    name={teacherData[id].name}
                    title={teacherData[id].title}
                    bio={teacherData[id].bio}
                    photo={teacherData[id].photo}
                    bannerColor={colorOrderLG[i + 3]}
                  />
                ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default MeetTheTeachers
