import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import '../../styles/HeaderStyle.css'
import imageSliderLogo from "./images/banneriamge2.jpeg" 
const About = () => {
  return (
    <Layout >
 <Grid container alignItems='center'  direction='row' width='1300px' margin='auto' height='70vh' sx={{"@media(max-width:600px)":{width:'100%',height:'auto'}}} >
      <Grid item xs={12} sm={6} order={{xs:2,sm:1}}>
        <Typography variant='h3' color='inherit'fontSize="25px" fontFamily= "inherit"
    lineHeight= '1.5' fontWeight="600" letterSpacing='2'sx={{"@media(max-width:600px)":{fontSize:'24px',marginTop: '25px',fontWeight: '400',fontFamily:'inherit'}}}
    >About -- Introduction
 </Typography>
        <Typography variant='h3' color='#777' fontSize="16px" lineHeight='inherit' fontWeight='400' fontFamily="inherit"
         sx={{"@media(max-width:600px)":{fontSize:'20px',lineHeight:'1.9rem'}}} ><span className='saylaniSpanIntro'> Introduction <br></br></span>Saylani Welfare International Trust has been serving humanity for 22 years. Saylani<br></br> has spent around 7 billion rupees in the service of humanity in 2021 and our plan is<br></br> to spend about 11 billion rupees for this cause in 2022.
         </Typography>
      </Grid>
      <Grid item xs={12} sm={6} justifyContent="center" order={{xs:2,sm:1}}><Box component='img' src={imageSliderLogo} width='100%' sx={{backgroundSize:'cover',backgroundPosition:'center',}}/></Grid>
      </Grid>
      <Typography variant='h4' width='90%' margin='auto' fontWeight='600'>MORE
        
      <p className='AboutText1'>Saylani Welfare International Trust has been working for the last 22 years to improve the conditions of the less privileged, helpless, and handicapped individuals. The organization is working day and night to make life happier, especially for the middle class, lower middle class and even lower class. At time of establishing the organization, the founder of Saylani Welfare International Trust and a few of his associates had made a commitment to serve the distressed people living in Pakistan and abroad in all stages of life. It is a blessing in disguise that today the organization is serving humanity in more than 63 areas of life without any discrimination</p>
      <p className='AboutText2'>The soul, founder and patron of this organization is Hazrat Allama Maulana Muhammad Bashir Farooqi. He is also a well-known spiritual person and Islamic scholar in the Islamic world. It is the result of his efforts that today Saylani Welfare International Trust is serving humanity all over the world.</p>
      <p className='AboutText3'>The organization started out as a rented house and today has at least 630 branches worldwide. The organization also has more than 630 Dastarkhwan, where thousands of employees are employed. Today, the organization spends more than 7 billion annually on the service and welfare of humanity. Not only this, but more than 63 spheres of life from birth to death (including food, health, education, social welfare, clean water, marriage, mass I.T training, vocational training, assistance to Syrian and Burmese refugees, pilgrim services, school services fees, easy loans, easy employment, hairdressing, medical & diagnostic center, laboratory tests, x-ray, ultrasound, ECG, consultant clinic, mobile dining, mobile clinic, mobile air care clinic & operation theater, and in case of natural disasters aid) our organization is serving humanity.</p>
      <p className='AboutText4'>More than 300,000 people are benefited daily by the Saylani. The organization provides vocational training to unskilled people in various fields, renting of poor people houses, school fees and annual expenses of their children, assistance in marriage of their daughters, loan facility for running small scale business, rickshaws and motorbikes for employment, stalls, shop delivery, finger chips machine, sewing machines for women and other items are provided.</p>
      </Typography>
    </Layout>
  )
}

export default About