import React from 'react'
import Eighths from '../../images/icons/eighth note circle clip art.png'
import styles from './LessonItem.module.css'

interface ILessonItem {
  text: string
}

const LessonItem = (props: ILessonItem) => {
  return (
    <div className={styles.lessonItem}>
      <img src={Eighths} alt='two eigth notes' />
      <h6 style={{ display: 'inline' }}>
        <strong>{props.text}</strong>
      </h6>
    </div>
  )
}

export default LessonItem
