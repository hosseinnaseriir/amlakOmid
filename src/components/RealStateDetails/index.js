import './RealStateDetails.css'
import ReadlStateSideBar from './ReadlStateSideBar';
import { Container, Row, Col } from 'react-bootstrap';
import RealStateDetailsContent from './RealStateDetailsContent';


const RealStateDetails = () => {
    return ( 
        <Container className="pt-5 mt-5 pb-4">
                <Row>
                    <Col lg={4}>
                    <ReadlStateSideBar
                        profile="./img/realState/SideBarProfile.png"
                        name='اقای صادقی'
                        user='نام مدیر'
                        ActivityBasin='حوضه فعالیت'
                        city='شیراز محله معالی آباد'
                        Property='تعداد ملک'
                        NumberProperty='6'
                        consultants='تعداد مشاورین'
                        Numberconsultants='3'
                        phone='شماره تماس'
                        phoneNumber='09123456789'
                        />
                    </Col>

                    <Col lg={8}>
                      <RealStateDetailsContent/>      
                    </Col>
                
                </Row>
        </Container>
      

     );
}
 
export default RealStateDetails;