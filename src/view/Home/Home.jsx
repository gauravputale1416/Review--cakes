import React, { useState } from 'react'
import "./Home.css"

import Blackforest from './2.webp'
import two from './1.webp'
import three from './3.webp'
import four from './4.webp'
import cool from './cool.png'
import six from './6.webp'
import sevan from './7.webp'
import eight from './8.webp'



function Home() {
  const[img , setimg ]=useState("PICK THE CAKE")  
  const[sliderValue , setSliderValue]=useState(50)
  return (
   
   <div className="container min-h-screen w-full  relative">
    {/* Tropical Dusk Glow Background */}
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 100%, rgba(255, 99, 71, 0.6) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(255, 215, 0, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(60, 179, 113, 0.3) 0%, transparent 80%)
        `,
      }}
    />
<div className='head'> 
<h1 className='heading'>Cake Shop </h1>
</div>

<div className='big'>
  <div className='one '><img onClick={()=>{setimg(<img src={Blackforest} />)}} className='cake1' src={Blackforest} /></div>
  <div className='one '><img onClick={()=>{setimg(<img src={eight} />)}} className='cake1' src={eight} /></div>
  <div className='one '><img onClick={()=>{setimg(<img src={two} />)}} className='cake1' src={two} /></div>
  <div className='one '><img onClick={()=>{setimg(<img src={three} />)}} className='cake1' src={three} /></div>
  

  <div className='one '><img  onClick={()=>{setimg(<img src={six } />)}} className='picture' src={six} /> </div>
<div className='one '><img onClick={()=>{setimg(<img src={four} />)}} className='cake1' src={four} /> </div>
  
   <div className='one '><img onClick={()=>{setimg(<img src={sevan} />)}} className='cake1' src={sevan} /></div>
   
   
</div>



<div className='show'>
  <div className='pic' style={{ transform: `scale(${sliderValue / 100})` }}>{img}</div>
  <div>Zoom<input type='range' min="0" max="100" className='slider' onChange={(e) => { setSliderValue(e.target.value); }} value={sliderValue} /> {sliderValue}</div>
</div>

  </div>
  )
}

export default Home
