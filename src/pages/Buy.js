import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import BuySearch from '../blocks/search/BuySearch';
import SugessBox from '../blocks/sugess/SugessBox';
import PaginationPage from '../components/PaginationPage';
import { toast } from 'react-toastify';
import  axios  from 'axios';
import {PropertiesApi, STATICS} from "../api";
import { context } from './../context/index';
import ReactPaginate from 'react-paginate';


function Buy() {


    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [pageCount, setPageCount] = useState(10);

  const {setShowLoading} = useContext(context);
  const [properties, setProperties] = useState([]);

  
  const fetchproperties = () =>{
    setShowLoading(true);
    axios.get(PropertiesApi + `?pageNumber=1&pageSize=${itemsPerPage}`).then((res)=>{
     setProperties(res.data.properties)
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
  }

  useEffect(() => {
    fetchproperties()
  }, []);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setShowLoading(true);
    axios.get(PropertiesApi + `?pageNumber=${event.selected + 1}&pageSize=${itemsPerPage}`).then((res)=>{
     setProperties(res.data.properties)
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
  };



  return (
        <Container  className="Home pt-5 mt-5 pb-4">

            <Row>
                <Col lg={12} sm={12} className='mx-auto'><BuySearch/></Col>
            </Row>

            <SugessBox properties={properties}/>
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              className={'pagination align-items-center'}
              pageClassName={'page-link mx-2 d-block'}
            />
        </Container>
  );
}

export default Buy;