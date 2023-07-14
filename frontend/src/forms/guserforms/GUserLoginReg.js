import React from 'react'
import Header from '../../components/common/Header'
import GUserNavbar from '../../components/guser/GuserNavbar';
import GUserFooter from '../../components/guser/GuserFooter';
import LoginReg from '../../components/guser/LoginReg'; 
const GUserLoginReg = () => {
  return (
    <div>
       <Header/>
       <GUserNavbar/>
       <LoginReg/>
       <GUserFooter/>
    </div>
  )
}

export default GUserLoginReg
