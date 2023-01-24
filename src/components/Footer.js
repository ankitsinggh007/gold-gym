import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Logo from '../assets/images/Logo-1.png'
import { NavLink } from 'react-router-dom'
import image from "../images/background/Home-page-footer.jpg"
const Footer = () => {
  return (
    <footer class="main-footer"  style={style}>

		<div class="auto-container">

            <div class="widgets-section">

            	<div class="row clearfix ">

                    <div class="big-column col-lg-12 col-md-12 col-sm-12">

                        <div class="row clearfix">

                            <div class="footer-column col-lg-4 col-md-6 col-sm-4">

                                <div class="footer-widget logo-widget">

									<div class="logo">

                                    	<a href="/index.html"><img src="images/F4F-Logo/Logo__3.png" alt="" /></a>

                                    </div>

									<div class="text">Gym Expert is a champ in providing its users with absolutely everything a fitness or gym site needs. consectetur adipiscing elit. Suspendisse interdum nulla eu posuere scelerisque.</div>

									<div class="social-links">

										<span>Follow on Socials </span>

										<a href="https://www.facebook.com" class="fa fa-facebook"></a>


										<a href="https://www.instagram.com" class="fa fa-instagram"></a>


									</div>

								</div>

							</div>
							<div class="footer-column col-lg-4 col-md-3 col-sm-4">
								<div class="footer-widget links-widget">

									<h4>Our Services</h4>

									<ul class="list-link">

										<li><NavLink to="/" >HOME</NavLink></li>

										<li><NavLink to="/about">ABOUT</NavLink></li>



										<li><NavLink to="/contact">CONTACT US</NavLink></li>

									
									</ul>

								</div>

							</div>
                            <div class="footer-column col-lg-4 col-md-3 col-sm-4">

                                <div class="footer-widget timing-widget">

									<h4>Working Hours</h4>

									<ul>

										<li>Monday – Friday:<span>07:00 – 21:00</span></li>

										<li>Saturday:<span>07:00 – 16:00</span></li>

										<li>Sunday Closed</li>

									</ul>

								</div>

							</div>
						</div>
				
						</div>

					</div>

					

			

			</div>

		


			<div class="footer-bottom">

				<div class="copyright">Copyright 2022-2023 | Fuel4Fitness | Designed & Developed By Eaglematrix Pvt Ltd</div>

			</div>

		

		</div>

	</footer>

	


  )
}
const style={
  backgroundImage:`url(${image})`,
}

export default Footer
