import React from 'react'
import './meetthesquad.css'

import HorizontalColorBand from '../../components/HorizontalColorBand'
import { Container } from 'react-bootstrap'
import { magenta, purple, teal } from '../../constants/Colors'

const MeetTheSquad = () => {
  return (
    <Container id='meetthesquad'>
      <h1>Meet The Squad</h1>
      <HorizontalColorBand color={magenta} height={'50px'} />
      <h3>Performance Squad</h3>
      <HorizontalColorBand color={teal} height={'50px'} />
      <h3>Senior Squad</h3>
      <HorizontalColorBand color={purple} height={'50px'} />
      <h3>Junior Squad</h3>
    </Container>
  )
}
export default MeetTheSquad
