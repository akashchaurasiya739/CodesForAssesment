import React from 'react'
import Header from '../../components/common/Header';
import GUserNavbar from '../../components/guser/GuserNavbar';
import GUserFooter from '../../components/guser/GuserFooter';


const GUserIndex = () => {
  return (
    <div>
      <Header data="Main Page" />
      <GUserNavbar/>
      <GUserFooter/>
    </div>
  )
}

export default GUserIndex
