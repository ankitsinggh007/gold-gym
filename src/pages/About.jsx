import React from 'react'
import image from "../images/Homeik.jpg"
import image2 from "../images/resource/award.png"
import {FaDumbbell} from "react-icons/fa"
import {GiBiceps} from "react-icons/gi"
import coach1 from "../images/F4F JPEG/Expert-Coaches-1.jpg"
import coach2 from "../images/F4F JPEG/Expert-Coaches-2.jpg"
import coach3 from "../images/F4F JPEG/Expert-Coaches-3.jpg"
import review1 from "../images/F4F JPEG/Review-from-you-1.jpg"
import review2 from "../images/F4F JPEG/Review-from-you-2.jpg"
import review3 from "../images/F4F JPEG/Review-from-you-3.jpg"
import review4 from "../images/F4F JPEG/Review-from-you-4.jpg"
import { NavLink } from 'react-router-dom'
import imag3 from "../images/background/11.jpg"
import Banner from "../components/Banner"
import {SlSocialInstagram,SlSocialFacebook,SlSocialGithub,SlSocialTwitter} from "react-icons/sl"

function About() {
  return (
    <div>
         <div style={{height:"30vw"}}>
        <Banner image={imag3} />
        </div>
        <section className="about-section">

<div className="auto-container">

    <div className="row clearfix">

        


        <div className="content-column col-lg-6 col-md-12 col-sm-12">

            <div className="inner-column">


                <div className="sec-title">

                    <div className="title">LEADING TO FIT LIFE</div>

                    <h2>MAKING YOUR PERSONALITY EFFECTIVE</h2>

                </div>

                <div className="red-text">Your Body Hears Everything That Your Mind Says! So Start Today With The Best Gym Ever.</div>

                <div className="text">Fuel4Fitness provide you with a great space to workout in, whether you
                                    want to burn out some calories or getting trained for something more
                                    specific. Try out the best services of Fue4Fitness. We’re here to help
                                    you!
                </div>


                <div className="featured-block">

                    <div className="block-inner">

                        <span className="icon flaticon-people"><FaDumbbell className="iconDumbel"/></span>

                        <strong>Free Fitness Training</strong>

                        <div className="feature-text">Train with the best experts in bodybuilding field.</div>

                    </div>

                </div>

                


                <div className="featured-block">

                    <div className="block-inner">

                        <span className="icon flaticon-stationary-bike"><GiBiceps className="iconDumbel"/></span>

                        <strong>Cardio and Strength</strong>

                        <div className="feature-text">Our personal trainers will help you find a perfect workout.</div>

                    </div>

                </div>

                

            </div>

        </div>

        


        <div className="image-column col-lg-6 col-md-12 col-sm-12">

            <div className="inner-column wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">

                <div className="award"><img src={image2} alt="" /></div>

                <div className="image">

                    <img src={image}alt="" />

                </div>

            </div>

        </div>

        

    </div>

</div>

</section>
<section class="team-section">

<div class="side-text">Trainer</div>

<div class="auto-container">


    <div class="sec-title light centered">

        <div class="title">Team Staff</div>

        <h2>Team of Expert <br/> Coaches</h2>

    </div>

    <div class="row clearfix">

        


        <div class="team-block col-lg-4 col-md-6 col-sm-12">

            <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">

                <div class="image">

                    <NavLink href="/"><img src={coach1} alt="" /></NavLink>

                </div>

                <div class="content">

                    <div class="title">Crossfit Coach</div>

                    <NavLink to="/"  class="name">MATIE JUNIOR</NavLink>

                </div>

                <div class="shared-boxed">

                    <div class="shared-inner">

                        <span class="share-now fa fa-share-alt"></span>

                        <a href="#"><span ><SlSocialFacebook /></span></a>

                        <a href="#"><span ><SlSocialTwitter/></span></a>

                        <a href="#"><span ><SlSocialInstagram/></span></a>


                    </div>

                </div>

            </div>

        </div>

        


        <div class="team-block col-lg-4 col-md-6 col-sm-12">

            <div class="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">

                <div class="image">

                    <NavLink href="/"><img src={coach2} alt="" /></NavLink>

                </div>

                <div class="content">

                    <div class="title">Bodybuilding Coach</div>

                    <a href="team.html" class="name">Steve Cross</a>

                </div>

                <div class="shared-boxed">

                <div class="shared-inner">

<span class="share-now fa fa-share-alt"></span>

<a href="#"><span ><SlSocialFacebook /></span></a>

<a href="#"><span ><SlSocialTwitter/></span></a>

<a href="#"><span ><SlSocialInstagram/></span></a>


</div>

                </div>

            </div>

        </div>

        


        <div class="team-block col-lg-4 col-md-6 col-sm-12">

            <div class="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">

                <div class="image">

                    <NavLink href="/"><img src={coach3} alt="" /></NavLink>

                </div>

                <div class="content">

                    <div class="title">Cardio & Conditioning</div>

                    <a href="team.html" class="name">MAdona FRON</a>

                </div>

                <div class="shared-boxed">

                <div class="shared-inner">

<span class="share-now fa fa-share-alt"></span>

<a href="#"><span ><SlSocialFacebook /></span></a>

<a href="#"><span ><SlSocialTwitter/></span></a>

<a href="#"><span ><SlSocialInstagram/></span></a>


</div>

                </div>

            </div>

        </div>

        

    </div>

</div>

</section>
<section class="testimonials-thumbs-carousel">

<div class="auto-container">

    


    <div id="carousel-thumb" class="carousel slide carousel-thumbnails" data-ride="carousel">

        <div class="row clearfix">

        

            <div class="carousel-column col-lg-6 col-md-12 col-sm-12">


                <div class="sec-title">

                    <div class="title">TESTIMONIAL</div>

                    <h2>REVIEWS OF OUR <br/>  MEMBERS</h2>

                </div>


                <div class="carousel-inner" role="listbox">

                

                    <div class="carousel-item active">

                        <div class="testimonial-block">

                            <div class="inner-box">

                                <div class="title">Nutritionist</div>

                                <h4>Dipika Verma</h4>

                                <div class="rating">

                                    <span class="fa fa-star"></span>

                                    <span class="fa fa-star"></span>

                                    <span class="fa fa-star"></span>

                                    <span class="fa fa-star"></span>

                                    <span class="fa fa-star"></span>

                                </div>

                                <div class="quote-icon flaticon-right-quote"></div>

                                <div class="text">Feels like your own personal workout place. This place has great energy
                                    and vibe. And cheers to the trainer for encouraging and guiding each
                                    member with all patience. Glad I joined this Gym.
                                </div>

                            </div>

                        </div>

                    </div>

                    

                    <div class="carousel-item">

                        <div class="testimonial-block">

                            <div class="inner-box">

                                <div class="title">Nutritionist</div>

                                <h4>Shivani Bansa</h4>

                                <div class="rating">

                                    <span class="fa fa-star"></span>

                                    <span class="fa fa-star"></span>

                                    <span class="fa fa-star"></span>

                                    <span class="fa fa-star"></span>

                                    <span class="fa fa-star"></span>

                                </div>

                                <div class="quote-icon flaticon-right-quote"></div>

                                <div class="text">I love this place. I highly recommend this place to anyone who wants to get in shape. The trainers are really awesome and helpful, they make you feel really comfortable. The 45 min training goes super fast and you really enjoy doing it. Everyday is a new training, so it is never boring.
                                </div>

                            </div>

                        </div>

                    </div>

                    

                    <div class="carousel-item">

                        <div class="testimonial-block">

                            <div class="inner-box">

                                <div class="title">Nutritionist</div>

                                <h4>Mayank Mishra</h4>

                                <div class="rating">

                                    <span class="fa fa-star"></span>

                                    <span class="fa fa-star"></span>

                                    <span class="fa fa-star"></span>

                                    <span class="fa fa-star"></span>

                                    <span class="fa fa-star"></span>

                                </div>

                                <div class="quote-icon flaticon-right-quote"></div>

                                <div class="text">Fuel4Fitness has been awesome to me. Their trainers are exceptional,
                                    the overall vibe is great and I have had nothing but good experiences. I
                                    definitely recommend them to my friends and family.
                                </div>

                            </div>

                        </div>

                    </div>

                    

                    <div class="carousel-item">

                        <div class="testimonial-block">

                            <div class="inner-box">

                                <div class="title">Nutritionist</div>

                                <h4>Neetu Bisht</h4>

                                <div class="rating">

                                    <span class="fa fa-star"></span>

                                    <span class="fa fa-star"></span>

                                    <span class="fa fa-star"></span>

                                    <span class="fa fa-star"></span>

                                    <span class="fa fa-star"></span>

                                </div>

                                <div class="quote-icon flaticon-right-quote"></div>

                                <div class="text">Fuel4Fitness fitness is hands-down my favourite gym. The workouts are
                                always new and engaging and the instructors care about not only getting
                                you to sweat, but also making sure you are staying safe.</div>

                            </div>

                        </div>

                    </div>

                    

                </div>


                










                

            </div>

            

            <div class="pagers-column col-lg-6 col-md-12 col-sm-12">


                <ol class="carousel-indicators">

                    <li data-target="#carousel-thumb" data-slide-to="0" class="active"> <div class="image"><img src={review1} alt=""/></div></li>

                    <li data-target="#carousel-thumb" data-slide-to="1"><div class="image"><img src={review2} alt=""/></div></li>

                    <li data-target="#carousel-thumb" data-slide-to="2"><div class="image"><img src={review3} alt=""/></div></li>

                    <li data-target="#carousel-thumb" data-slide-to="3"><div class="image"><img src={review4} alt=""/></div></li>

                </ol>

            </div>

            

        </div>

    </div>

        

</div>

</section>

    </div>
  )
}

export default About