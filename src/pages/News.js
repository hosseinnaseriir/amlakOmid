import { Container, Row, Col} from 'react-bootstrap';
import Title from './../microComponents/Title';
import NewsForm from './../components/News/index';




function News() {
  return (
        <Container  className="pt-5 mt-5 pb-4">
          <Row>
          <Title title="ثبت آگهی املاک"/>
            <NewsForm/>
          </Row>
            
        </Container>
  );
}

export default News;