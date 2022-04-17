

const RulesContent = ({title,paragraph}) => {
    return ( 
        <div className='shadow-es px-4 py-3 overflow-hidden'>
                <h6 className='f-20 text-center title-text py-3'>{title}</h6>
                <p className='f-16'>{paragraph}</p>
        </div>
     );
}
 
export default RulesContent;