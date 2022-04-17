import Btn from '../microComponents/Btn'
function RegisterCard({title,content,btn}) { 
  return (
    <div className="RegisterCard border-es text-center pb-2 overflow-hidden rounded-5">
      <h5 className="bg-es text-white py-2 pt-3">{title}</h5>
      <p className='px-2 pt-2 text-center' style={{minHeight: 50}} >{content}</p>
      <Btn title={btn} myClass="btn-border fw-bold col-lg-4 col-md-5 col-6 rounded-5"/>
    </div>
  );
}

export default RegisterCard;