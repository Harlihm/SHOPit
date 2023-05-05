import { useState } from 'react'
import {HiArrowRight,HiArrowLeft} from 'react-icons/hi'




const Banner = () => {
const [currentSlide ,setCurrentSlide]=useState(0);

  const data =[
    "https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81d5OrWJAkL._SX3000_.jpg",

  ]

  const prevSlide=()=>{
setCurrentSlide(currentSlide===0?3: (prev)=>prev-1)
  }
  const nextSlide=()=>{
    setCurrentSlide(currentSlide===3?0: (prev)=>prev+1)
      }

      // console.log(currentSlide);

  return (
    <div className="banner-wrapper">
      <div className='banner'> 
        <div style={{transform: `translateX(-${currentSlide *100}vw)`}} className="banners">
          <img src={data[0]} alt="imgone"  loading="priority"/>
          <img src={data[1]} alt="imgone" />
          <img src={data[2]} alt="imgone"  />


        </div>
        <div className="banner-arrow">
 <div onClick={prevSlide} className="left-arrow arrow">
<HiArrowLeft/>
 </div>
 <div onClick={nextSlide} className="right-arrow arrow">
  <HiArrowRight/>
 </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
