import {Col } from 'react-bootstrap';

function Title({title,classes}) {
    return (
       <Col sm={12} className={`text-center mt-5 pt-4 d-flex flex-column align-items-center ${classes}`}>
       <hr className="bg-es he-2" width="350px"/>
         <h3 className='h5 fw-bold bg-white hr-title px-3' style={{ fontFamily: 'yekan'}}>
               {title}
           </h3>  
     </Col>
    );
  }
  
  export default Title;