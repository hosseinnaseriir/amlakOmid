import { Spinner } from "react-bootstrap";
import { useContext } from 'react';
import { context } from './../../context/index';

const Loading = () => {
    const {showLoading} = useContext(context);
  
    return ( 
          <div
          style={{zIndex:'10000'}}
          className={`w-100 vh-100 d-flex justify-content-center 
          align-items-center position-fixed bg-dark bg-opacity-75
          ${showLoading ? 'd-flex' : 'd-none'}
          `}>
              <Spinner animation="grow" variant="light" />

          </div>      
     );
}
 
export default Loading;