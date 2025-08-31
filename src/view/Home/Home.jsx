import React from 'react'
import "./Home.css"
function Home() {
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



  </div>
  )
}

export default Home
