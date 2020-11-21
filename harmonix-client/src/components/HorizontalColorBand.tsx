import React from 'react'
interface IHorizontalColorBand {
  color: string
  height: string
}

const HorizontalColorBand = (props: IHorizontalColorBand) => {
  const { color, height } = props
  return (
    <div
      style={{ backgroundColor: color, height: height, width: '100%' }}
    ></div>
  )
}

export default HorizontalColorBand
