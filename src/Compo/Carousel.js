import React from 'react'
import {Container , Col , Row} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import { HashLink as Link} from 'react-router-hash-link';

function Carousels() {
  return (
   <Container >
    <Row className=' align-items-center justify-content-center'>
        <Col lg={12}>
        <Carousel >
      <Carousel.Item>
        <img  className='d-block w-100 img-fluid' id='car-img' src={require('../assets/carousel/banner.1.jpg')} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img  className='d-block w-100' id='car-img' src={require('../assets/carousel/pic1.jpeg')} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img  className='d-block w-100' id='car-img' src={require('../assets/carousel/pic2.jpeg')} alt="" />
      </Carousel.Item>
    <Carousel.Item>
      <img  className='d-block w-100' id='car-img' src={require('../assets/carousel/pic3.jpeg')} alt="" />
      </Carousel.Item>
    <Carousel.Item>
      <img  className='d-block w-100' id='car-img' src={require('../assets/carousel/pic4.jpeg')} alt="" />
      </Carousel.Item>
    </Carousel>
        </Col>
    </Row>
 
 <div className='text-center'>

  <h2 className='mt-5 fs-5 text-capitalize fw-bolder'>tourist places to tamilnadu</h2>
  <h2 className='mt-2 fs-5 text-capitalize fw-bolder'>here are the top places to visit in tamilnadu in 2023</h2>

 </div>    
       

<div className='mb-4 mt-5'>
    <ul className='list-unstyled fs-5' id='loc-link' >
      <li className='mx-5 text-center size'>
       <Link smooth to='/#chennai' className="text-decoration-none text-primary ">Chennai</Link>
       </li>
      <li className='mx-5 text-center size'>
       <Link smooth to='/#kodaikanal' className="text-decoration-none text-primary ">Kodaikanal</Link>
       </li>
      <li className='mx-5 text-center size'>
       <Link smooth to='/#madurai' className="text-decoration-none text-primary ">Madurai</Link>
       </li>
      <li className='mx-5 text-center size'>
       <Link smooth to='/#kumbakonam' className="text-decoration-none text-primary ">Kumbakonam</Link>
       </li>
      <li className='mx-5 text-center size'>
       <Link smooth to='/#theni' className="text-decoration-none text-primary ">Theni</Link>
       </li>
    </ul>    

    <ul className='list-unstyled fs-5 ' id='loc-link' >
      <li className='mx-5 text-center size'>
       <Link smooth to='/#rameshwaram' className="text-decoration-none text-primary ">Rameshwaram</Link>
       </li>
      <li className='mx-5 text-center size'>
       <Link smooth to='/#ooty' className="text-decoration-none text-primary  ">Ooty</Link>
       </li>
      <li className='mx-5 text-center size'>
       <Link smooth to='/#kaniyakumari' className="text-decoration-none text-primary ">Kanyakumari</Link>
       </li>
      <li className='mx-5 text-center size'>
       <Link smooth to='/#yercaud' className="text-decoration-none text-primary  ">Yercud</Link>
       </li>
      <li className='mx-5 text-center size'>
       <Link smooth to='/#hogenakkal' className="text-decoration-none text-primary  ">Hogenakkal</Link>
       </li>
    </ul>    
</div>

   </Container>
  )
}

export default Carousels