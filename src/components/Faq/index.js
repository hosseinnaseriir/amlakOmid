import { Container, Row, Col } from 'react-bootstrap';
import FaqSideBar from './FaqSideBar';
import FaqContent from './FaqContent';


const FaqPage = () => {
    return ( 
        <Container className="pt-5 mt-5 pb-4">
        <Row>

            <Col lg={8}>
                <FaqContent/>
            </Col>

            <Col lg={4}>
                <FaqSideBar
                blogsideBarParagraph='لـورم ایپـــسوم متن ساخــــــتگی با تولیـــد سادگـــی نــامفـــهوم از صنعــــت چاپ، و با استفاده از طراحان  گرافیـــک اســت'
                />
             </Col>
            
      
        
           
        
        </Row>
</Container>

     );
}
 
export default FaqPage;