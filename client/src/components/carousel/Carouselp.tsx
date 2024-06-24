import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../assets/images/aus.jpg'
import slider2 from '../../assets/images/slider2.jpg'
import slider3 from '../../assets/images/londan5.jpg'
import './carouselp.css'



function Carouselp() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="imgSize"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Australia</h5>
          <p>Australia is a wild place</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imgSize"
          src={slider2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Greece</h5>
          <p>Greece is the most magical place on Earth.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imgSize"
          src={slider3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>England</h5>
          <p>
           Explore The Beuty Of UK
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselp;