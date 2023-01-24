import React from 'react'
import sponser1 from "../images/clients/1.png"
import sponser2 from "../images/clients/2.png"
import sponser3 from "../images/clients/3.png"
import sponser4 from "../images/clients/4.png"
import sponser5 from "../images/clients/5.png"
function sponser() {
  return (
    <div>
         <section class="clients-section style-four">

<div class="auto-container">

    

    <div class="sponsors-outer" style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                 <div style={{textAlign:"center",fontSize:"1.5rem",fontWeight:"600",marginBottom:"50px"}}>  Our Sponser's</div>
        <ul class="sponsors-carousel owl-carousel owl-theme" style={{display:"flex",justifyContent:"space-between"}}>

            <li class="slide-item"><figure class="image-box"><a href="#"><img src={sponser1} alt=""/></a></figure></li>

            <li class="slide-item"><figure class="image-box"><a href="#"><img src={sponser2} alt=""/></a></figure></li>

            <li class="slide-item"><figure class="image-box"><a href="#"><img src={sponser3} alt=""/></a></figure></li>

            <li class="slide-item"><figure class="image-box"><a href="#"><img src={sponser4} alt=""/></a></figure></li>

            <li class="slide-item"><figure class="image-box"><a href="#"><img src={sponser5} alt=""/></a></figure></li>

            <li class="slide-item"><figure class="image-box"><a href="#"><img src={sponser1} alt=""/></a></figure></li>

            <li class="slide-item"><figure class="image-box"><a href="#"><img src={sponser2} alt=""/></a></figure></li>

            <li class="slide-item"><figure class="image-box"><a href="#"><img src={sponser3} alt=""/></a></figure></li>

        </ul>

    </div>

    

</div>

</section>


    </div>
  )
}

export default sponser