import './detailsStyle.css'

const DescriptionParagraph = ({discriptionParagraph}) => {
    return ( 
        <>
        <h3 className="text-es f-16 fw-bold">توضیحات تکمیلی</h3>


            <p className="f-18 title-text description-paragraph">{discriptionParagraph}</p>
        </>

     );
}
 
export default DescriptionParagraph;