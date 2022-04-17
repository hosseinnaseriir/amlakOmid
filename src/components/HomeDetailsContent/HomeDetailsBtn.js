import { svg } from './../../assets/svg';
import './detailsStyle.css'

const HomeDetailsBtn = () => {
    return ( 

    <div className='d-flex border-bt pb-4 flex-wrap justify-content-center gap-3 mb-4'>
        <a className="btn d-flex fw-bold   flex-1 border-es  details-content-btn" href="#">{svg.save}
        <span className='text-es f-15'>ذخیره کردن</span>
        </a>

        <a className="btn  d-flex fw-bold   flex-1 border-es  details-content-btn" href="#">{svg.share}
        <span className='text-es f-15'>اشتراک گذاری</span>
        </a>

        <a className="btn  d-flex fw-bold   flex-1 border-es  details-content-btn" href="#">{svg.report}
        <span className='f-15 text-es'>گزارش آگهی</span>
        </a>
    </div>


     );
}
 
export default HomeDetailsBtn;