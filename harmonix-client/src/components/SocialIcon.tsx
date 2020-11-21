import React from 'react'
interface ISocialIcon {
  //   url: string
  height: number
  width: number
}
const SocialIcon = (props: ISocialIcon) => {
  return (
    <div>
      <img
        src={require('../images/social-assets/instagram-logo-on-trans.jpg')}
        height={props.height + 'px'}
        width={props.width + 'px'}
        alt='social media icon'
      />
    </div>
  )
}

export default SocialIcon
