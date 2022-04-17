import { Container, Row, Col } from 'react-bootstrap';
import SingleBlogContent from './SingleBlogContent';
import Estate from './../Estate';
import SingleBlogSideBar from './SingleBlogSideBar';


const SingleBlog = () => {
    return ( 
        <Container className="pt-5 mt-5 pb-4">
                <Row>

                    <Col lg={8}>
                        <SingleBlogContent
                        title='ثبت‌نام بیش از ۹۸۲۰۰۰ نفر در سامانه نهضت ملی مسکن'
                        paragraph='نهضت ملی مسکن یکی از سیاست‌های کلان دولت ســــــیزدهم در حوزه مســـکن است که بر اساس این سیاست، احداث ۴  میلیــــون واحد مسکونی در ۴ سال در برنامه این دولت قرار گرفته است. متقاضیان واقعی مسکن می‌توانند با داشتن چهار  شرط تاهل و سرپرست خانوار بودن، حداقل سا'
                        images='/img/blog-pic.png'
                        />
                    </Col>

                    <Col lg={4}>
                        <SingleBlogSideBar
                        blogsideBarParagraph='لـورم ایپـــسوم متن ساخــــــتگی با تولیـــد سادگـــی نــامفـــهوم از صنعــــت چاپ، و با استفاده از طراحان  گرافیـــک اســت'
                        
                        />
                     </Col>
                    
              
                    <Col lg={12}>
                    <h3 className='f-20 title-text mt-5'>آگهی های مشابه</h3>

                        <Row>
                        <Estate myClass='col-lg-4 col-md-6' img="./img/es1.png" title="کاربرعادی" profile="./img/profile2.png"       location="معالی‌آباد" price="2.7 میلیارد" bed="2" type="مسکونی" time="۳ روز پیش" meter="160"/>
                        <Estate myClass='col-lg-4 col-md-6' img="./img/es2.png" title="آژانس صادقیه" profile="./img/profile1.png"    location="چمران" price="1.7 میلیارد" bed="4" type="مسکونی" time="۳ روز پیش" meter="90"/>
                        <Estate myClass='col-lg-4 col-md-6' img="./img/es3.png" title="آژانس املاک سینا" profile="./img/profile2.png"location="تاچارا" price="2 میلیارد" bed="1" type="مسکونی" time="۳ روز پیش"  meter="210" />
                        </Row>
                  
                    </Col>
                   
                
                </Row>
        </Container>
      

     );
}
 
export default SingleBlog;