import { Grid,} from '@mui/material'
import React from 'react'
import './Footer.css'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import MailIcon from '@mui/icons-material/Mail';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
const Footer = ()=>{
  return (
    <div className='main-div-footer'>

<Grid container spacing={2} justifyContent='space-between' width='85%' margin='auto'>
  <Grid xs={3}>
    <div className="first-footer-div">
        <h2>Logo Services</h2>
        <p>Logo Design</p>
        <p>Business & Advertisement</p>
        <p>Logo & Brand Identity</p>
    </div>
  </Grid>
  <Grid xs={3}>
  <div className="first-footer-div">
  <h2>Website Services</h2>
        <p>What We Do</p>
        <p>Pricing</p>
        <p>How It Works</p>
  </div>
  </Grid>
  <Grid xs={3}>
  <div className="first-footer-div">
  <h2>Other Services</h2>
        <p>Pricing</p>
        <p>Portfolio</p>
        <p>About</p>
        <p>Contact</p>
  </div>
  </Grid>
  <Grid xs={3}>
  <div className="first-footer-div">
  <h2>Contact Us</h2>
  <div className="icon"><MailIcon id='icon-fotter-icon'/><p>support@bigwals.com</p></div>
  <div className="icon"><ShareLocationIcon id='icon-fotter-icon'/><p>Winter Park, FL, USA</p></div>
  <div className="icon"><LocationOnIcon id='icon-fotter-icon'/><p>Morrisville, NC 27560, United States</p> </div>
  <div className="icon"> <PhoneInTalkIcon id='icon-fotter-icon'/><p>+1 9016467815</p> </div>       
  </div>
  </Grid>
</Grid>
<div className="icon-social-media"><a href="https://www.facebook.com/bigwals?mibextid=LQQJ4d" style={{textDecoration:'none'}}><Facebook id='icon-fotter-icon'/></a><a style={{textDecoration:'none'}} href="https://twitter.com/bigwalstudio?s=11"><Twitter id='icon-fotter-icon'/></a><a style={{textDecoration:'none'}} href="https://www.instagram.com/bigwalstudio/?igshid=YmMyMTA2M2Y%3D"><Instagram id='icon-fotter-icon'/></a><a href="https://dribbble.com/Bigwals" style={{textDecoration:'none'}}><SportsBasketballIcon id='icon-fotter-icon'/></a></div>
 
    </div>
  )
}

export default Footer