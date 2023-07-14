import React from 'react'
import Header from '../../components/common/Header';
import GUserNavbar from '../../components/guser/GuserNavbar';
import GUserFooter from '../../components/guser/GuserFooter';
import MyCard from '../../components/common/MyCard';


const GUserAbout = () => {
  return (
    <div>
      <Header data="About" />
      <GUserNavbar/>
      <MyCard/> 
      <GUserFooter/>
    </div>
  )
}

export default GUserAbout
