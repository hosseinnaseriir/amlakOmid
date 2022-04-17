import { Container,Row,Col,ListGroup,Form } from 'react-bootstrap';
import BgTop from '../components/bgTop/BgTop';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMobileAlt,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import Btn from '../microComponents/Btn';
import MyMap from '../components/map/Map';
function Contact() { 

  return (
    <div className="Contact mt-5 pt-4">
        <BgTop img="./img/contact.png" content="ارتباط باما"/>
          <Container className="pt-5 pb-4">
            <Row>
                <Col lg={8} md={6} sm={12}>
                    <ListGroup className='List border-0 mt-3'>
                        <ListGroup.Item className='border-0 bg-transparent px-0 d-flex pb-3'>
                          <FontAwesomeIcon className='text-es h3' icon={faMobileAlt} />
                          <a href='tel:09059048626' className='me-3 mt-2 h5 text-decoration-none text-secondary ' >0905-904-8626</a>
                          <a href='#' className='me-3 mt-2 h5 text-decoration-none text-secondary ' >0905-000-1212</a>
                      </ListGroup.Item>
                        <ListGroup.Item className='border-0 bg-transparent px-0 d-flex pb-3'>
                          <FontAwesomeIcon className='text-es h3' icon={faMapMarkerAlt} />
                          <span className='me-3 mt-2 h5 text-secondary '>شیراز میدان نمازی کتابخانه خوارزمی</span>
                      </ListGroup.Item>
                        <ListGroup.Item className='border-0 bg-transparent px-0 d-flex pb-3'>
                          <FontAwesomeIcon className='text-es h3' icon={faInstagram} />
                          <a href='https://www.instagram.com/_sasan_zare' className='me-3 mt-2 h5 text-decoration-none text-secondary ' target="_blank">sasan_zare_@</a>
                      </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col lg={4}  md={6} sm={12} className='d-flex align-items-center justify-center' >
                  <img className='w-100'  src='./img/info-cantat.png' loading="lazy"/>
                </Col>
                <h3 className='text-center fw-bold h5 pb-4 mt-4'>مشتاقانه پذیرای نظرات، پیشنهادات و انتقادات شما عزیزان هستم.</h3>
                <Col lg={10} sm={12} className='mx-auto'>
                    <Form className='row'>
                    <Form.Group className="mb-4 col-md-6 col-12">
                            <input className='form-control lh-xl border-3 rounded-4' placeholder="نام و نام‌خانوادگی"  />
                    </Form.Group>
                    <Form.Group className="mb-4 col-md-6 col-12">
                        <input type="email" className='email form-control lh-xl border-3 rounded-4' placeholder="آدرس ایمیل" required />
                    </Form.Group>
                    <Form.Group className="mb-4 col-12">
                        <input className='form-control lh-xl border-3 rounded-4' placeholder="عنوان پیام"  />
                    </Form.Group>
                    <Form.Group className="mb-4 col-12">
                       <textarea className='form-control border-3 rounded-4' placeholder='متن پیام...' rows="6" required></textarea>
                    </Form.Group>
                    <Btn title="ارسال پیام" type="submit" myClass="btn-es lh-lg col-lg-3 col-md-4 col-sm-5 col-6 f-22 mx-auto rounded-5"/>
                </Form>
                  
                </Col>
                <h3 className='text-center  h4 pb-4 mt-5 pt-5'>ما را روی نقشه ببینید.</h3>
               
                <Col sm={12} className='pb-3'>
                  <MyMap/>

                </Col>
            </Row>
        </Container>
    </div> 
  );
}

export default Contact;