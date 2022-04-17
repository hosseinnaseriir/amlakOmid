
import Title from '../../microComponents/Title';
import SearchRealStatDetails from './../RealStateDetails/SearchRealStatDetails';






const SingleBlogContent = ({title,paragraph,images}) => {
    return ( 
        <div className='shadow-es px-4 py-3 overflow-hidden'>
                <h6 className='f-20 text-center title-text py-3'>{title}</h6>
                <p className='f-16'>{paragraph}</p>
                <img src={images} width='100%'/>
        </div>
     );
}
 
export default SingleBlogContent;