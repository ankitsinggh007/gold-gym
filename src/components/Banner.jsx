import React from 'react'
import "./Banner.css"
function Banner({image}) {
  return (
    <div className='Backgrond' style={{backgroundImage:`url(${image})`,height:"30vw"}}></div>
  )
}

export default Banner