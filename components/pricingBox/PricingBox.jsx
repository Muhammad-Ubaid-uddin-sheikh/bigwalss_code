import React from 'react'
import './PricingBox.css'
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import PedalBikeIcon from '@mui/icons-material/PedalBike';
import Button from '@mui/material/Button';
const PricingBox = ({logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,MainLogoFirst,
    logo,title,price,previousPrice,category1,category2,category3,category4,category5,category6,category7,category8,category9,category10
}) => {
    function mouseOver  (){
       document.querySelector('#pedal-bike-pricing').style.color='black' ;
    }
    function mouseOut(){
        document.querySelector('#pedal-bike-pricing').style.color='#00D285';
     }
      function mouseOvernew  (){
       document.querySelector('.colm-main-pricing').style.color='white' ;
    }
    function mouseOutnew(){
        document.querySelector('.colm-main-pricing').style.color='black';
     }
       function MouseEnter (){
       document.querySelector('.pricinbg-page-box').style.color='white' ;
    }
    function mouseLeave(){
        document.querySelector(' .pricinbg-page-box').style.color='#00D285';
     }
    
  return (
    <div className='PricingBox-main-div'> 
     <div className="row-procing-box">
        <div className="colm-pricing-box" onMouseOver={mouseOver} onMouseOut ={mouseOut}>
                <div className="colm-main-pricing" onMouseOver={mouseOvernew} onMouseOut ={mouseOutnew} onMouseEnter={MouseEnter} onMouseLeave={mouseLeave}>

                <div className="row-colm-main-pricing">
               <div className="colm-pricing-inner-box"><div><h3 className='h3-pricing-box'>{MainLogoFirst}
               {/* <PedalBikeIcon id='pedal-bike-pricing'/> */}
               {title}</h3></div></div>
               <div className="colm-pricing-inner-box"><div className='pricinbg-page-box'>{price} <small className='small-pricing'>/Only</small><small className='small-pricing-old'>{previousPrice}</small> </div></div>
               <div className="colm-pricing-inner-box" id='personal-edit-pricing'> <Button id='button-price-project' variant="contained">Start Project</Button></div>
                </div>

<div className="ul-pakages-price">
    <ul className="pakagres-price">
        <li className="pakages"> {logo}
        {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
        {category1}</li>
        <li className="pakages">
        {logo1}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category2}</li>
        <li className="pakages">
        {logo2}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category3}</li>
        <li className="pakages">
        {logo3}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category4}</li>
        <li className="pakages">
        {logo4}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category5}</li>
        <li className="pakages">
        {logo5}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category6}</li>
        <li className="pakages">
        {logo6}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category7}</li>
        <li className="pakages">
        {logo7}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category8}</li>
        <li className="pakages">
        {logo8}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category9}</li>
        <li className="pakages">
        {logo9}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category10}</li>
    </ul>
</div>
<div className="third-div-prices-caa">
    <hr />
    <div className="third-row">
        <div className="thrd-colm-price"><p className='paragraph-pricing-box'>Speak With Us <span className='span-pricing-box'>+1 9016467815</span></p></div>
        <div className="thrd-colm-price"><p className='paragraph-pricing-box'>For Rush Delivery <span className='span-pricing-box'>Chat Live</span></p></div>
    </div>
</div>

            </div>


        </div>





        {/* <div className="colm-pricing-box"></div>
        <div className="colm-pricing-box"></div>
        <div className="colm-pricing-box"></div> */}
     </div>
    </div>
  )
}

export default PricingBox