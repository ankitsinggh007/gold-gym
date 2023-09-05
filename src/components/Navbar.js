import { Stack } from '@mui/material'
import React,{useState,useContext} from 'react'
import { styled } from '@mui/system'
import { NavLink,Link } from "react-router-dom";
import { User } from "../App";
import {Avatar} from '@mui/material';
import { pink } from '@mui/material/colors';
import {Button} from 'reactstrap';
import "./Navbar.css";
//logo imported
import Logo from '../assets/images/Logo.png'

const container ={
  display:"grid",
  gridTemplateColumns: "repeat(5,1fr)",
  placeItems: "center",
  height: "100px",
  backgroundColor: "#FFFAFA",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
}
const Image = styled('img')({
    width: "48px",
    height: "48px",
    margin: "0 20px"
})
const AnchorTag = styled('a')({
  textDecoration: 'none',
  color:'#3A1212'
})
const LinkTag = styled(Link)({
  textDecoration: 'none',
  color:'#3A1212',
  borderBottom: '3px solid #FF2625'
})
const Navbar = () => {
  const {LoggedInUserData, setLoggedInUserData,createUser}=useContext(User);
  console.log(LoggedInUserData)
  const [Style, setStyle] = useState("none");

  const Toggle=()=>{
    if(LoggedInUserData?.isAuthrized){
      if(Style=="none"){
        setStyle("");

      }
      else if(Style==""){
        setStyle("none")
      }
    }

  }
  const Logout=()=>{
    setLoggedInUserData(
      {id:"",firstName:"",lastName:"",email:"",Gender:"",isAuthrized:false,Liked:[],Cart:[],isbpn:[],isbpn_Cart:[]}
    ) 
}



  return (
    <Stack 
      direction="row"
      justifyContent='space-evenly'
      sx={{gap:{sm:'122px', xs:'40px'},mt: {sm: '32px', xs:'20px'}, justifyContent:'none'}}
      px='20px'
    >
      <Link to="/">
        <Image src={Logo} className="logo" alt='image not Found' />
        <span className='logo_name' >Gold Gym</span>
      </Link>
      <Stack 
        direction="row"
        alignItems='flex-end'
      >
        <NavLink  to='/' className='item'>Home</NavLink>
        
          {!LoggedInUserData.isAuthrized &&
            <NavLink style={{color:"grey"}} onClick={()=>alert(`login to open exercises tab`)}  className='item'>Exercises</NavLink>}
        <NavLink to="/about" className='item'> About</NavLink>
        <NavLink  to="/contact" className='item'> Contact</NavLink>
 



      </Stack>
    </Stack>
  )
}


export default Navbar

//important points to be noted
// 1) Stack (MUI)
// The Stack component manages layout of immediate children along the vertical or horizontal axis with optional spacing and/or dividers between each child.
// we directly have specified styles for the mui Stack element 
// line-27 : sx basically used for responsiveness
// xs - extra small device
// sm - small device
// px - padding x-axis