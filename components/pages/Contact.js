import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Layout from '../layout/Layout'
import { useFormik } from 'formik'
import *as Yup from 'yup'
import '../../styles/HeaderStyle.css'

const Contact = () => {
  const  formik = useFormik({
    initialValues:{
      Name:'',
      Email:'',
      Subject:'',
      Message:''
    },
ValiditionSchema:Yup.object({
  Name:Yup.string().required('this is required'),
  Email:Yup.string().required('this is required'),
  Subject:Yup.string().required('this is required'),
  Message:Yup.string().required('this is required'),
}),onSubmit:(values)=>{
  console.log('from submit values' , values)
}
  })
  return (
<Layout>
<Box className='ContactBannerDiv' sx={{width: '90%',
    margin:'auto',textAlign: 'center',
    paddingTop:'20px',paddingBottom:'80px'}}>
<a><div className='mediaButton' ><button type='Submit'  style={{color:'green',width:'209px',textDecoration:'none',fontSize:'20px',padding:'16px',borderRadius:'10px',textAlign:'center',background:'white',letterSpacing:'2px',fontSize:'22px',margin:'auto'}}><span>Contact Us</span></button></div></a> 
</Box>
  <Box component='form'>
  <Typography variant='h4' mt={6} mb={6} sx={{textAlign: 'center',
    fontSize: '45px',
    color: '#8dc63f',
    fontWeight: '700',letterSpacing:' 2px'}}>Contact Us</Typography>
  <Box component='form' onSubmit={formik.handleSubmit} sx={{width: '84%',
    margin: 'auto'}}>
  <TextField
  label="Name" type='text' variant='outlined' sx={{width:'100%',m:1}} name="Name" onChange={formik.handleChange}
  />
  <TextField
  label="Email" type='mail' variant='outlined' sx={{width:'100%',m:1}}  name="Email" onChange={formik.handleChange}
  /><br></br>
  <TextField 
  label="Subject" type='Text' variant='outlined' fullWidth sx={{width:'100%',m:1}}  name="Subject" onChange={formik.handleChange}
  /><br></br>
  <TextField
  label="Message" type='text' variant='outlined' multiline fullWidth  rows={6} sx={{width:'100%',m:1}}  name="Message  " onChange={formik.handleChange}
  /> <a><div className='button-explore'  style={{width: '90%',
    margin: 'auto',
    marginTop: '30px'}}><button type='submit' className='button-form'><span>Submit</span></button></div></a>
 </Box>  </Box>
</Layout>
  )
}

export default Contact