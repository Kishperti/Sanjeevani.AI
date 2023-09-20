import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/slider_img4.svg"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Telemedicine: Bridging Care Beyond Distance."
      desc2=" Your Health, Your Way, Anytime, Anywhere."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
