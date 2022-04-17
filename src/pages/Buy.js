import { Container, Row, Col} from 'react-bootstrap';
import BuySearch from '../blocks/search/BuySearch';
import SugessBox from '../blocks/sugess/SugessBox';
import PaginationPage from '../components/PaginationPage';



function Buy() {
  return (
        <Container  className="Home pt-5 mt-5 pb-4">

            <Row>
                <Col lg={12} sm={12} className='mx-auto'><BuySearch/></Col>
            </Row>

            <SugessBox/>
            <PaginationPage/>
        </Container>
  );
}

export default Buy;