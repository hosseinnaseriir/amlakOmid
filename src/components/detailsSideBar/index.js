import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClock,faPhone} from '@fortawesome/free-solid-svg-icons'

import './detailsSideBar.css'
import { svg } from './../../assets/svg';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const DetailsSidBar = ({profile,time,user,mainTitle,kind,Residential,address,addressText,bed,bedNumber,meters,metersNumber,price,priceNumber}) => {
    return ( 
       <>
            <div className='shadow-es rounded-3 py-2 px-3 text-center'>
               <img src={profile} className='rounded-circle ms-1' width={110} height={110} />

                  <ul className='user-info p-0'>
                     <li className='d-flex justify-content-between px-2 pb-2 pt-3  mb-3'>
                        <span className='f-16 title-text'>{user}</span>
                           <div>
                           
                              <FontAwesomeIcon 
                              icon={faClock}
                              className='text-gery ms-2'
                              />
                              <span className='f-14 title-text'>{time}</span>
                           </div>
                     </li>

                     <p className='px-2 py-2 text-es f-18 text-center mb-1'>{mainTitle}</p>
                     

                     <li className='d-flex justify-content-between px-2 py-2 mb-4'>
                           <div>
                              {svg.home}
                              <span className='f-16 title-text'>{kind}</span>
                           </div>
                           <span className='f-16 title-text'>{Residential}</span>
                     </li>


                     <li className='d-flex justify-content-between px-2 py-2 mb-4'>
                           <div>
                              {svg.location}
                              <span className='f-16 title-text'>{address}</span>
                           </div>
                           <span className='f-16 title-text'>{addressText}</span>
                     </li>

                     <li className='d-flex justify-content-between px-2 py-2 mb-4'>
                           <div>
                              {svg.bed}
                              <span className='f-16 title-text'>{bed}</span>
                           </div>
                           <span className='f-16 title-text'>{bedNumber}</span>
                     </li>


                     <li className='d-flex justify-content-between px-2 py-2 mb-4'>
                           <div>
                              {svg.meters}
                              <span className='f-16 title-text'>{meters}</span>
                           </div>
                           <span className='f-16 title-text'>{metersNumber}</span>
                     </li>


                     <li className='d-flex justify-content-between px-2 py-2 mb-4'>
                           <div>
                              {svg.price}
                              <span className='f-16 title-text'>{price}</span>
                           </div>
                           <span className='f-16 title-text'>{priceNumber}</span>
                     </li>

                     <li className='d-flex justify-content-center  px-2 py-2 mb-4'>
                           <a className="btn btn-es show-btn fw-bold" href="#">
                        {svg.video}
                           <span className='flex-2'>
                              بازدیدمجازی
                              </span> 
                              
                              </a>
                     </li>
         
                  </ul> 

                           <Link className="btn btn-es fw-bold call-user-btn mb-4" to={localStorage.getItem('token') ? '/news':"/signin"}>
                           <FontAwesomeIcon
                        icon={faPhone}
                        />
                           <span className='flex-2'>
                              ثبت آگهی
                              </span> 
                              
                              </Link>
            </div>
             <Form.Control as="textarea" className='textarea-sidebar border-es f-16 p-3 my-4' placeholder='یادداشت شما...' rows={5}/>


               <div className='d-flex flex-wrap justify-content-between mb-4'>
                     <Link className="btn fw-bold  flex-1 sideBar-btn" to="/">املاک</Link>
                     <Link className="btn fw-bold  flex-1 sideBar-btn" to="/buy">خریدوفروش خانه</Link>
               </div>
          </>
     );
}
 
export default DetailsSidBar;