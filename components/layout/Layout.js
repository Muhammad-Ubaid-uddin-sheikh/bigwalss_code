import React from 'react'
import Header from './Header'
 const Layout=({children})=>{
 
  return(
    <div className='layout' style={{background:'#EBFAF4'}}>
    {/* <Header /> */}
    {children}
    </div>
  )
 
}
export default Layout
