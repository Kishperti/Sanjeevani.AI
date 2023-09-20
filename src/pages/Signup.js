import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Registration"
      desc1="Register With Your Mobile Phone OR with your a Finger Prints "
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
