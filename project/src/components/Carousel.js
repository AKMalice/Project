import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/car1.png'
import img2 from './images/car2.png'
import img3 from './images/car3.png'

function Car() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

      
      </Carousel.Item>
    </Carousel>
  );
}

export default Car;