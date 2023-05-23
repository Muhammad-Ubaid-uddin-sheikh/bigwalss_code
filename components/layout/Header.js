import { AppBar, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Logopng from './logo.png'
import '../../styles/HeaderStyle.css'
import SearchIcon from '@mui/icons-material/Search';
import Close from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
const Header=()=>{
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = ()=>{setMobileOpen(!mobileOpen)};
  const drawer=(
  <Box onClick={handleDrawerToggle}sx={{textAlign:'center',height:'100vh',width:"450px"}}>
            <Typography sx={{flexGrow: 1 , display:'flex'}}>
       {/* <div style={{width:'270px',}}> <img width={'100%'} className="Drawer-menu-img" src={Logopng} alt="Bigwals Logo"/></div> */}
        </Typography>
        <div className='menu-mobile-div' style={{width: '86.5%'}}>
        <div className='menu-mobile-div-row'>
        <div className='menu-mobile-div-colm'>
          <div className='search-icon-row' style={{display:'flex',justifyContent:'space-between',padding:'40px 25px 10px 25px',}}>
          <div className='menu-icons-search'><Close/></div>
          <div className='menu-icons-search'><SearchIcon/></div>
          
          </div>
        <ul className='Mobile-NavigationMenu'>
          <li id='links-color'><Link to={'/'}>Home</Link></li>
            <li id='links-color'><Link to={'/Courses'}>Website</Link></li>
            <li id='links-color'><Link to={'/Media'}>Logo & Branding</Link></li>
            <li id='links-color'><Link to={'/Media'}>Pricing</Link></li>
            <li id='links-color'><Link to={'/Media'}>Portfolio</Link></li>
            <li id='links-color'><Link to={'/Media'}>Digital Marketing</Link></li>
            <li id='links-color'><Link to={'/About'}>About</Link></li>
            <li id='links-color'><Link to={'/Contact'}>Contact US</Link></li>
            </ul>
        </div>
        <div className='menu-mobile-div-colm-2'></div>
          
            {/* <li><Link to={'/Media'}><PersonIcon sx={{ fontSize: "34px",color:'#0d6db7'
}} /></Link></li>
            <li><Link to={'search'}><SearchIcon sx={{ fontSize: "34px",color:'#0d6db7'
}}/></Link></li> */}
          
          </div>
          </div>
  </Box>)
  return(
    <>
   <Box >
    <AppBar componet={'nav'} sx={{background:'white',justifyContent:'center',display:'flex',height:'12vh',borderBottom: "1.5px solid rgba(150, 144, 162, 0.15)",boxShadow:'none'}} >
      <Toolbar>
        <IconButton aria-label='open drawer' edge='start' sx={{margin:2,display:{sm:'none'},}}  onClick={handleDrawerToggle} ><MenuIcon id='menu-hamburger'/></IconButton>
        <Typography sx={{flexGrow: 1 , display:'flex'}}>
       <div className='mneu-hamburger-res' style={{width:'24%'}}> <img width={'100%'} src={Logopng} alt="Bigwals Logo"/></div>
        </Typography>
        <div style={{width:'69%'}}>
        <Box sx={{display:{xs:'none',sm:'block'}}}>
          <ul className='NavigationMenu'>
            <li id='links-color'><Link to={'/'}>Home</Link></li>
            <li id='links-color'><Link to={'/Courses'}>Website</Link></li>
            <li id='links-color'><Link to={'/Media'}>Logo & Branding</Link></li>
            <li id='links-color'><Link to={'/Media'}>Pricing</Link></li>
            <li id='links-color'><Link to={'/Media'}>Portfolio</Link></li>
            <li id='links-color'><Link to={'/Media'}>Digital Marketing</Link></li>
            <li id='links-color'><Link to={'/About'}>About</Link></li>
            <li id='links-color'><Link to={'/Contact'}>Contact US</Link></li>
            {/* <li><Link to={'search'}>
             
}}/></Link></li> */}
          </ul>
         
        </Box>
        </div>
        <div className='icon' style={{width:'7%',display:'flex',justifyContent:'center'}}> <SearchIcon sx={{ fontSize: "25px",color:'rgba(17, 16, 19, 0.9)'}}/> </div>
        </Toolbar>
    </AppBar>
    <Box componet='nav'>
      <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:'block',sm:'none'},"&.MuiDrawer-paper":{boxSizing:'border-box',width:'240px',}}}>{drawer}</Drawer>
    </Box>
    {/* <Box sx={{p:1}}><Box sx={{"@media(max-width:600px)":{padding:3}}}><Toolbar/></Box></Box> */}
    
   </Box>
    </>
  )
  
}
export default Header
