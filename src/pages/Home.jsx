import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
    <div className='slider'>
    <img className='slider-img' src='src\assets\Home\1.jpg' alt='' />
    <img className='slider-img' src='src\assets\Home\3.jpg' alt='' />
    <img className='slider-img' src='src\assets\Home\counter-bg.jpg' alt='' />
    <img className='slider-img' src='src\assets\Home\counter-bgabout.jpg' alt='' />
    </div>
    <br/>

    <div>
      
      <div className='trending'>
        <h1><b>TRENDING</b></h1>
      </div>
      <div className='tre'>
      <img className='tre-img' src='src\assets\Home\0C8A2883-scaled-600x899.jpg' alt='Image-col' />
      <img className='tre-img' src='src\assets\Home\0C8A2883-scaled-600x899.jpg' alt='Image-col'/>
      <img className='tre-img' src='src\assets\Home\0C8A2883-scaled-600x899.jpg' alt='Image-col'/>
      </div>
      
      <div className='featured'>
        <h1 className='fet'><b>FEATURED PRODUCTS</b></h1>
      </div>
      
    </div>


    </>
    
  )
}
