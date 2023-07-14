import React from 'react'
import Header from '../../components/common/Header'
import GUserNavbar from '../../components/guser/GuserNavbar';
import GUserFooter from '../../components/guser/GuserFooter';
import ShowCourses from '../../components/common/ShowCourses';
const GUserServices = () => {
  return (
    <div>
       <Header/>
       <GUserNavbar/>
       <ShowCourses/>
       <GUserFooter/>
    </div>
  )
}

export default GUserServices
