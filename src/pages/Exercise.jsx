import React from 'react'
import Exercises from '../components/Exercises'
import { useState } from 'react';
import imag3 from "../images/background/2.jpg"
import Banner from "../components/Banner"
function Exercise() {
    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);
    return (
    <div>
       <div style={{height:"30vw"}}>
        <Banner image={imag3} />
        </div>
          <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </div>
  )
}

export default Exercise