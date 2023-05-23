import React from 'react'
import card from './ImagesAllCard/bg1.jpg'
import card1 from './ImagesAllCard/bg2.jpg'
import card2 from './ImagesAllCard/bg3.jpg'
import card3 from './ImagesAllCard/bg4.jpg'
import card4 from './ImagesAllCard/bg5.jpg'
import card5 from './ImagesAllCard/bg6.jpg'
import card6 from './ImagesAllCard/bg7.jpeg'
import card8 from './ImagesAllCard/bg8.jpg'
import card10 from './ImagesAllCard/bg9.jpg'
import card12 from './ImagesAllCard/bg11.jpg'
import card13 from './ImagesAllCard/bg12.jpg'
import card14 from './ImagesAllCard/bg13.jpg'
import card15 from './ImagesAllCard/bg16.jpeg'
import card16 from './ImagesAllCard/bg15.jpeg'
import card17 from './ImagesAllCard/bg17.jpeg'
import MediaCard from './MediaCard'
import './AllStyle.css';
const BrandingImg = () => {
  return (
    <div><MediaCard 
    img1 = {card} 
    img2={card1}
    img3={card5}
    img4={card3}
    img5={card14}
    img6={card2}
    img7={card6}
    img8={card10}
    img9={card8}
    img10={card15}
    img11={card17}
    img12={card12}
    img13={card13}
    img14={card13}
    img15={card4}
    img16={card16} 
    /></div>
  )
}

export default BrandingImg