import React, { Component } from "react";
import './CardSlider.css'
import Slider from "react-slick";
import CardFrameConmp from "./CardFrameConmp";
import imageSlider from '../cards/ImagesAllCard/hello-150x150.png'
import imageSlider2 from '../cards/ImagesAllCard/home-150x150.png'
import imageSlider3 from '../cards/ImagesAllCard/home-150x150.png'
import imageSlider4 from '../cards/ImagesAllCard/home-150x150.png'
import imageSlider5 from '../cards/ImagesAllCard/home-150x150.png'
import imageSlider6 from '../cards/ImagesAllCard/hello-150x150.png'
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="Main-div-CArd-sldier">
        <Slider {...settings}>
          <div  >
           <CardFrameConmp img={imageSlider} title='Erika Payne-Ghee' paragraph="Absolutely amazing work
Absolutely amazing work! Above my expectations of what I had in mind! Fast return on the files. Will definitely be doing more business in the future" />
          </div>
          <div >
          <CardFrameConmp img={imageSlider2} title='Hagar Khalil' paragraph="I enjoyed working with Ross, he is extremely patient and does exactly what you want. I can really recommend him and his team. Won’t be the last time 🙂" />
          </div>
          <div >
          <CardFrameConmp img={imageSlider3} title='Jonathan' paragraph="Amber Dickson’s Red Rebel Logo Design
Amber was extremely patient with me through several rounds of revisions and delivered a pretty amazing logo " />
          </div>
          <div >
          <CardFrameConmp img={imageSlider4} title='Alex' paragraph="Highly recommend. I had no idea what I wanted, he put ALOT of work in bouncing around off my ideas. Much more work then I paid for. Logo Designer"  />
          </div>
          <div >
          <CardFrameConmp img={imageSlider5} title='Jessika Cabrera' paragraph="I was in the need for a logo designed and Staci was amazing at making me feel comfortable and her work is amazing 🤩 I would definitely recommend for graphic designs." />
          </div>
          <div >
          <CardFrameConmp img={imageSlider6} title='Flynn Russell' paragraph="Had an amazing experience working with the artist, worked very quick, great at listening and piece turned out great.. Will definitely be doing more business in the future" />
          </div>
          {/* <div style={{textAlign:'center'}}>
            <h3>7</h3>
          </div>
          <div style={{textAlign:'center'}}>
            <h3>8</h3>
          </div>
          <div style={{textAlign:'center'}}>
            <h3>9</h3>
          </div> */}
        </Slider>
      </div>
    );
  }
}