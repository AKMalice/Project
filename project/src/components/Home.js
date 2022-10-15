import React from 'react'
import Car from './Carousel'
import mysvg from './images/layered-waves-haikei2.svg'
import mysvg2 from './images/wave-haikei1.svg'
import WithHeaderAndQuoteExample from './Card'

function Home() {
  return (
    <>
     <div style={{ backgroundImage: `url(${mysvg})` , backgroundRepeat:"no-repeat", height:700}}>
     
    
    <h2>‎ </h2>
   <Car/>
   <p style={{color:'white',marginTop:'50px'}}>LUNA is a one stop solution to your marketing needs providing real-time Analytics Solutions and Automated emailing</p>
   </div>

   <div style={{ backgroundImage: `url(${mysvg2})` , backgroundRepeat:"no-repeat", height:500}}>
  
      <WithHeaderAndQuoteExample style={{margin:'auto',width:50}}/>
   </div>
   
   </>
  )
}

export default Home
