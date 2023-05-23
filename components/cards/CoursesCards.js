import card from './ImagesAllCard/web.png'
import card1 from './ImagesAllCard/webiste2.jpg'
import card2 from './ImagesAllCard/webiste3.jpeg'
import card3 from './ImagesAllCard/webiste4.jpeg'
import card5 from './ImagesAllCard/webiste5.jpeg'
import card6 from './ImagesAllCard/webiste6.jpg'
import card10 from './ImagesAllCard/webiste7.jpeg'
import card14 from './ImagesAllCard/menu.png'
import MediaCard from './MediaCard'
import './AllStyle.css';
const Website = () => {

  return (
    <>
    <div className="main-media-div" >
    <MediaCard
    img1 = {card} 
    img2={card1}
    img3={card6}
    img4={card3}
    img5={card5}
    img6={card2}
    img7={card10}
    img8={card14}
    />

   </div>
    </>
    
  )
}

export default Website