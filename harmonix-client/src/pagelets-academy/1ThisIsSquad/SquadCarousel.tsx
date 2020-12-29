import React from 'react'
import { Carousel } from 'react-bootstrap'
const SquadCarousel = () => {
  return (
    <Carousel controls={false} indicators={false} activeIndex={0}>
      <Carousel.Item>
        <div id='carousel-img-1' className='carousel-img'></div>
        <CarouselBannerCopy
          className='d-none d-xl-block'
          heading={'THIS IS SQUAD.'}
          subHeading={
            'an inspiring learning community for dedicated vocalists agess 8-17'
          }
          tidbit={'ONLINE SINCE MAY!'}
          textAlignment='left'
        />
        {/* <Carousel.Caption className='carousel-caption-a'></Carousel.Caption> */}
      </Carousel.Item>
      {/* <Carousel.Item>
        <div id='carousel-img-2' className='carousel-img'></div>
        <CarouselBannerCopy
          heading={'Find your passion.'}
          subHeading='Shape your musical experience with our many A Cappella training programs, from voice to music theory to beatboxing.'
          tidbit='ONLINE SINCE MAY!'
          textAlignment='right'
        />
        <Carousel.Caption className='carousel-caption-a'></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div id='carousel-img-3' className='carousel-img'></div>
        <CarouselBannerCopy
          heading='Share the screen.'
          subHeading='Take part in collaborative projects that bring us back together in an otherwise distant world.'
          tidbit='ONLINE SINCE MAY!'
          textAlignment='left'
        />
        <Carousel.Caption className='carousel-caption-a'></Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  )
}

interface ICarouselBannerCopy {
  className: string
  heading?: string
  subHeading?: string
  tidbit?: string
  textAlignment?: 'left' | 'right' | 'center'
}
const CarouselBannerCopy = (props: ICarouselBannerCopy) => {
  let floatVal: 'left' | 'right' | 'none'
  switch (props.textAlignment) {
    case 'left':
      floatVal = 'left'
      break
    case 'right':
      floatVal = 'right'
      break
    default:
      floatVal = 'none'
      break
  }

  return (
    <div className={`carousel-banner-copy ${props.className}`}>
      <h1 style={{ textAlign: props.textAlignment }}>{props.heading}</h1>
      <h6 style={{ textAlign: props.textAlignment }}>{props.subHeading}</h6>
      {props.tidbit && (
        <p
          style={{
            textAlign: props.textAlignment,
            zIndex: 1,
            float: floatVal,
          }}
        >
          {props.tidbit}
        </p>
      )}
    </div>
  )
}

export default SquadCarousel
