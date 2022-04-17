import { Container, Row, Col} from 'react-bootstrap';
import DetailsSidBar from '../components/detailsSideBar';
import HomeDetailsContent from '../components/HomeDetailsContent';
import SugessBox from './../blocks/sugess/SugessBox';




function AdvisorDetail() {
  return (
        <Container  className="pt-5 mt-5 pb-4">
          <Row>
            <Col lg={4}>
              <DetailsSidBar
              profile="./img/profile1.png"
              time='3روز پیش'
              user='کاربرشماره345'
              mainTitle='آپارتمان فرهنگ شهر 110 متر دوخوابه'
              kind='نوع ملک'
              Residential='مسکونی'
              address='آدرس'
              addressText="شیراز محله معالی آباد"
              bed='تعدادتخت خواب'
              bedNumber='2'
              meters='متراژ'
              metersNumber='110'
              price='قیمت'
              priceNumber='2700000000'
              />
            </Col>

            <Col lg={8}>
                <HomeDetailsContent/>
            </Col>

            <Col lg={12}>
              <h3 className='f-20 title-text mt-5'>آگهی های مشابه</h3>

              <SugessBox/>
            </Col>

            
          </Row>
            
        </Container>
  );
}

export default AdvisorDetail;