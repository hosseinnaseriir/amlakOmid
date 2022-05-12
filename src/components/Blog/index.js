import {Row,Col, Container } from 'react-bootstrap';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import PaginationPage from './../PaginationPage/index';
import { useState, useEffect, useContext } from 'react';
import  axios  from 'axios';
import { ArticlesApi, STATICS } from '../../api';
import { context } from './../../context/index';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Blog() {

  const {setShowLoading} = useContext(context);

  const [blogs, setBlogs] = useState([]);



  useEffect(() => {
    setShowLoading(true);

     axios.get(ArticlesApi).then((res)=>{
      setBlogs(res.data.articles)

      if (res.status === 200) {
        setShowLoading(false);
      }
     })
     .catch((err)=>{
      if(err.response?.data){
        err?.response?.data?.errors?.map(issue=> toast.error(issue));
      }else{
         toast.error('مشکلی پیش آمده است !')
      }
      setShowLoading(false);
     })

  }, []);
  console.log(blogs)



  
  return (
      <Container className='mt-5 pt-3'>

        <Row>
          {blogs.map((blog)=>(
              <Col key={blog.normalName} lg={4} md={6} sm={12} className='ArticleCards pt-5'>
                <Link to={`/singleBlog?${blog.normalName}`}>
                  <ArticleCard img={STATICS + blog.articleImage} title={blog.title} content={blog.summary} />
                </Link>
         </Col>
          ))}
        </Row>

        <PaginationPage/>
      </Container>

  );
}

export default Blog;



