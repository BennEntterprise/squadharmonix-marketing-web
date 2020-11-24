import React from 'react'
interface IHorizontalColorBand {
  color?: string
  height: string
  style?: Object
  className?: string
}

const HorizontalColorBand = (props: IHorizontalColorBand) => {
  const { color, height } = props
  return (
    <div
      className={props.className}
      style={{
        backgroundColor: color,
        height: height,
        width: '100%',
        ...props.style,
      }}
    ></div>
  )
}

export default HorizontalColorBand
