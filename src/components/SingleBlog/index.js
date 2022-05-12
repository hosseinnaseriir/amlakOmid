import { Container, Row, Col } from 'react-bootstrap';
import SingleBlogContent from './SingleBlogContent';
import Estate from './../Estate';
import SingleBlogSideBar from './SingleBlogSideBar';
import { useLocation } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import  axios  from 'axios';
import { SingleBlogApi, STATICS } from './../../api/index';
import parse from 'html-react-parser';
import { toast } from 'react-toastify';
import { context } from './../../context/index';


const SingleBlog = () => {

    const location =useLocation();
    const {setShowLoading} = useContext(context);
     
   const [singleBlog,setSingleBlog]= useState({})

   console.log(singleBlog)

    useEffect(() => {
        setShowLoading(true);

        console.log(location.search)
        console.log(location.search.substring(1))
        axios.get(SingleBlogApi(location.search.substring(1)))
        .then((res)=>{
            setSingleBlog(res.data.articles[0])
        setShowLoading(false);

        }).catch((err)=>{
            toast.err('مشکلی پیش آمده است !')
        setShowLoading(false);

        })
    }, []);

    return ( 
        <Container className="pt-5 mt-5 pb-4">
                <Row>

                    <Col lg={8}>
                        <SingleBlogContent
                        title={singleBlog.title}
                        paragraph={parse(singleBlog.text || '' )}
                        images={STATICS + singleBlog.articleImage}
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