import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Layout from '../layout/Layout'
import '../../styles/HeaderStyle.css'
import imageSliderLogo from "./images/oh__demo1__1.png" 
import Logo from "./images/gif.gif" 
import CardSlider from '../cardSlider/CardSlider'
import TabList from '../tabsList/TabList'
import { Star } from '@mui/icons-material'
import SecTabForHome from '../secTabForHom/SecTabForHome'


import PricingTablist from '../pricingTablist/PricingTablist'
const Home = () => {
  return (
    <>
    <Layout sx={{width:'100%'}}> 
    <Grid container alignItems='center' direction='row' width='85%' margin='auto' height='90vh' sx={{"@media(max-width:600px)":{width:'100%',height:'auto'}}} >
      <Grid item xs={12} sm={6} order={{xs:2,sm:1}} >
        <Typography id='home-text-div-para'  sx={{"@media(max-width:600px)":{fontSize:'38px' , marginTop:'20px'}}} >We got you covered for all your <br/>
    graphic designing and development needs.
 </Typography>
        <Typography id='home-text-div-main-text'  sx={{"@media(max-width:600px)":{fontSize:'38px'}}} >Thinking Made Visual</Typography> 
        <div style={{display:'flex',justifyContent:'end'}}><img src={Logo} alt='logo' width='100%'/></div>
         {/* <Link to='/courses'><a><div className='button-explore' ><button style={{color:'green',width:'209px',textDecoration:'none',fontSize:'20px',padding:'16px',borderRadius:'10px',textAlign:'center',background:'bottom',fontSize:'22px',margin:'auto'}}><span>Explore Now</span></button></div></a></Link> */}
      </Grid>
      <Grid item xs={12} sm={6} style={{display:'flex' }} justifyContent="end" order={{xs:1,sm:2}}><Box component='img' src={imageSliderLogo} width='100%' sx={{backgroundPosition:'center'}}/></Grid>
      </Grid>
{/* /////////////////////  2nd TAblist //////////////////////////// */}
<div className='heading-home-page' style={{paddingBottom:'40px'}}>
<p className='top-first-heading'>WHAT WE DO</p>
<h1 className='sec-heading-home-page'>Empowering Startups & Businesses</h1>
</div>

<SecTabForHome/>

  {/* ///////////// TAB LIST ADN UPER CONTNET ??//////////?///////////////////     */}
<div className='heading-home-page'>
<p className='top-first-heading'>OUR PORTFOLIO</p>
<h1 className='sec-heading-home-page'>Artwork We Have Created</h1>
<p className='paragraph-content-home'>We believe in producing high-quality artwork that is infused with perfection, dedication, and creativity. To ensure that your brand message reaches the masses, our experienced designers create custom logos and brand identities that capture your brand story. Explore some of our recent projects for our clients.</p>
</div>
<TabList/>

{/* ////////////////// pricing-section-start/////////////////// */}
<div className='pricing-sec-main-div'>
<div className='heading-home-page'>
<p className='top-first-heading'>PRICING & PACKAGES</p>
<h1 className='sec-heading-home-page'>Affordable Packages To Fulfill All Your Business Needs</h1>
</div>
<PricingTablist/>

</div>






{/* ////////////////// pricing-section-end/////////////////// */}

{/* /////////////////// Rating Rewies Cliend ?//////////////////////////// */}
<div className='heading-home-page'>
<p className='top-first-heading'>TESTIMONIALS</p>
<h1 className='sec-heading-home-page'>Words From Our Loving Customers</h1>
<p className='paragraph-content-home'>Read what our happy clients are saying.</p>
</div>

<CardSlider/>
<div className='trust-pilot-content'>
  <div className='logo-trustpilot'><Star id='logo-trust-pilot' /><div className='trustpilot-text'> <a href='https://www.trustpilot.com/review/bigwals.com'>TrustPilot</a> </div></div>
</div>

      </Layout>

      
      </>
  )
}

export default Home