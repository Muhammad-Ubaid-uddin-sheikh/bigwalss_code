import { Box } from '@mui/material'
import React from 'react'
import Layout from '../layout/Layout'
import '../../styles/HeaderStyle.css'
import CoursesCards from '../cards/CoursesCards'

const Courses = () => {
  return (
    <Layout>
      <Box className='coursesBannerDiv' sx={{width: '90%',
    margin:'auto',textAlign: 'center',
    paddingTop:'20px',paddingBottom:'80px'}}>
<a><div className='mediaButton' ><button type='Submit'  style={{color:'green',width:'209px',textDecoration:'none',fontSize:'20px',padding:'16px',borderRadius:'10px',textAlign:'center',background:'white',fontSize:'22px',margin:'auto',letterSpacing:'2px'}}><span>Courses</span></button></div></a> 
</Box>
<CoursesCards/>
    </Layout>
  )
}

export default Courses