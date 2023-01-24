import React,{useState, useEffect} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'; 
import { styled } from '@mui/system'
import {fetchData, exerciseOptions} from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'
import image1 from "../images/main-slider/image-1.jpg"
import image2 from "../images/main-slider/image-2.jpg"
import image3 from "../images/main-slider/image-3.jpg"
import image4 from "../images/main-slider/image-4.jpg"
import Slider from './Slider';
import feature1 from "../images/resource/feature-1.jpg"
import feature2 from "../images/resource/feature-2.jpg"
import feature3 from "../images/resource/feature-3.jpg"
import feature4 from "../images/resource/feature-4.jpg"
import feature5 from "../images/resource/feature-5.jpg"
import feature6 from "../images/resource/feature-6.jpg"
import {CgGym} from "react-icons/cg"
import {MdOutlineArchitecture} from "react-icons/md"
import {TbFileCertificate} from "react-icons/tb"
import { NavLink } from 'react-router-dom';
const MuiStack = styled(Stack)({
  marginTop:'37px',
  alignItems:'center',
  justifyContent:'center',
  padding:'20px'
})
const TypoText = styled(Typography)({
  fontWeight:'700',
  marginBottom:'50px',
  textAlign:'center'
})

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  const data=[image1, image2,image3, image4];

  useEffect(()=>{
    const fetchExercisesData = async () =>{
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartData]);
      console.log(bodyParts);
    }
    fetchExercisesData();
  },[])
  const handleSearch = async () => {
      if(search){
        const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    
        const searchExercises = exerciseData.filter(
          (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.type.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.difficulty.toLowerCase().includes(search)
        )
        setSearch('');
        setExercises(searchExercises)
        console.log(searchExercises);
        // console.log(exerciseData);
      }
  }
  return (
    <div>
      <div className="Banner2">
      <Slider Category="image" data={data}/>
      </div>
      <section class="services-section boxr">

<div class="side-text">GYM</div>

<div class="auto-container">

  <div class="row clearfix">
    <div class="service-block col-lg-4 col-md-6 col-sm-12">

      <div class="inner-box">

        <div class="icon-box">

          <span class="icon flaticon-tools-and-utensils"><CgGym/></span>

        </div>

        <h4><NavLink to="/">Modern Equipments</NavLink></h4>

        <div class="text">  Gold Gym have the
                  best gym equipment
                  that helps you in
                  balancing your body
                  much more effectively
                  and efficiently.
        </div>

        <span class="big-icon flaticon-tools-and-utensils"></span>

      </div>

    </div>

    


    <div class="service-block style-two col-lg-4 col-md-6 col-sm-12">

      <div class="inner-box">

        <div class="icon-box">

          <span class="icon flaticon-sports"><MdOutlineArchitecture/></span>

        </div>

        <h4><NavLink to="/">Premium Architecture</NavLink></h4>

        <div class="text">Gold Gym is the gym
                  that you will love. We
                  have the premium
                  infrastructure that will
                  provide you full comfort
                  while working out.</div>

        <span class="big-icon flaticon-sports"></span>

      </div>

    </div>

    


    <div class="service-block style-three col-lg-4 col-md-6 col-sm-12">

      <div class="inner-box">

        <div class="icon-box">

          <span class="icon flaticon-plan"><TbFileCertificate/></span>

        </div>

        <h4><NavLink to="/">Certified Trainers</NavLink></h4>

        <div class="text">Gold Gym have the
                  best gym trainers who
                  are certified in the field
                  of gym training & have
                  years of experience
                  with best results.</div>

        <span class="big-icon flaticon-plan"></span>

      </div>

    </div>

    

  </div>

</div>

</section>
	<section class="classess-page-section">
		<div class="auto-container">
			<div class="row clearfix">
				
				<div class="classess-block col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box">
						<div class="image">
							<NavLink to="/"><img src={feature1} alt="" /></NavLink>
							<div class="icon-box">
								<span class="icon flaticon-tools-and-utensils-1"></span>
							</div>
						</div>
						<div class="lower-content">
							<div class="title">GYM</div>
							<h4><NavLink to="/">Psycho Training</NavLink></h4>
							<div class="text">Winning means you’re willing to go longer, work harder for more.</div>
							<NavLink class="read-more" to="/">Read More</NavLink>
						</div>
					</div>
				</div>
				
				<div class="classess-block col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box">
						<div class="image">
							<a to="/"><img src={feature2} alt="" /></a>
							<div class="icon-box">
								<span class="icon flaticon-muscle"></span>
							</div>
						</div>
						<div class="lower-content">
							<div class="title">CARDIO</div>
							<h4><a href="/">Self Defence</a></h4>
							<div class="text">Don’t practice until you get it right practice until can’t wrong</div>
							<a class="read-more" href="/">Read More</a>
						</div>
					</div>
				</div>
				
				<div class="classess-block col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box">
						<div class="image">
							<a href="/"><img src={feature3} alt="" /></a>
							<div class="icon-box">
								<span class="icon flaticon-people"></span>
							</div>
						</div>
						<div class="lower-content">
							<div class="title">Fitness</div>
							<h4><a href="/">FITNESS FOR MAN</a></h4>
							<div class="text">Winning means you’re willing to go longer, work harder for more.</div>
							<a class="read-more" href="/">Read More</a>
						</div>
					</div>
				</div>
				
				<div class="classess-block col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box">
						<div class="image">
							<a href="/"><img src={feature5} alt="" /></a>
							<div class="icon-box">
								<span class="icon flaticon-fitness"></span>
							</div>
						</div>
						<div class="lower-content">
							<div class="title">STRENGTH</div>
							<h4><a href="/">Strength Training</a></h4>
							<div class="text">Winning means you’re willing to go longer, work harder for more.</div>
							<a class="read-more" href="/">Read More</a>
						</div>
					</div>
				</div>
				
				<div class="classess-block col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box">
						<div class="image">
							<a href="/"><img src={feature5} alt="" /></a>
							<div class="icon-box">
								<span class="icon flaticon-machine"></span>
							</div>
						</div>
						<div class="lower-content">
							<div class="title">CARDIO</div>
							<h4><a href="/">Cardio For Man</a></h4>
							<div class="text">Don’t practice until you get it right practice until can’t wrong</div>
							<a class="read-more" href="/">Read More</a>
						</div>
					</div>
				</div>
				
				<div class="classess-block col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box">
						<div class="image">
							<a href="/"><img src={feature6} alt="" /></a>
							<div class="icon-box">
								<span class="icon flaticon-gym"></span>
							</div>
						</div>
						<div class="lower-content">
							<div class="title">Nutrition</div>
							<h4><a href="/">Advance GYM</a></h4>
							<div class="text">Winning means you’re willing to go longer, work harder for more.</div>
							<a class="read-more" href="/">Read More</a>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
	
    </div>
  )
}

export default SearchExercises
