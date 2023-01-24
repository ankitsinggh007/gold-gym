import React,{useContext,useEffect,useState} from 'react'
import { Navigate, useNavigate } from "react-router-dom"
import {doc,getDoc,updateDoc} from "firebase/firestore"
import Swal from "sweetalert2"
import Database from "../components/Firbase"

import image from "../images/resource/info.jpg"
import Banner from "../components/Banner"
import imag3 from "../images/background/5.jpg"
import {User} from "../App"
function Contact() {
  const {LoggedInUserData, setLoggedInUserData,createUser}=useContext(User);
   
  const Navigate=useNavigate()
  const [Data, setData] = useState({
    email:"",
    phone:"",
    name:"",
    message:""
  });
  useEffect(() => {
    if(LoggedInUserData?.isAuthrized){
      setData({
        email:LoggedInUserData.email,
        phone:"",
        name:LoggedInUserData.firstName,
        message:"",
        Subject:"",
      })
    }
    
  }, [])
  const sendData=async(e)=>{
    e.preventDefault();
    if(Data.name!=="" && Data.email!=="" && Data.phone!=="" && Data.message!==""&& Data.Subject!==""){
        
    const washingtonRef = doc(Database, "Feedback","Messages");
    const d=await getDoc(washingtonRef)
    const {message}=d.data(); 
    console.log(message)
    message.push(Data);
    console.log(message)

    await updateDoc(washingtonRef, {
        message
        });
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: `We get your message`,
          showConfirmButton: true,
        })
        Navigate("/")
    }
else{
    await Swal.fire({
        position: 'center',
        icon: 'error',
        title: `please fill all the fields`,
        showConfirmButton: true,
      })
}
        
    //     setLoggedInUserData({...LoggedInUserData,Cart:[]})
    }
console.log(Data)
  
  return (
    <div>
        <div style={{height:"30vw"}}>
        <Banner image={imag3} />
        </div>
        <section className="contact-form-section">

<div className="auto-container">



    <div className="row clearfix">

    


        <div className="title-column col-lg-4 col-md-12 col-sm-12">

            <div className="inner-column">


                <div className="sec-title">

                    <div className="title">Contact Now</div>

                    <h2>Ask Us <br/> Anything</h2>

                </div>

                <div className="text">Fuel4Fitness is well known for making your life more fit and balanced. Get in touch and start your new healthy journey.</div>

            </div>

        </div>

        


        <div className="form-column col-lg-8 col-md-12 col-sm-12">

            <div className="inner-column">

                


                <div className="default-form style-two contact-form">

                    


                    <form method="post" action="https://expert-themes.com/html/gym/sendemail.php" id="contact-form">

                        <div className="row clearfix">

                        

                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">

                                <input type="text" name="username"
                                defaultValue={Data.name}
                                required
                                value={Data.name}
                                onChange={(e)=>setData({...Data,name:e.target.value})}
                                placeholder="Name" />

                            </div>

                            

                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">

                                <input type="email" name="email" placeholder="Email" 
                                defaultValue={Data.email}
                                required
                                value={Data.email}
                                onChange={(e)=>setData({...Data,email:e.target.value})}
                                />

                            </div>

                            

                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">

                                <input type="text" name="subject" placeholder="Subject"   defaultValue={Data.Subject}
                                required
                                value={Data.Subject}
                                onChange={(e)=>setData({...Data,Subject:e.target.value})}/>

                            </div>

                            

                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">

                                <input type="number"  name="phone" placeholder="Phone"  defaultValue={Data.phone}
        required
          value={Data.phone}
        onChange={(e)=>setData({...Data,phone:e.target.value})}/>

                            </div>

                            

                            <div className="form-group col-lg-12 col-md-12 col-sm-12">

                                <textarea name="message" 
                                defaultValue={Data.message}
                                required
                                value={Data.message}
                                onChange={(e)=>setData({...Data,message:e.target.value})}
                                placeholder="Your Message write hear"></textarea>

                            </div>

                            

                            <div className="form-group clearfix col-lg-12 col-md-12 col-sm-12">

                                <div className="btn-three-outer"><button className="theme-btn btn-style-three" type="submit" onClick={sendData} name="submit-form"><span className="txt">SEND MESSAGE</span></button></div>

                            </div>

                            

                        </div>

                    </form>

                    


                </div>

                

            </div>

        </div>

        

    </div>

</div>

</section>
<section className="contact-map-section">


		<div className="map-boxed">


			<div className="map-outer">

				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25216.765666144616!2d144.9456413371385!3d-37.8112271492458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b8c21cb29b%3A0x1c045678462e3510!2sMelbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2s!4v1598513355690!5m2!1sen!2s" height="500" ></iframe>

			</div>

		</div>

		

		<div className="auto-container">

			<div className="map-info-boxed">

				<div className="clearfix">


					<div className="image-column col-lg-5 col-md-12 col-sm-12">

						<div className="image">

							<img src={image} alt="" />

						</div>

					</div>


					<div className="info-column col-lg-7 col-md-12 col-sm-12">

						<div className="inner-column">

							<ul>

								<li>

									<span className="icon flaticon-location-2"></span>

									<strong>Location</strong>

									27 Division St, New York, USA

								</li>

								<li>

									<span className="icon flaticon-call-2"></span>

									<strong>Contact</strong>

									<a href="tel:+1-044-123-456-789">+1 (044) 123 456 789</a>

								</li>

								<li>

									<span className="icon flaticon-email-1"></span>

									<strong>Email</strong>

									<a href="mailto:info@example.com">info@example.com</a>

								</li>

							</ul>

						</div>

					</div>

				</div>

			</div>

		</div>

		

	</section>



    </div>
  )
}

export default Contact