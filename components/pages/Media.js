import { Box } from '@mui/material'
import React from 'react'
import Layout from '../layout/Layout'
import '../../styles/HeaderStyle.css'
import MediaCard from '../cards/MediaCard'
const Media = () => {
  return (
    <Layout>
<Box className='mediaBannerDiv' sx={{width: '90%',
    margin:'auto',textAlign: 'center',
    paddingTop:'20px',paddingBottom:'80px'}}>
<a><div className='mediaButton' ><button type='Submit'  style={{color:'green',width:'209px',textDecoration:'none',fontSize:'20px',padding:'16px',borderRadius:'10px',textAlign:'center',background:'white',fontSize:'22px',margin:'auto',letterSpacing:'2px'}}><span>Media</span></button></div></a> 
</Box>
<MediaCard/>
</Layout>
  )
}

export default Media