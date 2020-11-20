import React from 'react'
import './css/meetthesquad.css'

import HorizontalRow from '../components/HorizontalRow'
import { Container } from 'react-bootstrap'
import { magenta, purple, teal } from '../constants/Colors'

const MeetTheSquad = () => {
  return (
    <Container id='meetthesquad'>
      <h1>Meet The Squad</h1>
      <HorizontalRow color={magenta} height={'50px'} />
      <h3>Performance Squad</h3>
      <HorizontalRow color={teal} height={'50px'} />
      <h3>Senior Squad</h3>
      <HorizontalRow color={purple} height={'50px'} />
      <h3>Junior Squad</h3>
    </Container>
  )
}
export default MeetTheSquad
