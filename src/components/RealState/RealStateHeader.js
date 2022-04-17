import './realState.css'


const RealStateHeader = () => {
    return ( 
        <div className='realStateBack  bg-cover'>
            <div className='d-flex h-100 flex-column justify-content-center align-items-center'>
                <h6 className='f-20 text-white'>جستجوی آسان آژانس املاک</h6>
                <div className='w-100 d-flex justify-content-center align-items-center mt-4 f-18 title-text px-3'>
                    <input type='text' className='px-md-3 px-2' placeholder='نام آژانس مورد نظر خود را وارد کنید'/>
                    <a className="btn btn-es fw-bold px-3 px-md-5 me-2" href="#">جستجو</a>

                </div>
            </div>
        </div>
     );
}
 
export default RealStateHeader;