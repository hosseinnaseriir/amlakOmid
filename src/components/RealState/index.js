
import { Container,Row,Col } from 'react-bootstrap';
import Title from './../../microComponents/Title';
import Card from './../CardEstae';
import Carousel from './../../blocks/carousel/Carousel';
import './realState.css'
import PaginationPage from './../PaginationPage/index';
import RealStateHeader from './RealStateHeader';

function RealState() {

    const offices = [
        {
          'title': 'آژانس املاک سینا',
          'img': './img/card1.png'
        },
        {
          'title': 'آژانس املاک صادقیه',
          'img': './img/card2.png'
        },
        {
          'title': 'آژانس املاک خروشان',
          'img': './img/card3.png'
        },
        {
          'title': 'آژانس املاک فدک',
          'img': './img/card4.png'
        },
        {
          'title': 'آژانس املاک بهینه',
          'img': './img/card5.png'
        },
        {
          'title': 'آژانس املاک سینا',
          'img': './img/card1.png'
        },
        {
          'title': 'آژانس املاک صادقیه',
          'img': './img/card2.png'
        },
        {
          'title': 'آژانس املاک خروشان',
          'img': './img/card3.png'
        },
        {
          'title': 'آژانس املاک فدک',
          'img': './img/card4.png'
        },
        {
          'title': 'آژانس املاک بهینه',
          'img': './img/card5.png'
        },
        {
            'title': 'آژانس املاک سینا',
            'img': './img/card1.png'
          },
          {
            'title': 'آژانس املاک صادقیه',
            'img': './img/card2.png'
          },
          {
            'title': 'آژانس املاک خروشان',
            'img': './img/card3.png'
          },
          {
            'title': 'آژانس املاک فدک',
            'img': './img/card4.png'
          },
          {
            'title': 'آژانس املاک بهینه',
            'img': './img/card5.png'
          },
      ]



  return (
    <>
    <RealStateHeader/>
        <Container  className="Home pb-4">
            <Row>
              
                <Title title="آژانس‌های املاک برتر"/>
                <Col sm={12} className='pt-5'><Carousel/></Col>

                <Title title="همه آژانس های املاک"/>

                <div className='d-flex flex-wrap mt-3 justify-content-center'>
                    {offices.map((office)=>(
                            <Card key={office.img} myclass='mainCard' img={office.img} title={office.title}/>
                        ))} 
                </div>
            

                 <PaginationPage/>       
              
            </Row>
        </Container>

    </>

  );
}

export default RealState;