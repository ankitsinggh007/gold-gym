//importing essesntial libraries
import React,{useState,createContext} from 'react'
import {Box} from '@mui/material'
import { Route, Routes } from 'react-router-dom';
import { getDocs } from 'firebase/firestore';
import DataBase from "./components/Firbase"
import { collection, addDoc } from "firebase/firestore";
import { query, where, getDoc } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import Exercise from './pages/Exercise';
import About from './pages/About';
import Contact from './pages/Contact';
//imported css file
import './App.css'
import Sponser from "./components/Sponser";

//importing Components and pages-components
import ExerciseDetails from './pages/ExerciseDetails'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
export const User = createContext({});

//functional code begins from here
function App() {
  const [Data, setData] = useState();
  const Navigate = useNavigate();
  const [Creadential, setCreadential] = useState({ fname: "", lname: "", email: "", Role: "", Password: "" });
  const [LoggedInUserData, setLoggedInUserData] = useState({ id: "", firstName: "", lastName: "", email: "", Role: "", isAuthrized: false,Cart: [],acces:[],Donated:[] ,Request:[]});
  const [Message, setMessage] = useState("");


  const auth = getAuth();

  //  Fetch Data
  const FetchData = async (email) => {
    console.log("hi")
    console.log(email)
    const citiesRef = collection(DataBase, "User");
    const q = query(citiesRef, where("email", "==", `${email}`));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setLoggedInUserData({ ...LoggedInUserData, ...doc.data(), isAuthrized: true, id: doc.id });
      Navigate(`/`)
  });
  }

  // Creat user in DataBase
  const CreateUserInDataBase = async () => {
    const DocRef = await addDoc(collection(DataBase, "User"), {
      email: Creadential.email,
      firstName: Creadential.fname,
      lastName: Creadential.lname,
      Role: Creadential.Role,
      Cart:[],
      acces:[]
      ,
      Donated:[] ,
      Request:[]
      
    });
    Navigate("/login")
  }

  // Create User
  const createUser = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        CreateUserInDataBase();

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setCreadential({ ...Creadential, message: errorCode.split("/")[1] })
        alert(`${errorCode.split("/")[1]}`)


      });
  }
  // Login User
  const verifyCredential = async () => {
    const res = await signInWithEmailAndPassword(auth, Creadential.email, Creadential.Password)
      .then((userCredential) => {
        const user = userCredential.user;
        FetchData(user.email);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setCreadential({ ...Creadential, message: errorCode.split("/")[1] })
        alert(`${errorCode.split("/")[1]}`)

      });

  }
  console.log(LoggedInUserData);
  return (
    <Box width='400px' sx={{ width:{ xl: '1488px' }}} m="auto">
      <User.Provider value={{ Creadential, setCreadential, createUser, verifyCredential, LoggedInUserData, setLoggedInUserData }}>

      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact />}/>
        <Route path='/exercise/:id' element = {<ExerciseDetails />} /> 
      </Routes>
      <Sponser/>
      <Footer />
      </User.Provider>

    </Box>
  )
}

export default App

// important topics to be noted
// 1) <Navbar/><Home/><ExerciseDetail /> these are self closing components
// 2) As per the above we are using Router in our App component so we need to wrap our App to with BrowserRouter 
// 3) line-12 : {path='/exercise/:id'} here id is dynamic that means id might be 1,2,3,4...n
// 4) line-18 : <Box width='400px' sx={{ width:{ xl: '1488px' }}} m="auto"> Xl means 'Extra-large' we are making page responsive on extra large page that is on 1488px screen size && m for 'margin'='auto' xl acts as grid in mui