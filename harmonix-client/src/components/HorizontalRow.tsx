import React from 'react'
interface IHorizontalRow {
  color: string
  height: string
}

const HorizontalRow = (props: IHorizontalRow) => {
  const { color, height } = props
  return (
    <div
      style={{ backgroundColor: color, height: height, width: '100%' }}
    ></div>
  )
}

export default HorizontalRow
