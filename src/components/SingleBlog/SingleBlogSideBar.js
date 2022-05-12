
import { Link } from 'react-router-dom';

const SingleBlogSideBar = ({blogsideBarParagraph}) => {
    return ( 

        <div className='shadow-es rounded-3 py-3 px-3 mt-4 mt-lg-0 text-center'>

                    <div sm className='dir-r pb-2 pt-1  h3 text-center'>
                            <Link to="/" className='text-decoration-none text-es'>Amlak Omid</Link>
                    </div>

                    <h6 className='title-text f-18'>آژانس مشاوره املاک امید</h6>
           
           <p className='f-15 paragrph-text px-3 py-3'>
               {blogsideBarParagraph}
           </p>

           <Link className="btn btn-es fw-bold px-2 mb-3 w-100" to="/buy">خرید ملک</Link>
           <Link className="btn btn-es fw-bold px-2 mb-3 w-100" to="/buy">رهن و اجاره ملک</Link>
           <Link className="btn btn-es fw-bold px-2 mb-3 w-100" to={localStorage.getItem('token') ? '/news':"/signin"}>ثبت آگهی رایگان ملک</Link>
           <Link className="btn btn-es fw-bold px-2 mb-3 w-100" to={localStorage.getItem('token') ? '/news':"/signin"}>ثبت آگهی مشاورین املاک</Link>
            
         </div>
     );
}
 
export default SingleBlogSideBar;