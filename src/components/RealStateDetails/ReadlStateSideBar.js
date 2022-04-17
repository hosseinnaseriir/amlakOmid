import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'

import './RealStateDetails.css'
import Rate from './../Rate';

const ReadlStateSideBar = ({profile,name,user,ActivityBasin
    ,city,Property,NumberProperty,consultants,Numberconsultants,
    phone,phoneNumber
}) => {
    return ( 
       <>
            <div className='shadow-es rounded-3 py-2 px-3 text-center'>
               <img src={profile} width={176} height={118} />

                  <ul className='user-info p-0'>
                     <li className='d-flex justify-content-between px-2 pb-2 pt-3  mb-3'>
                        <span className='f-16 title-text'>{user}</span>
                        <span className='f-14 title-text'>{name}</span>
                     </li>

             
                     <li className='d-flex justify-content-between px-2 py-2 mb-4'>
                           <span className='f-16 title-text'>{ActivityBasin}</span>
                           <span className='f-16 title-text'>{city}</span>
                     </li>

                     <li className='d-flex justify-content-between px-2 py-2 mb-4'>
                           <span className='f-16 title-text'>{Property}</span>
                           <span className='f-16 title-text'>{NumberProperty}</span>
                     </li>


                     <li className='d-flex justify-content-between px-2 py-2 mb-4'>
                           <span className='f-16 title-text'>{consultants}</span>
                           <span className='f-16 title-text'>{Numberconsultants}</span>
                     </li>


                     <li className='d-flex justify-content-between px-2 py-2 mb-4'>
                           <span className='f-16 title-text'>{phone}</span>
                           <span className='f-16 title-text'>{phoneNumber}</span>
                     </li>

                  </ul> 

                  <div className='rate-box'>
                     <Rate/>   
                  </div>

                           <a className="btn btn-es fw-bold call-user-btn mt-3 mb-4" href="#">
                           <FontAwesomeIcon icon={faPhone}/>
                                <span className='flex-2'>
                                    تماس با آژانس
                                </span> 
                            </a>

            </div>
           
          </>
     );
}
 
export default ReadlStateSideBar;