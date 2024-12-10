import React from 'react'
import Header from '../component/Header'
import Speciality from '../component/Speciality'
import Topdoctors from '../component/Topdoctors'
import Middle from '../component/Middle'
import Work from '../component/Work'
import CreateAccount from '../component/CreateAccount'
import ContectUs from '../component/ContectUs'
import Newlatter from '../component/Newlatter'
import Comment from '../component/Comment'
const Home = () => {
  return (
    <div>
      <Header/>
      <Speciality/>
      <Topdoctors/>
      <Middle/>
      <Work/>
      <CreateAccount/>
      <ContectUs/>
      <Newlatter/>
      <Comment/>
    </div>
  )
}

export default Home
