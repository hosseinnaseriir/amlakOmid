import { Container,Row,Col,ListGroup } from 'react-bootstrap';
import BgTop from '../components/bgTop/BgTop';
import Clip from '../components/clip/Clip';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
function About() { 
  const features = [
      'ما اولین مشاوره املاک مدرن در شیراز می باشیم',
      'شما می توانید املاک خود را به راحتی در سایت ما ثبت کنید تا با بهترین قیمت به فروش برسد.',
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
  ]
  return (
    <div className="About mt-5">
        <BgTop img="./img/bg-about.png" content="درباره ما"/>
          <Container className="pt-5 pb-4">
            <Row>
                <Col lg={8} md={6} sm={12}>
                  <p className='lh-xl ps-md-5 px-md-0 px-2'>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </p>
                </Col>
                <Col lg={4} md={6} sm={12} className='d-flex align-items-center justify-center' >
                  <img className='w-100'  src='./img/team.png'/>
                </Col>
                <Col sm={12} className='pt-5 px-md-0 px-3'>
                    <h5 className='fw-bold text-md-end text-center'>با دیدن ویدیوی زیر، ما را بیشتر بشناسید!</h5>
                    <Clip src="./video/video.mp4" cover="./img/cover-about.png"/>
                </Col>
            </Row>
            <Row className='pt-5 mt-5'>
              <Col lg={8} md={6} sm={12} className='px-md-0 px-3'>
                  <h5 className='fw-bold text-md-end text-center'>ویژگی هایی که ما را خاص می کند :</h5>
                  <ListGroup className='List border-0 mt-3'>
                      {features.map((feature)=>(
                        <ListGroup.Item className='border-0 bg-transparent px-0 d-flex pb-3'>
                          <FontAwesomeIcon className='text-es f-25' icon={faCheckSquare} />
                          <span className='me-2' >{feature}</span>
                      </ListGroup.Item>
                      ))}
                  </ListGroup>
                </Col>
                <Col lg={4} md={6} sm={12} className='d-flex align-items-center justify-center' >
                  <img className='w-100'  src='./img/department.png'/>
                </Col>
            </Row>
        </Container>
    </div> 
  );
}

export default About;