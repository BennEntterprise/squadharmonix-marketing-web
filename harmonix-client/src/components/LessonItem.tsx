import React from 'react'
import Eighths from '../images/8ths.jpg'

interface ILessonItem {
  text: string
}

const LessonItem = (props: ILessonItem) => {
  return (
    <div className='lesson-item'>
      <img src={Eighths} alt='two eigth notes' height='15px' width='15px' />
      <h6>
        <strong>{props.text}</strong>
      </h6>
    </div>
  )
}

export default LessonItem
