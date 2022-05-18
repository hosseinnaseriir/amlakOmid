import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faBed,faMapMarkerAlt,faColumns,faClock,faPhone} from '@fortawesome/free-solid-svg-icons'


const SaleBox = ({img,title,discription,myClass,phoneNumber}) => {
    return ( 

        <div className={"p-2 " + myClass}>
        <div className="shadow-es text-center pb-2 overflow-hidden rounded-3">
            <img src={img} className="w-100" height={155}/>
            <p className='p-3 text-center'>{discription}</p>
          
            <hr className='he-2 mb-2'/>
            <div className="d-flex justify-content-center px-2 pb-2  dir-r">
            
                <a href={`tel:${phoneNumber}`} className="btn fw-bold btn btn-es mb-lg-0 mt-lg-0 mt-4 mb-4 px-2  he-fit" >
                 
                       شرکت در مزایده</a>
            </div>
        </div>
    </div>


     );
}
 
export default SaleBox;