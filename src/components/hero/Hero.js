// rafce
import React from 'react'
import "./Hero.scss"

const Hero = ({title, price, bg, url,}) => {
  return (
    <div style={{background: `url(${url}) no-repeat center/cover`}} className='hero'>
        <h1>{title}</h1>
        <p>{price}</p>
        <img src={url} width={1280} alt="" />
    </div>
  )
}

export default Hero